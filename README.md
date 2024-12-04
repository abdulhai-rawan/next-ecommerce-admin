# eCommerce Admin (Backend)  

This is the **backend/admin dashboard** for a full-stack eCommerce project. Built with **Next.js 15**, **Prisma**, **MySQL**, **NextAuth**, and **Clerk Auth**, this admin interface allows store managers to manage products, orders, and users. It integrates seamlessly with the **frontend** side of the project, which can be found here:  

**Frontend Repository:** [View Here](https://github.com/abdulhai-rawan/next-ecommerce-store.git)  

## [Demo](https://next-ecommerce-admin-black.vercel.app/)  

## Screenshots

![Project Screenshot](https://raw.githubusercontent.com/abdulhai-rawan/next-ecommerce-admin/refs/heads/master/public/screenshots/1.png)
![Project Screenshot](https://raw.githubusercontent.com/abdulhai-rawan/next-ecommerce-admin/refs/heads/master/public/screenshots/2.png)
![Project Screenshot](https://raw.githubusercontent.com/abdulhai-rawan/next-ecommerce-admin/refs/heads/master/public/screenshots/3.png)
![Project Screenshot](https://raw.githubusercontent.com/abdulhai-rawan/next-ecommerce-admin/refs/heads/master/public/screenshots/4.png)

---

## Features  

- **Admin Dashboard**: Manage products, users, and orders for the eCommerce store.  
- **Authentication**: Integrates with **NextAuth** and **Clerk Auth** for secure user login and roles.  
- **Database Integration**: Powered by **Prisma** and **MySQL** for managing store data.  
- **RESTful API**: Handles CRUD operations for products, orders, and users.  

---

## Prerequisites  

- **Next.js version 15.x or above**  
- **npm** or **yarn** installed  
- **MySQL database**  

---

## Getting Started  

### Cloning the Repository  

```bash
git clone https://github.com/abdulhai-rawan/next-ecommerce-admin.git
```

### Navigate to the Project Directory  

```bash
cd next-ecommerce-admin
```

### Install Dependencies  

```bash
npm install
```

### Setup Environment Variables  

Create an `.env.local` file in the root directory and populate it with the following variables:  

```bash
FRONTEND_STORE_URL=                   # URL of the frontend app
DATABASE_URL=                          # Your MySQL database URL
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=     # Clerk Publishable Key
CLERK_SECRET_KEY=                      # Clerk Secret Key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=         # URL for Clerk sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=         # URL for Clerk sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=   # Redirect after sign-in
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=   # Redirect after sign-up
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=     # Cloudinary Cloud Name
STRIPE_API_KEY=                        # Stripe API Key for payments
```

---

## Running the Application  

Start the development server:  

```bash
npm run dev
```

Build the project for production:  

```bash
npm run build
```

Serve the production build:  

```bash
npm run start
```

---

## Available Commands  

| Command          | Description                              |  
| ----------------- | ---------------------------------------- |  
| `npm run dev`     | Starts the development server           |  
| `npm run build`   | Builds the application for production   |  
| `npm run start`   | Starts the production server            |  

---

## Project Structure  

```plaintext
next-ecommerce-admin/
├── public/          # Static assets like images and fonts
├── pages/           # Application pages (Next.js routing)
├── components/      # Reusable UI components
├── prisma/          # Prisma schema and migrations
├── utils/           # Utility functions and helpers
├── package.json     # Project dependencies and scripts
├── env.example      # Example environment configuration
└── README.md        # Project documentation
```

---

## Deployment  

This project is deployed on **Vercel**. For custom deployment, follow these steps:  

1. Build the application:  
   ```bash
   npm run build
   ```
2. Deploy the `.next` folder to your hosting provider.  

---

## Contributing  

Contributions are welcome! If you have any suggestions or improvements, please:  

1. Fork the repository.  
2. Create a feature branch:  
   ```bash
   git checkout -b feature-name
   ```  
3. Commit your changes and push the branch.  
4. Create a pull request.  

---

## License  

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.  

---

## Credits  
Special thanks to [CodeWithAntonio](https://github.com/AntonioErdeljac) for this project ⭐
