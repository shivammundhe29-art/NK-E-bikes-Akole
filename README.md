# ⚡ NK E-BIKE Akole – Full Stack Web Application

> **RIDE ELECTRIC. RIDE SMART.**  
> Official full-stack website and interactive booking platform for **NK E-BIKE Showroom (K.G. Road, Nawalewadi, Akole, Maharashtra - 422601)**.

---

## 🚀 Tech Stack

- **Frontend:** React.js, JavaScript (ES6+), HTML5, CSS3 / Custom Electric Design System, Bootstrap 5, Lucide Icons, Canvas Confetti
- **Backend:** Python FastAPI, Pydantic, SQLAlchemy ORM, Uvicorn
- **Database:** PostgreSQL (with automated SQLite fallback for local development)
- **Deployment & Version Control:** Git, GitHub, Vite

---

## 📱 Implemented Screens & Features (Matching Freelance Demo)

1. **Splash Screen:** Animated logo, glowing electric road effect, brand tagline.
2. **Onboarding Screen:** Multi-slide feature carousel (Zero Emission, High Speed 150+ KM range, Akole Showroom Hub) with pagination dots and Next/Skip actions.
3. **Login / Register Screen:** Authentication with mobile number, password toggle, "Forgot Password", and Google login mock.
4. **Home Screen:** Search bar, interactive promo banner ("Ride Electric Ride Smart"), Popular Models catalog (NK Bravo, NK Nitro), and core value highlights.
5. **All E-Bikes List Screen:** Full catalog with price filter slider, minimum range filter, and instant search.
6. **Bike Details Screen:** Multi-color selector, 3 key spec badges (150 KM Range, 60 KM/H Top Speed, 72V 32Ah Battery), checklist of features, and floating action buttons ("Book Test Ride" & "Enquire Now").
7. **Test Ride Booking Screen:** Bike selector, date picker, time slot selector (e.g. 10:00 AM - 11:00 AM), full name, mobile number, and address with celebration confetti.
8. **Service Booking Screen:** Vehicle number (e.g. MH 15 AB 1234), service category dropdown, problem description, preferred date.
9. **My Bookings Screen:** Tabbed view `[Test Rides]` & `[Services]` with live status badges (`Pending`, `In Progress`, `Completed`, `Cancelled`).
10. **User Profile Screen:** Shivam Mundhe profile, mobile (+91 9270441850), My Bookings, My Enquiries, Saved Bikes / Wishlist, Edit Profile, and Logout.
11. **Showroom / Contact Screen:** Akole showroom address, phone numbers, opening hours, Google Maps directions, and click-to-call.
12. **Notifications Screen:** Live notification feed with unread badges, timestamps, and mark all as read.
13. **Slide Drawer / Menu Screen:** Dark emerald drawer with profile header, instant navigation, and logout action.

---

## 🛠️ How to Run Locally

### 1. Start Python FastAPI Backend
Open a terminal in the root folder:

```bash
cd backend
python -m pip install -r requirements.txt
python run.py
```
- API will run at: `http://127.0.0.1:8000`
- Interactive Swagger API Documentation: `http://127.0.0.1:8000/docs`

#### PostgreSQL Database Setup (Optional):
Create a `.env` file in the `backend/` folder:
```env
DATABASE_URL=postgresql://postgres:your_password@localhost:5432/nk_ebike_db
```
*(If no PostgreSQL URL is provided, it automatically creates and runs on local SQLite database `nk_ebike.db` seamlessly!)*

---

### 2. Start React Frontend
Open another terminal:

```bash
cd frontend
npm install
npm run dev
```
- Frontend will run at: `http://localhost:3000`

---

## 📤 How to Upload to GitHub (स्टेप-बाय-स्टेप गाईड)

1. तुमच्या कॉम्प्युटरवर टर्मिनल / Command Prompt उघडा आणि प्रोजेक्टच्या मेन फोल्डरमध्ये जा:
   ```bash
   cd "c:\Users\admin\Desktop\NK E- bikes akole"
   ```

2. Git इनिशियलाइझ करा (जर आधी नसेल केले):
   ```bash
   git init
   ```

3. सर्व फाइल्स स्टेज करा:
   ```bash
   git add .
   ```

4. पहिली कमिट (Initial Commit) करा:
   ```bash
   git commit -m "Initial commit: NK E-BIKE Akole Full-Stack Web Application"
   ```

5. GitHub वर नवीन Repository तयार करा (उदा. `NK-E-BIKE-Akole`).

6. तुमची GitHub Repo लिंक जोडा आणि कोड पुश करा:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPO_NAME>.git
   git push -u origin main
   ```

---

## 📍 Showroom Information
- **Name:** NK E-BIKE Showroom
- **Location:** K.G. Road, Nawalewadi, Akole, Maharashtra - 422601
- **Contact:** +91 9270441850 / 1234567890
- **Email:** info@nkebike.com
- **Timings:** Monday - Sunday (9:00 AM - 8:00 PM)
