# 🎬 Online Movie Ticket Booking System

A complete full-stack web application for browsing movies, selecting showtimes, booking seats, and making secure online payments.

🚀 Tech Stack
Frontend

1. React.js

2. Tailwind CSS

3. Axios

4. React Router

5. Context API 

6. Clerk Authentication (Login / Signup / User Management)

Backend

1. Node.js

2. Express.js

3. MongoDB + Mongoose

4. Cloudinary

6. Stripe Payment Gateway

7. JWT Auth (for admin + protected routes)

✨ Features
👥 User Module

1. Login & Signup using Clerk Authentication

2. View all movies with posters, ratings & details

3. View available showtimes for each movie

4. Seat selection UI (Reserved, Booked, Available)

5. Add to favorites / wishlist

6. Secure payment using Stripe

7. View past bookings in profile

8. Update profile photo & details

🎬 Movie & Shows Module

1. Admin can add/edit/delete movies

2. Add multiple showtimes for each movie

3. Track seat availability live

4. Featured movies on homepage

🎟 Booking Module

1. Real-time seat locking

2. Stripe secure payment

3. Booking confirmation email (optional)

4. Unique ticket ID generated

🛠 Admin Module

1. Admin login using JWT

2. Add/edit/delete movies

3. Manage showtimes

4. Manage bookings

5. View users, revenue & analytics

🧭 How It Works
1️⃣ User Authentication (Clerk)

1. Fully managed Auth

2. Social login support

3. Access Clerk’s JWT from backend for verification

2️⃣ Movie Data & Shows

1. Movies stored in MongoDB

2. Each movie has showtimes & seat maps

3. Admin updates reflected immediately

3️⃣ Seat Booking Logic

1. When a user selects seats → temporary lock

2. After payment → seats become permanently booked

3. Prevents double booking

4️⃣ Payment (Stripe)

1. Client calls backend → Stripe Payment Intent created

2. User completes payment → backend validates → booking saved

🛡 Security Features

1. Clerk-managed user authentication

2. HTTPS Stripe transactions

3. JWT-protected admin routes

4. Input validation & sanitization

5. Tokens & Payment data never stored

🤝 Contributing

Pull requests are welcome! For major changes, open an issue first.
