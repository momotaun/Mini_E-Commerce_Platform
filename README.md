# FastAPI-React Multi-User Blog Template

This project is a full-stack template for a multi-user blog application, featuring a **FastAPI** backend and a **React** (Vite + TypeScript) frontend. It is designed for rapid development, scalability, and ease of deployment using Docker and Docker Compose.

---

## Features

- **Backend:** FastAPI (Python) with JWT authentication, RESTful API, and async support.
- **Frontend:** React 19, TypeScript, React Router, Axios, and Vite for fast development.
- **Dockerized:** Both frontend and backend are containerized for consistent development and deployment.
- **Hot Reloading:** Live code reload for both frontend and backend during development.
- **API Proxy:** Vite proxy setup for seamless frontend-backend communication.
- **Environment Variables:** Easily configurable via `.env` files.

---

## Project Structure

```
Multi-User-Blog/
│
├── backend/                # FastAPI backend
│   ├── app/                # Application code
│   ├── Dockerfile
│   └── ...
│
├── frontend/               # React frontend
│   ├── app/                # Application code
│   ├── Dockerfile
│   └── ...
│
├── docker-compose.yml      # Multi-container orchestration
└── README.md
```

---

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/get-started) and Docker Compose v2+
- (Optional) Python 3.11+ and Node.js 20+ for local development outside Docker

---

### 1. Clone the Repository

```sh
git clone https://github.com/yourusername/Multi-User-Blog.git
cd Multi-User-Blog
```

---

### 2. Environment Variables

- **Backend:** Create `backend/.env` for FastAPI settings (e.g., secret keys, DB URL).
- **Frontend:** Create `frontend/app/.env` for Vite settings (e.g., `VITE_API_BASE_URL`).

Example for `frontend/app/.env`:
```
VITE_API_BASE_URL=http://localhost:8000/api/v1
```

---

### 3. Build and Run with Docker Compose

```sh
docker compose up --build
```

- **Frontend:** [http://localhost:5173](http://localhost:5173)
- **Backend:** [http://localhost:8000](http://localhost:8000/docs) (Swagger UI)

---

### 4. Development Workflow

- **Hot Reloading:** Code changes in `frontend/app` and `backend/app` are reflected live.
- **Install new frontend dependencies:**  
  ```sh
  cd frontend/app
  npm install <package>
  docker compose build frontend
  docker compose up
  ```
- **Install new backend dependencies:**  
  ```sh
  cd backend
  pip install <package>
  # Update requirements.txt as needed
  docker compose build backend
  docker compose up
  ```

---

## API Usage

- All API endpoints are available under `/api/v1/` (configurable).
- Use the Swagger UI at `/docs` for interactive API documentation.

---

## Customization

- **Frontend:** Modify React components in `frontend/app/src`.
- **Backend:** Add FastAPI routes, models, and business logic in `backend/app`.

---

## Deployment

- For production, update environment variables, use production-ready settings, and consider using a reverse proxy (e.g., Nginx).
- Build images with:
  ```sh
  docker compose -f docker-compose.yml -f docker-compose.prod.yml up --build
  ```

---

## Troubleshooting

- **Dependency Issues:**  
  Always rebuild the Docker image after adding/removing dependencies.
- **Port Conflicts:**  
  Ensure ports 5173 (frontend) and 8000 (backend) are available.
- **CORS/API Proxy:**  
  The frontend uses a Vite proxy for `/api` routes. Adjust `vite.config.ts` as needed.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgements

- [FastAPI](https://fastapi.tiangolo.com/)
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Docker](https://www.docker.com)
