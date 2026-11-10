export const projectsData = [
  {
    id: 1,
    projectName: "DevTech Blogs",
    projectAbout: "I built DevTech Blogs, a full-stack blog platform using Django, Python, and Tailwind CSS, focusing on creating a clean and responsive user interface. The project features 23+ dynamic routes for public browsing and backend management, along with a custom Admin Dashboard supporting complete CRUD operations for users, categories, and posts. It includes Role-Based Access Control (RBAC) for secure authentication, a multi-field search engine built with Django ORM Q objects, and dynamic Context Processors for global site navigation and automated slug generation. For production, the platform uses Cloudinary for image hosting, WhiteNoise for static asset compression, and automated deployment scripts for cloud hosting.",
    technology: "HTML, Tailwind-Css, Django",
    imageUrl: "/images/devtech_blog.png",
    projectUrl: "https://devtechblogs.nareshdev.in/",
    githubUrl: "https://github.com/naresh-kumar28/Blogs",
    createdAt: "2026-02-15"
  },
  {
    id: 2,
    projectName: "Bishwas IT Solution",
    projectAbout: "Developed Bishwas-IT Solution, a full-stack e-commerce and hardware service platform architected with 99+ HTTP/REST routes across 9 modular Django applications (accounts, cart, store, services, admin, etc.). It features a guest user session cart with seamless authentication migration, automatically merging guest cart items into authenticated user accounts upon login or registration. I implemented a high-performance, dynamic UI using HTMX and Alpine.js across 200+ HTML templates (300+ HTMX attributes), enabling SPA-like live search, infinite scroll, async cart updates, and instant checkout modals without full page reloads. The project also includes Razorpay Payment Gateway integration with dynamic invoicing, cryptographic HMAC signature verification, tax/shipping logic engines, and promo code validation. I built a custom admin and operations dashboard with real-time inventory stock metrics, order status workflows, customer CRM, and hardware service lead management, backed by 18 relational database models with optimized ORM queries (select_related, prefetch_related).",
    technology: "HTML, Tailwind-CSS, HTMX, Alpine.js, Django",
    imageUrl: "/images/bishwas_it.png",
    projectUrl: "https://bishwasitsolution.nareshdev.in/",
    githubUrl: "https://github.com/naresh-kumar28/Bishwas_it",
    createdAt: "2026-01-20"
  },
  {
    id: 3,
    projectName: "BookWorm",
    projectAbout: "I built BookWorm, a scalable e-commerce platform using Django 6.0 and Python, featuring a modular architecture with 95+ dynamic endpoints for catalog management, user accounts, and order processing. The project includes OAuth 2.0 Google Social Authentication via Django-Allauth, along with custom Role-Based Access Control (RBAC) decorators to secure user data and restrict administrative operations. I integrated the Razorpay Payment Gateway with HMAC-SHA256 signature verification, server-side transaction logging, and automated payment status updates. The platform also has a custom Admin Control Panel supporting complete CRUD operations across 10+ business entities, including inventory, coupon engines, order lifecycle management, and user roles, with optimized search and filtering using complex Django ORM queries (Q objects, aggregations, annotations). For media and communication, I used the Cloudinary API for cloud image hosting and SMTP for automated order receipts and inquiries.",
    technology: "HTML , Tailwind-CSS, JS, Django",
    imageUrl: "/images/bookworm.png",
    projectUrl: "https://bookworm.nareshdev.in/",
    githubUrl: "https://github.com/naresh-kumar28/Book",
    createdAt: "2026-03-01"
  }
];
