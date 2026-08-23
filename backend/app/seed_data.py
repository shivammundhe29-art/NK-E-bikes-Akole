from sqlalchemy.orm import Session
from app.models import Bike, User, ShowroomInfo, TestRideBooking, ServiceBooking, Notification

def seed_database(db: Session):
    # Check if already seeded
    if db.query(Bike).count() > 0:
        return

    # 1. Seed Showroom
    showroom = ShowroomInfo(
        name="NK E-BIKE, Akole",
        address="K.G. Road, Nawalewadi",
        city="Akole",
        district="Ahmednagar",
        state="Maharashtra",
        pincode="422601",
        phone1="1234567890",
        phone2="+91 9270441850",
        email="info@nkebike.com",
        timings="Mon - Sun : 9:00 AM - 8:00 PM",
        map_link="https://maps.google.com/?q=Akole+Maharashtra+422601",
        google_maps_embed="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30090.793739775317!2d74.00164895!3d19.5448375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd8a4c03b1db5d%3A0xe5a1bdfd3e753457!2sAkole%2C%20Maharashtra%20422601!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
    )
    db.add(showroom)

    # 2. Seed Default User (from mockup)
    user = User(
        full_name="Shivam Mundhe",
        mobile_number="+91 9270441850",
        email="shivam.mundhe@example.com",
        password_hash="demo123",
        avatar_url="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
        address="Akole, Maharashtra - 422601"
    )
    db.add(user)
    db.flush()

    # 3. Seed Bikes
    bikes = [
        Bike(
            name="NK Bravo",
            model_code="NK-BRAVO-72V",
            tagline="Maximum Power, Superior Long-Distance Comfort",
            price=109999.0,
            range_km=150,
            top_speed_kmh=60,
            battery_spec="72V 32Ah Advanced Lithium-Ion",
            charging_time="3.5 Hours Fast Charge",
            motor_type="2500W High Torque BLDC Motor",
            brake_type="Front & Rear Disc Brakes (CBS)",
            weight_kg=88,
            image_url="/assets/bikes/nk_bravo.png",
            color_options=["#00D26A", "#111827", "#DC2626", "#E2E8F0"],
            features=[
                "Powerful BLDC Motor",
                "Fast Charging (0 to 80% in 2.5 hrs)",
                "Smart Digital Color Display",
                "Anti Theft Alarm with Motor Lock",
                "Keyless Push-to-Start",
                "Regenerative Braking Technology"
            ],
            is_popular=True,
            is_active=True
        ),
        Bike(
            name="NK Nitro",
            model_code="NK-NITRO-60V",
            tagline="Agile City Commuter with Dynamic Acceleration",
            price=89999.0,
            range_km=120,
            top_speed_kmh=55,
            battery_spec="60V 30Ah LFP Battery",
            charging_time="3 Hours",
            motor_type="1800W High Efficiency BLDC Hub Motor",
            brake_type="Dual Disc Brakes",
            weight_kg=82,
            image_url="/assets/bikes/nk_nitro.png",
            color_options=["#10B981", "#0F172A", "#F59E0B"],
            features=[
                "Dual Riding Modes (Eco / Sport)",
                "LED Projector Headlamps & DRL",
                "High Contrast Digital Odometer",
                "USB Fast Smartphone Charger",
                "All-Weather Tubeless Radial Tyres"
            ],
            is_popular=True,
            is_active=True
        ),
        Bike(
            name="NK Falcon",
            model_code="NK-FALCON-72V",
            tagline="The Ultimate Beast – Extended Range & GPS Tracking",
            price=119999.0,
            range_km=160,
            top_speed_kmh=70,
            battery_spec="72V 40Ah Dual Battery Compatible",
            charging_time="4 Hours",
            motor_type="3000W High Performance BLDC Motor",
            brake_type="Front & Rear Hydraulic Disc Brakes",
            weight_kg=92,
            image_url="/assets/bikes/nk_falcon.png",
            color_options=["#059669", "#1E1B4B", "#DC2626"],
            features=[
                "Dual Removable Battery Option",
                "Live GPS Tracking via Mobile App",
                "Electronic Cruise Control",
                "Heavy-Duty Gas Charged Rear Shocks",
                "Reverse Assist Mode"
            ],
            is_popular=False,
            is_active=True
        ),
        Bike(
            name="NK Lite",
            model_code="NK-LITE-48V",
            tagline="Ultra Lightweight, Economical & Easy to Handle",
            price=74999.0,
            range_km=100,
            top_speed_kmh=45,
            battery_spec="48V 26Ah Portable Lithium Pack",
            charging_time="2.5 Hours",
            motor_type="1200W Low Energy Consumption Motor",
            brake_type="Combi Drum & Disc System",
            weight_kg=74,
            image_url="/assets/bikes/nk_lite.png",
            color_options=["#00D26A", "#64748B", "#F43F5E"],
            features=[
                "Ultra Lightweight Reinforced Alloy Frame",
                "Portable Removable Battery (Carry Anywhere)",
                "25 Litres Deep Under-Seat Storage",
                "Zero Maintenance Design",
                "Smart Battery Management System (BMS)"
            ],
            is_popular=False,
            is_active=True
        )
    ]
    for b in bikes:
        db.add(b)
    db.flush()

    # 4. Seed Sample Test Rides (matching Screen 9)
    test_rides = [
        TestRideBooking(
            user_id=user.id,
            bike_id=bikes[0].id,
            bike_name="NK Bravo",
            booking_date="25 May 2025",
            time_slot="10:00 AM - 11:00 AM",
            full_name="Shivam Mundhe",
            mobile_number="+91 9270441850",
            address="Nawalewadi Road, Akole",
            status="Pending"
        ),
        TestRideBooking(
            user_id=user.id,
            bike_id=bikes[1].id,
            bike_name="NK Nitro",
            booking_date="18 May 2025",
            time_slot="11:00 AM - 12:00 PM",
            full_name="Shivam Mundhe",
            mobile_number="+91 9270441850",
            address="Akole, Maharashtra",
            status="Completed"
        ),
        TestRideBooking(
            user_id=user.id,
            bike_id=bikes[2].id,
            bike_name="NK Falcon",
            booking_date="10 May 2025",
            time_slot="03:00 PM - 04:00 PM",
            full_name="Shivam Mundhe",
            mobile_number="+91 9270441850",
            address="K.G. Road, Akole",
            status="Cancelled"
        )
    ]
    for tr in test_rides:
        db.add(tr)

    # 5. Seed Sample Service Bookings
    services = [
        ServiceBooking(
            user_id=user.id,
            bike_id=bikes[0].id,
            bike_name="NK Bravo",
            vehicle_number="MH 15 AB 1234",
            service_type="General Periodic Service",
            problem_description="Periodic 3000 KM checkup, brake pad inspection and battery health diagnostic.",
            preferred_date="25 May 2025",
            status="In Progress"
        ),
        ServiceBooking(
            user_id=user.id,
            bike_id=bikes[1].id,
            bike_name="NK Nitro",
            vehicle_number="MH 15 CD 5678",
            service_type="Battery Health Diagnostic",
            problem_description="Checking charging efficiency and cell voltage balance.",
            preferred_date="05 May 2025",
            status="Completed"
        )
    ]
    for s in services:
        db.add(s)

    # 6. Seed Notifications (matching Screen 12)
    notifications = [
        Notification(
            user_id=user.id,
            title="Your test ride is confirmed",
            message="25 May 2025 - 10:00 AM at NK E-BIKE Showroom Akole",
            category="ride",
            timestamp_label="2m ago",
            is_read=False
        ),
        Notification(
            user_id=user.id,
            title="Service booking received",
            message="We will contact you soon to confirm technician slot",
            category="service",
            timestamp_label="15m ago",
            is_read=False
        ),
        Notification(
            user_id=user.id,
            title="New festive exchange offer available",
            message="Check out exciting ₹5,000 extra exchange bonus on all EV models!",
            category="promo",
            timestamp_label="1d ago",
            is_read=True
        ),
        Notification(
            user_id=user.id,
            title="Thank you for choosing NK E-BIKE!",
            message="Welcome to the clean, green and electric mobility revolution in Akole.",
            category="info",
            timestamp_label="2d ago",
            is_read=True
        )
    ]
    for n in notifications:
        db.add(n)

    db.commit()
