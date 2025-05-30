# 🛒 Shopping Cart Service

A microservice for displaying selected book details in a shopping cart view, built with **Node.js**, **Express**, **EJS**, and **Bootstrap**. Designed to integrate with the `catalog-service` in a cloud-native bookstore application.

---

## 📦 Features

- Accepts book info via query parameters (`title`, `author`, `price`)
- Displays book details in a styled cart interface
- Lightweight and container-ready (Docker)
- Fully deployable to Kubernetes (e.g., Azure AKS)

---

## 🧾 Requirements

- Node.js 18+
- npm
- Docker (optional)
- Kubernetes (optional for production)

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/shopping-cart-service.git
cd shopping-cart-service
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Locally

```bash
npm start
```

Open in browser:

```
http://localhost:4000/cart?title=Clean+Code&author=Robert+C.+Martin&price=$34.99
```

---

## 🖥️ Project Structure

```
shopping-cart-service/
├── app.js              # Express server
├── views/
│   └── cart.ejs        # EJS template for cart page
├── public/
│   └── style.css       # Custom CSS
├── Dockerfile          # Docker container definition
├── package.json        # Project metadata and scripts
└── README.md           # This file
```

---

## 🐳 Docker

Build and run:

```bash
docker build -t shopping-cart-service .
docker run -p 4000:4000 shopping-cart-service
```

---

## ⚙️ Kubernetes (Optional)

To deploy to AKS or any Kubernetes cluster:

1. Create a `Deployment` and `Service` YAML file.
2. Expose using `LoadBalancer` or Ingress.
3. Connect `catalog-service` to this service via DNS or public IP.

---

## 🔗 Integration with Catalog Service

The catalog service should link to this app like:

```html
<a href="http://<shopping-cart-service-host>:4000/cart?title=<%= book.title %>&author=<%= book.author %>&price=<%= book.price %>">
  Buy Now
</a>
```

---

## 🧠 Tech Stack

- **Express.js** – Web server
- **EJS** – Templating engine
- **Bootstrap 5** – UI styling
- **Docker** – Containerization
- **Kubernetes** – Orchestration (optional)

---

## 📄 License

MIT — free to use, share, and modify.