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
            name="NK GTR+",
            model_code="NK-GTR-PLUS",
            tagline="India's First Waterproof Charger • Smart Wireless Controller",
            price=51000.0,
            range_km=110,
            top_speed_kmh=60,
            battery_spec="60V 32Ah / 60V 45AH VRLA & Li-Ion",
            charging_time="3-7 Hours",
            motor_type="10\" BLDC Hub Motor (IP67)",
            brake_type="Front & Rear Disc / Drum",
            weight_kg=82,
            image_url="/posters/poster1_gtr_plus.png",
            color_options=["#DC2626", "#000000", "#FFFFFF", "#64748B", "#008080"],
            features=[
                "Waterproof Throttle",
                "123 Gear Parking & Cruise Control",
                "NFC Card Lock & Keyless Entry",
                "Reverse Gear & Anti-Theft Alarm",
                "Bluetooth & Built-in Navigation",
                "Regenerative Braking & Anti-Fire Fuse"
            ],
            is_popular=True,
            is_active=True
        ),
        Bike(
            name="NK Wolf 2.0",
            model_code="NK-WOLF-2.0",
            tagline="Power bhi, Mileage bhi • 120+ Kms Single Charge",
            price=78000.0,
            range_km=120,
            top_speed_kmh=65,
            battery_spec="High Quality 7 Kg Graphene / Lithium",
            charging_time="3 Hours",
            motor_type="High-Power Intelligent Motor",
            brake_type="Dual Disc Brakes with CBS",
            weight_kg=85,
            image_url="/posters/poster2_wolf20.jpg",
            color_options=["#000000", "#FFFFFF", "#EA580C"],
            features=[
                "120+ Kms Single Charge Range",
                "Mobile App Connectivity & GPS Navigation",
                "Bluetooth Mode & NFC Lock/Unlock",
                "Traction Control System",
                "Weather & Humidity Detection",
                "CEAT/Jindal Tubeless Tyres"
            ],
            is_popular=True,
            is_active=True
        ),
        Bike(
            name="NK Aura Pro",
            model_code="NK-AURA-PRO",
            tagline="Smart. Safe. Sustainable. • Your Everyday Electric Companion",
            price=75000.0,
            range_km=90,
            top_speed_kmh=55,
            battery_spec="Smart Lithium-Ion Pack",
            charging_time="3 Hours",
            motor_type="Waterproof BLDC Hub Motor",
            brake_type="Front Disc & Rear Drum Brake",
            weight_kg=78,
            image_url="/posters/poster4_aura_pro.jpg",
            color_options=["#000000", "#FFFFFF", "#F5F5DC"],
            features=[
                "Special Offer Price: ₹75,000",
                "80-90+ Kms Long Range",
                "12 Months Warranty (Battery, Motor, Charger, Controller)",
                "Waterproof Charger with Auto-Cut System",
                "Sleek Retro Ergonomic Design",
                "Digital Odometer & High Lumens LED"
            ],
            is_popular=True,
            is_active=True
        ),
        Bike(
            name="NK Double Light (Wolf)",
            model_code="NK-DOUBLE-LIGHT",
            tagline="Double Light. Double Power. Maximum Impact.",
            price=48000.0,
            range_km=70,
            top_speed_kmh=50,
            battery_spec="VRLA 48V32AH / 60V32AH",
            charging_time="3-7 Hours",
            motor_type="10\" BLDC Hub Motor (IP67)",
            brake_type="Front & Rear Disc / Drum",
            weight_kg=80,
            image_url="/posters/poster5_double_light.png",
            color_options=["#000000", "#FFFFFF", "#F5F5DC"],
            features=[
                "Special Offer Price: ₹48,000",
                "Double Front LED Headlight Styling",
                "48/60/72V Smart Wireless Controller",
                "12\" Front Wheel Rim",
                "12 Months Warranty",
                "Waterproof Throttle & Cruise Control"
            ],
            is_popular=False,
            is_active=True
        ),
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
                "Anti Theft Alarm with Motor Lock"
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
