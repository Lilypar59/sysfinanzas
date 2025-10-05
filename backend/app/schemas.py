from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional

class UserBase(BaseModel):
    nombre: str
    email: EmailStr
    rol: Optional[str] = "USER"

class UserCreate(UserBase):
    password: str

class UserOut(UserBase):
    id: str
    created_at: datetime

    class Config:
        from_attributes = True  # ✅ Evita el error Pydantic V2




