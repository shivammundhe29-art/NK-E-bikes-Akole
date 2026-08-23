import datetime
from sqlalchemy import Column, Integer, String, Float, Boolean, DateTime, Text, ForeignKey, JSON
from sqlalchemy.orm import relationship
from app.database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String(100), nullable=False)
    mobile_number = Column(String(20), unique=True, index=True, nullable=False)
    email = Column(String(100), unique=True, index=True, nullable=True)
    password_hash = Column(String(255), nullable=True)
    avatar_url = Column(String(255), nullable=True)
    address = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    test_rides = relationship("TestRideBooking", back_populates="user")
    service_bookings = relationship("ServiceBooking", back_populates="user")
    notifications = relationship("Notification", back_populates="user")

class Bike(Base):
    __tablename__ = "bikes"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    model_code = Column(String(50), unique=True, index=True)
    tagline = Column(String(255), nullable=True)
    price = Column(Float, nullable=False)
    range_km = Column(Integer, nullable=False)
    top_speed_kmh = Column(Integer, nullable=False)
    battery_spec = Column(String(100), nullable=False)
    charging_time = Column(String(50), default="3-4 Hours")
    motor_type = Column(String(100), default="High Torque BLDC Hub Motor")
    brake_type = Column(String(100), default="Front & Rear Disc Brakes")
    weight_kg = Column(Integer, default=85)
    image_url = Column(String(255), nullable=True)
    color_options = Column(JSON, default=list)  # list of hex colors e.g. ["#00D26A", "#1E293B", "#DC2626"]
    features = Column(JSON, default=list)       # list of strings
    is_popular = Column(Boolean, default=False)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

class TestRideBooking(Base):
    __tablename__ = "test_ride_bookings"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=True)
    bike_id = Column(Integer, ForeignKey("bikes.id"), nullable=True)
    bike_name = Column(String(100), nullable=False)
    booking_date = Column(String(50), nullable=False)
    time_slot = Column(String(50), nullable=False)
    full_name = Column(String(100), nullable=False)
    mobile_number = Column(String(20), nullable=False)
    address = Column(Text, nullable=True)
    status = Column(String(50), default="Pending") # Pending, Confirmed, Completed, Cancelled
    notes = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    user = relationship("User", back_populates="test_rides")
    bike = relationship("Bike")

class ServiceBooking(Base):
    __tablename__ = "service_bookings"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=True)
    bike_id = Column(Integer, ForeignKey("bikes.id"), nullable=True)
    bike_name = Column(String(100), nullable=False)
    vehicle_number = Column(String(50), nullable=False)
    service_type = Column(String(100), nullable=False) # General Service, Battery Health Check, Brake & Tyre, Electrical Repair
    problem_description = Column(Text, nullable=True)
    preferred_date = Column(String(50), nullable=False)
    status = Column(String(50), default="Pending") # Pending, In Progress, Completed, Cancelled
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    user = relationship("User", back_populates="service_bookings")
    bike = relationship("Bike")

class Enquiry(Base):
    __tablename__ = "enquiries"

    id = Column(Integer, primary_key=True, index=True)
    bike_name = Column(String(100), nullable=True)
    full_name = Column(String(100), nullable=False)
    mobile_number = Column(String(20), nullable=False)
    message = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

class Notification(Base):
    __tablename__ = "notifications"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=True)
    title = Column(String(255), nullable=False)
    message = Column(Text, nullable=False)
    category = Column(String(50), default="system") # ride, service, promo, info
    timestamp_label = Column(String(50), default="Just now")
    is_read = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    user = relationship("User", back_populates="notifications")

class ShowroomInfo(Base):
    __tablename__ = "showroom_info"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), default="NK E-BIKE, Akole")
    address = Column(String(255), default="K.G. Road, Nawalewadi")
    city = Column(String(100), default="Akole")
    district = Column(String(100), default="Ahmednagar")
    state = Column(String(100), default="Maharashtra")
    pincode = Column(String(20), default="422601")
    phone1 = Column(String(20), default="1234567890")
    phone2 = Column(String(20), default="+91 9270441850")
    email = Column(String(100), default="info@nkebike.com")
    timings = Column(String(100), default="Mon - Sun : 9:00 AM - 8:00 PM")
    map_link = Column(String(255), default="https://maps.google.com/?q=Akole+Maharashtra+422601")
    google_maps_embed = Column(Text, nullable=True)
