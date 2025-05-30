# 📚 Bookstore Microservices Project

A cloud-native bookstore web app built with a microservices architecture. The system includes two services:

- `catalog-service`: Displays a list of available books with a beautiful UI and a "Buy Now" button.
- `shopping-cart-service`: Shows the selected book in a shopping cart view after clicking "Buy Now".

Both services are containerized, integrated via HTTP, and fully deployable to Kubernetes with CI/CD automation using GitHub Actions.

---

## 🔧 Technologies Used

- **Node.js**, **Express**, **EJS**, **Bootstrap**
- **Docker** & **Docker Hub**
- **GitHub Actions** (CI/CD pipelines)
- **Kubernetes (AKS)** for container orchestration
- **Terraform** (for AKS provisioning)

---

## 🧱 Project Structure

```
bookstore-app/
├── catalog-service/
│   ├── app.js
│   ├── views/index.ejs
│   ├── Dockerfile
│   └── ...
├── shopping-cart-service/
│   ├── app.js
│   ├── views/cart.ejs
│   ├── Dockerfile
│   └── ...
├── k8s/
│   ├── catalog-deployment.yaml
│   ├── cart-deployment.yaml
└── .github/workflows/ci-cd.yml
```

---

## 📘 catalog-service

### Features
- Displays a list of books
- Uses Bootstrap for UI
- "Buy Now" links to shopping cart service
- Built with Express + EJS
- Dockerized and deployed on AKS

### Sample Route
```
GET /
GET /catalog
```

### Example Buy Now Link
```html
<a href="http://<shopping-cart-host>:4000/cart?title=<%= book.title %>&author=<%= book.author %>&price=<%= book.price %>">
  Buy Now
</a>
```

---

## 🛒 shopping-cart-service

### Features
- Accepts book info via query params
- Renders book details in a cart view
- Built with Express + EJS
- Styled with Bootstrap
- Dockerized and deployable to AKS

### Sample Route
```
GET /cart?title=...&author=...&price=...
```

---

## 🚀 Run Locally

### catalog-service
```bash
cd catalog-service
npm install
npm start
```

### shopping-cart-service
```bash
cd shopping-cart-service
npm install
npm start
```

---

## 🐳 Docker

### Build and run catalog-service
```bash
docker build -t catalog-service ./catalog-service
docker run -p 3000:3000 catalog-service
```

### Build and run shopping-cart-service
```bash
docker build -t shopping-cart-service ./shopping-cart-service
docker run -p 4000:4000 shopping-cart-service
```

---

## ⚙️ Kubernetes

Both services include `deployment.yaml` and `service.yaml` manifests and can be deployed to AKS.

---

## 🤖 CI/CD with GitHub Actions

- Automatically builds and pushes Docker images for both services.
- Deploys updated images to AKS using `kubectl`.

---

## 📎 License

MIT — free to use, share, and modify.