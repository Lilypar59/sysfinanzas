from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from datetime import timedelta
from app import models, schemas, database
from app.auth import get_password_hash, verify_password, create_access_token

router = APIRouter(prefix="/auth", tags=["Auth"])

@router.post("/register", response_model=schemas.UserOut)
def register(user: schemas.UserCreate, db: Session = Depends(database.get_db)):
    existing_user = db.query(models.User).filter(models.User.email == user.email).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="El correo ya está registrado")

    # 🧠 Cifrar la contraseña aquí
    hashed_password = get_password_hash(user.password)

    new_user = models.User(
        nombre=user.nombre,
        email=user.email,
        password_hash=hashed_password  # ✅ este campo no puede ser None
    )
    print("DEBUG: contraseña recibida ->", user.password)
    print("DEBUG: tipo de dato ->", type(user.password))

    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user


