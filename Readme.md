<h3 align="center">🚀 Izorish: Your one-stop ecommerce platform for the latest products</h2>

![Demo App](/client/src/assets/demo.png)

### 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🛠️ [Quick Start](#quick-start)
5. 💡 [Contributing](#contributing)

### <a name="introduction">🤖 Introduction</a>

**Welcome to Izorish, your premier online shopping destination!** Explore a diverse collection of products designed to meet all your needs, from men to women. With our user-friendly interface and secure authentication, shopping has never been easier. Enjoy seamless checkout with multiple payment options, including cash on delivery, and stay updated with real-time order tracking. Join us at Izorish and elevate your online shopping experience today!

### <a name="tech-stack">⚙️ Tech Stack</a>

This project utilizes a robust stack of technologies, including:

- **Frontend:**
  - **React.js:** Building dynamic user interfaces
  - **React Router:** Seamless navigation between different views
  - **TailwindCSS:** Rapidly create beautiful layouts and styles
  - **Context Api:** A simple, scalable state management solution
- **Backend:**
  - **Node.js:** Powering the server-side infrastructure
  - **Express.js:** Building a scalable and efficient API
  - **MongoDB:** Storing and retrieving data efficiently
  - **Mongoose:** An ODM for MongoDB, simplifying database interactions.

### <a name="features">🔋 Features</a>

Discover a fully-featured ecommerce platform designed to provide a seamless shopping experience from browsing to checkout.

### Experience:

- **Secure Authentication:** Protect user data with robust login and signup flows, utilizing JWT-based authentication for secure access.
- **Product Catalog with Variants:** Browse an extensive range of products with support for multiple sizes, colors, and specifications, allowing customers to find exactly what they need.
- **Cart and Checkout:** Add items to your cart, adjust quantities, and proceed to checkout with ease.
- **Multiple Payment Options:** Seamlessly integrated with **Stripe** for secure online payments, including support for **Cash on Delivery (COD)** for added flexibility.
- **Order Tracking:** Keep customers informed with real-time order status updates, from order placement to delivery.

### Admin Features:

- **Admin Dashboard:** A centralized admin panel for easy management of products, orders, and users.
- **Product Management:** Effortlessly upload new products, manage inventory, and edit product details, including pricing, sizes, and availability.
- **Order Management:** View, process, and update customer orders, ensuring smooth operations from placement to fulfillment.

### <a name="quick-start">🛠️ Quick Start</a>

**Prerequisites:**

- Git ([https://git-scm.com/downloads](https://git-scm.com/downloads))
- Node.js ([https://nodejs.org/en](https://nodejs.org/en)) with npm

**Setup .env file:**

Create a `.env` file in the project root directory with the following environment variables (replace placeholders with your actual values):

```
PORT=4000
MONGODB_URI="<mongodb-url>"
CLOUDINARY_API_KEY="<your-cloudinary-api-key>"
CLOUDINARY_SECRET_KEY="<your-cloudinary-secret-key>"
CLOUDINARY_NAME="<your-cloudinary-name>"
JWT_SECRET="<your-jwt-secret>"
STRIPE_SECRET_KEY="<your-stripe-secret-key>"
```

### <a name="contributing">💡 Contributing</a>

We welcome contributions from the community! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with a descriptive message.
4. Push your branch to your forked repository.
5. Open a Pull Request, detailing the changes you've made.

We appreciate your contribution to building an E-commerce site more professional!
