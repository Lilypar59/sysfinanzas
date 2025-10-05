from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
import os

POSTGRES_USER = os.getenv("POSTGRES_USER", "finuser")
POSTGRES_PASSWORD = os.getenv("POSTGRES_PASSWORD", "finpass")
POSTGRES_DB = os.getenv("POSTGRES_DB", "finsecure")
POSTGRES_HOST = os.getenv("POSTGRES_HOST", "db")
POSTGRES_PORT = os.getenv("POSTGRES_PORT", "5432")

SQLALCHEMY_DATABASE_URL = f"postgresql+psycopg2://{POSTGRES_USER}:{POSTGRES_PASSWORD}@{POSTGRES_HOST}:{POSTGRES_PORT}/{POSTGRES_DB}"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


# from sqlalchemy import create_engine
# from sqlalchemy.ext.declarative import declarative_base
# from sqlalchemy.orm import sessionmaker
# import os

# # Variables de entorno
# DB_USER = os.getenv("POSTGRES_USER", "finuser")
# DB_PASSWORD = os.getenv("POSTGRES_PASSWORD", "finpass")
# DB_HOST = os.getenv("POSTGRES_HOST", "db")
# DB_NAME = os.getenv("POSTGRES_DB", "finsecure")

# SQLALCHEMY_DATABASE_URL = f"postgresql+psycopg://{DB_USER}:{DB_PASSWORD}@{DB_HOST}/{DB_NAME}"

# engine = create_engine(SQLALCHEMY_DATABASE_URL)
# SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base = declarative_base()

# # Dependencia para obtener sesión de BD
# def get_db():
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()
