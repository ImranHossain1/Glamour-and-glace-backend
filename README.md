### Live Site Link: https://pristine-perfection-frontend.vercel.app/

### Backend Code : https://github.com/ImranHossain1/pristine-perfection-backend

### Frontend Code: https://github.com/ImranHossain1/pristine-perfection-frontend

## Authentication:

    ```bash
        # Super Admin Login:
        email: imran@gmail.com
        password: admin123
    ```

    ```bash
        #Admin Login:
        email: helal@gmail.com
        password: admin123
    ```

# Pristine Perfection

Pristine Perfection is a fullstack makeover project built with Next.js, Node.js, Express, Prisma, PostgreSQL, and Cloudinary. The application allows users to book different makeup packages based on various categories, schedule appointments, and post feedback and reviews. Administrators can manage user roles, services, packages, and bookings.

### User Authentication:

- /auth/signUp (POST) //Sign up
- /auth/signIn (POST) //SIGN IN
- /auth/refresh-token (POST) //Refresh Token
- /auth/change-password (PATCH) //Change Password (AUTHENTICATED)

### User Profile:

- /user/my-profile (GET) //GET USER PROFILE (AUTHENTICATED)
- /user/:id (GET) //GET SINGLE USER PROFILE (AUTHENTICATED BY ADMIN AND SUPER ADMIN)
- /user/update-profile (PATCH) UPDATE USER PROFILE (AUTHENTICATED)
- /user/update-profile (PATCH) UPDATE USER PROFILE (AUTHENTICATED)

### Admin Integrations:

- /admin/create-admin (GET) //CREATE ADMIN (AUTHENTICATED BY ADMIN AND SUPER ADMIN)
- /admin/get-user (GET) //GET All USER (AUTHENTICATED BY ADMIN AND SUPER ADMIN)
- /admin/:id (GET) //GET SINGLE USER (AUTHENTICATED BY ADMIN AND SUPER ADMIN)
- /admin/update-user/:id (PATCH) UPDATE USER BY ADMIN (AUTHENTICATED BY ADMIN AND SUPER ADMIN)
- /admin/user-role/:id (PATCH) UPDATE USER ROLE BY ADMIN (AUTHENTICATED BY ADMIN AND SUPER ADMIN)
- /admin/delete-user/:id (DELETE) UPDATE USER PROFILE (AUTHENTICATED BY ADMIN AND SUPER ADMIN)

### Category

- /category (POST) //CREATE CATEGORY (AUTHENTICATED BY ADMIN AND SUPER ADMIN)
- /category/:id (PATCH) //UPDATE CATEGORY (AUTHENTICATED BY ADMIN AND SUPER ADMIN)
- /category (GET) //GET All CATEGORY
- /category/id (GET) //GET SINGLE CATEGORY
- /category/id (DELETE) //DELETE SINGLE CATEGORY (AUTHENTICATED BY ADMIN AND SUPER ADMIN)

### Makeover Service

- /makeover-service (POST) //Create Makeover Service by ADMIN and Super Admin
- /makeover-service/:id (PATCH) // Update service by Admin and Super Admin
- /makeover-service (GET) // Get All Service
- /makeover-service/id (GET) //Get single service
- /makeover-service/:categoryId/category (GET) // Get Service by Category
- /makeover-service/:id (DELETE) // Delete Service

### Booking

- /booking (POST) //Create a booking
- /booking/:id/update-status (PATCH) // Update booking
- /booking/my-booking (GET) // Get user's booking
- /booking/:id/my-booking (GET) // Get single user's booking
- /booking/:id/my-booking (DELETE)
- /booking/:date/by-date (GET) //Get booking by date
- /booking (GET) //GET All bookings
- /booking/:id (GET) // GET Single user's booking
- /booking/:id (PATCH) //Update booking by Admin and Super Admin
- /booking/:id (DELETE) // Delete Booking

### Review

- /review/:id (POST) //Create Review
- /review/:id (PATCH) //Update Review
- /review/:id (DELETE) //Delete Review
- /review (GET) //GET ALL Review

### Feedback

- /feedback (POST) //Create Feedback
- /feedback (GET) //GET ALL Feedback

### Blog

- /blog (POST) //Create Blog
- /blog (GET) //GET ALL Blog
- /blog/:id (GET) //GET Single Blog
- /blog/:id (GET) //GET Delete Blog

### Frequently Ask Question

- /faq (POST) //Create FAQ
- /faq (GET) //GET ALL FAQ
- /faq/:id (GET) //GET Single FAQ
- /faq/:id (GET) //GET Delete FAQ
