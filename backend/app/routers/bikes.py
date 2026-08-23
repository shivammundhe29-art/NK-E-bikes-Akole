from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import Bike
from app.schemas import BikeResponse, BikeCreate

router = APIRouter(prefix="/bikes", tags=["Bikes"])

@router.get("", response_model=List[BikeResponse])
def get_all_bikes(
    search: Optional[str] = None,
    popular: Optional[bool] = None,
    max_price: Optional[float] = None,
    min_range: Optional[int] = None,
    db: Session = Depends(get_db)
):
    query = db.query(Bike).filter(Bike.is_active == True)
    
    if search:
        query = query.filter(
            (Bike.name.ilike(f"%{search}%")) |
            (Bike.tagline.ilike(f"%{search}%")) |
            (Bike.battery_spec.ilike(f"%{search}%"))
        )
    if popular is not None:
        query = query.filter(Bike.is_popular == popular)
    if max_price is not None:
        query = query.filter(Bike.price <= max_price)
    if min_range is not None:
        query = query.filter(Bike.range_km >= min_range)
        
    return query.order_by(Bike.price.desc()).all()

@router.get("/{bike_id}", response_model=BikeResponse)
def get_bike_by_id(bike_id: int, db: Session = Depends(get_db)):
    bike = db.query(Bike).filter(Bike.id == bike_id, Bike.is_active == True).first()
    if not bike:
        raise HTTPException(status_code=404, detail="E-Bike not found")
    return bike

@router.post("", response_model=BikeResponse, status_code=201)
def create_bike(bike_in: BikeCreate, db: Session = Depends(get_db)):
    bike = Bike(**bike_in.model_dump())
    db.add(bike)
    db.commit()
    db.refresh(bike)
    return bike
