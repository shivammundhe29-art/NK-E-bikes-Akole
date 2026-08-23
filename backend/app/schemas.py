from typing import List, Optional
from pydantic import BaseModel, Field
import datetime

# --- Bike Schemas ---
class BikeBase(BaseModel):
    name: str
    model_code: str
    tagline: Optional[str] = None
    price: float
    range_km: int
    top_speed_kmh: int
    battery_spec: str
    charging_time: Optional[str] = "3-4 Hours"
    motor_type: Optional[str] = "High Torque BLDC Hub Motor"
    brake_type: Optional[str] = "Front & Rear Disc Brakes"
    weight_kg: Optional[int] = 85
    image_url: Optional[str] = None
    color_options: Optional[List[str]] = []
    features: Optional[List[str]] = []
    is_popular: Optional[bool] = False
    is_active: Optional[bool] = True

class BikeCreate(BikeBase):
    pass

class BikeResponse(BikeBase):
    id: int
    created_at: Optional[datetime.datetime] = None

    class Config:
        from_attributes = True

# --- Test Ride Schemas ---
class TestRideCreate(BaseModel):
    user_id: Optional[int] = None
    bike_id: Optional[int] = None
    bike_name: str
    booking_date: str
    time_slot: str
    full_name: str
    mobile_number: str
    address: Optional[str] = ""

class TestRideStatusUpdate(BaseModel):
    status: str

class TestRideResponse(BaseModel):
    id: int
    user_id: Optional[int] = None
    bike_id: Optional[int] = None
    bike_name: str
    booking_date: str
    time_slot: str
    full_name: str
    mobile_number: str
    address: Optional[str] = None
    status: str
    notes: Optional[str] = None
    created_at: Optional[datetime.datetime] = None

    class Config:
        from_attributes = True

# --- Service Booking Schemas ---
class ServiceCreate(BaseModel):
    user_id: Optional[int] = None
    bike_id: Optional[int] = None
    bike_name: str
    vehicle_number: str
    service_type: str
    problem_description: Optional[str] = ""
    preferred_date: str

class ServiceStatusUpdate(BaseModel):
    status: str

class ServiceResponse(BaseModel):
    id: int
    user_id: Optional[int] = None
    bike_id: Optional[int] = None
    bike_name: str
    vehicle_number: str
    service_type: str
    problem_description: Optional[str] = None
    preferred_date: str
    status: str
    created_at: Optional[datetime.datetime] = None

    class Config:
        from_attributes = True

# --- Enquiry Schemas ---
class EnquiryCreate(BaseModel):
    bike_name: Optional[str] = None
    full_name: str
    mobile_number: str
    message: Optional[str] = None

class EnquiryResponse(BaseModel):
    id: int
    bike_name: Optional[str] = None
    full_name: str
    mobile_number: str
    message: Optional[str] = None
    created_at: Optional[datetime.datetime] = None

    class Config:
        from_attributes = True

# --- User Schemas ---
class UserLogin(BaseModel):
    mobile_number: str
    password: Optional[str] = None

class UserRegister(BaseModel):
    full_name: str
    mobile_number: str
    email: Optional[str] = None
    password: Optional[str] = None
    address: Optional[str] = None

class UserProfileUpdate(BaseModel):
    full_name: Optional[str] = None
    email: Optional[str] = None
    address: Optional[str] = None
    avatar_url: Optional[str] = None

class UserResponse(BaseModel):
    id: int
    full_name: str
    mobile_number: str
    email: Optional[str] = None
    avatar_url: Optional[str] = None
    address: Optional[str] = None
    created_at: Optional[datetime.datetime] = None

    class Config:
        from_attributes = True

# --- Notification Schemas ---
class NotificationResponse(BaseModel):
    id: int
    user_id: Optional[int] = None
    title: str
    message: str
    category: str
    timestamp_label: Optional[str] = "Just now"
    is_read: bool
    created_at: Optional[datetime.datetime] = None

    class Config:
        from_attributes = True

# --- Showroom Schemas ---
class ShowroomResponse(BaseModel):
    id: int
    name: str
    address: str
    city: str
    district: str
    state: str
    pincode: str
    phone1: str
    phone2: str
    email: str
    timings: str
    map_link: str
    google_maps_embed: Optional[str] = None

    class Config:
        from_attributes = True
