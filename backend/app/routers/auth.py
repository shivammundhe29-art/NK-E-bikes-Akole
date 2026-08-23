from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import User
from app.schemas import UserLogin, UserRegister, UserProfileUpdate, UserResponse

router = APIRouter(prefix="/auth", tags=["Authentication & Profile"])

@router.post("/login", response_model=UserResponse)
def login(login_data: UserLogin, db: Session = Depends(get_db)):
    # Clean mobile number
    clean_number = login_data.mobile_number.strip()
    
    # Try exact match or partial match
    user = db.query(User).filter(
        (User.mobile_number == clean_number) | 
        (User.mobile_number.ilike(f"%{clean_number[-10:]}%"))
    ).first()
    
    if not user:
        # For seamless demo/guest login, create a new user profile
        user = User(
            full_name="Shivam Mundhe",
            mobile_number=clean_number,
            email=f"user_{clean_number[-4:]}@nkebike.com",
            avatar_url="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
            address="Akole, Maharashtra - 422601"
        )
        db.add(user)
        db.commit()
        db.refresh(user)
        
    return user

@router.post("/register", response_model=UserResponse, status_code=201)
def register(reg_data: UserRegister, db: Session = Depends(get_db)):
    clean_number = reg_data.mobile_number.strip()
    existing = db.query(User).filter(User.mobile_number == clean_number).first()
    if existing:
        return existing
        
    user = User(
        full_name=reg_data.full_name,
        mobile_number=clean_number,
        email=reg_data.email,
        password_hash="demo_hash",
        avatar_url="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
        address=reg_data.address or "Akole, Maharashtra"
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user

@router.get("/profile/{user_id}", response_model=UserResponse)
def get_user_profile(user_id: int, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@router.put("/profile/{user_id}", response_model=UserResponse)
def update_profile(user_id: int, update_data: UserProfileUpdate, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    if update_data.full_name is not None:
        user.full_name = update_data.full_name
    if update_data.email is not None:
        user.email = update_data.email
    if update_data.address is not None:
        user.address = update_data.address
    if update_data.avatar_url is not None:
        user.avatar_url = update_data.avatar_url

    db.commit()
    db.refresh(user)
    return user
