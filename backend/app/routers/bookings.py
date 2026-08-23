from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
import datetime
from app.database import get_db
from app.models import TestRideBooking, ServiceBooking, Notification
from app.schemas import (
    TestRideCreate, TestRideResponse, TestRideStatusUpdate,
    ServiceCreate, ServiceResponse, ServiceStatusUpdate
)

router = APIRouter(tags=["Bookings"])

# --- Test Ride Endpoints ---
@router.get("/test-rides", response_model=List[TestRideResponse])
def get_test_rides(user_id: Optional[int] = None, db: Session = Depends(get_db)):
    query = db.query(TestRideBooking)
    if user_id:
        query = query.filter(TestRideBooking.user_id == user_id)
    return query.order_by(TestRideBooking.id.desc()).all()

@router.post("/test-rides", response_model=TestRideResponse, status_code=201)
def create_test_ride(ride_in: TestRideCreate, db: Session = Depends(get_db)):
    booking = TestRideBooking(**ride_in.model_dump(), status="Pending")
    db.add(booking)
    db.commit()
    db.refresh(booking)

    # Generate a notification
    notif = Notification(
        user_id=booking.user_id,
        title="Test Ride Requested",
        message=f"Your test ride for {booking.bike_name} on {booking.booking_date} ({booking.time_slot}) has been scheduled!",
        category="ride",
        timestamp_label="Just now",
        is_read=False
    )
    db.add(notif)
    db.commit()

    return booking

@router.patch("/test-rides/{ride_id}/status", response_model=TestRideResponse)
def update_test_ride_status(ride_id: int, status_update: TestRideStatusUpdate, db: Session = Depends(get_db)):
    booking = db.query(TestRideBooking).filter(TestRideBooking.id == ride_id).first()
    if not booking:
        raise HTTPException(status_code=404, detail="Test ride booking not found")
    booking.status = status_update.status
    db.commit()
    db.refresh(booking)
    return booking

# --- Service Booking Endpoints ---
@router.get("/services", response_model=List[ServiceResponse])
def get_service_bookings(user_id: Optional[int] = None, db: Session = Depends(get_db)):
    query = db.query(ServiceBooking)
    if user_id:
        query = query.filter(ServiceBooking.user_id == user_id)
    return query.order_by(ServiceBooking.id.desc()).all()

@router.post("/services", response_model=ServiceResponse, status_code=201)
def create_service_booking(service_in: ServiceCreate, db: Session = Depends(get_db)):
    booking = ServiceBooking(**service_in.model_dump(), status="Pending")
    db.add(booking)
    db.commit()
    db.refresh(booking)

    # Generate a notification
    notif = Notification(
        user_id=booking.user_id,
        title="Service Booking Confirmed",
        message=f"Service request for {booking.bike_name} ({booking.vehicle_number}) received for {booking.preferred_date}.",
        category="service",
        timestamp_label="Just now",
        is_read=False
    )
    db.add(notif)
    db.commit()

    return booking

@router.patch("/services/{service_id}/status", response_model=ServiceResponse)
def update_service_status(service_id: int, status_update: ServiceStatusUpdate, db: Session = Depends(get_db)):
    booking = db.query(ServiceBooking).filter(ServiceBooking.id == service_id).first()
    if not booking:
        raise HTTPException(status_code=404, detail="Service booking not found")
    booking.status = status_update.status
    db.commit()
    db.refresh(booking)
    return booking
