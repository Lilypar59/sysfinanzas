-- -- Activar extensión para UUIDs
-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- -- Tabla de usuarios
-- CREATE TABLE IF NOT EXISTS users (
--   id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
--   email TEXT UNIQUE NOT NULL,
--   password_hash TEXT NOT NULL,
--   nombre TEXT NOT NULL,
--   rol TEXT DEFAULT 'USER',
--   created_at TIMESTAMPTZ DEFAULT now()
-- );

-- -- Tabla de movimientos financieros (libreta)
-- CREATE TABLE IF NOT EXISTS movimientos (
--   id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
--   user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
--   tipo TEXT CHECK (tipo IN ('INGRESO', 'GASTO')) NOT NULL,
--   monto NUMERIC(14,2) NOT NULL,
--   categoria TEXT,
--   nota TEXT,
--   fecha DATE NOT NULL,
--   created_at TIMESTAMPTZ DEFAULT now()
-- );

-- -- Índices para mejorar rendimiento
-- CREATE INDEX IF NOT EXISTS idx_user_email ON users(email);
-- CREATE INDEX IF NOT EXISTS idx_mov_user_fecha ON movimientos(user_id, fecha);

-- ===============================================
-- 📦 Creación de base de datos y usuario
-- ===============================================
-- Este archivo se ejecuta automáticamente al iniciar el contenedor

-- (Esto se ejecuta solo la primera vez, cuando el volumen está vacío)
\c postgres;

DO
$$
BEGIN
   IF NOT EXISTS (
      SELECT FROM pg_catalog.pg_roles WHERE rolname = 'finuser'
   ) THEN
      CREATE ROLE finuser LOGIN PASSWORD 'finpass';
   END IF;
END
$$;

-- ===============================================
-- 📦 Crear base de datos si no existe
-- ===============================================
DO
$$
BEGIN
   IF NOT EXISTS (
      SELECT FROM pg_database WHERE datname = 'finsecure'
   ) THEN
      CREATE DATABASE finsecure OWNER finuser;
   END IF;
END
$$;

-- ===============================================
-- 📦 Crear tabla users y un usuario temporal
-- ===============================================
\c finsecure;

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password_hash VARCHAR(200) NOT NULL,
    rol VARCHAR(50) DEFAULT 'USER',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Inserta un usuario temporal si no existe
INSERT INTO users (nombre, email, password_hash, rol)
SELECT 'Lily', 'lily@email.com',
'$2b$12$hAVpCxl0S3f6Hq2KqvQFte8Q9Nh6a4T4Qk8VjlPjxiLw4b6Gf4Zxy',  -- contraseña: 123456
'USER'
WHERE NOT EXISTS (SELECT 1 FROM users WHERE email='lily@email.com');

-- Tabla de movimientos financieros (libreta)
CREATE TABLE IF NOT EXISTS movimientos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  tipo TEXT CHECK (tipo IN ('INGRESO', 'GASTO')) NOT NULL,
  monto NUMERIC(14,2) NOT NULL,
  categoria TEXT,
  nota TEXT,
  fecha DATE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Índices para mejorar rendimiento

CREATE INDEX IF NOT EXISTS idx_mov_user_fecha ON movimientos(user_id, fecha);