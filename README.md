# 🏦 Cloud-Native Three-Tier Banking Application on AWS EKS

> A production-style cloud-native banking application built with modern DevOps practices, deployed on AWS EKS using Kubernetes, GitOps, CI/CD automation, and enterprise-grade observability.

![Architecture Diagram](docs/architecture.png)

---

# 🚀 Project Overview

This project demonstrates the design, containerization, deployment, automation, and monitoring of a **three-tier banking application** running on **Amazon Elastic Kubernetes Service (EKS)**.

The application consists of:

* **Frontend** → React + Vite
* **Backend API** → Node.js + Express
* **Database** → MySQL

The platform implements modern DevOps principles including:

* Containerization
* Infrastructure orchestration
* Continuous Integration (CI)
* GitOps Continuous Deployment (CD)
* Horizontal scaling
* Persistent storage
* Monitoring and observability

---

# 🏗️ Architecture

The solution follows a production-style cloud-native architecture.

```text
Developer
    │
    ▼
GitHub Repository
    │
    ▼
GitHub Actions CI Pipeline
    │
    ▼
DockerHub Container Registry
    │
    ▼
ArgoCD (GitOps)
    │
    ▼
AWS EKS Cluster
    │
    ├── Frontend (React)
    ├── Backend API (Node.js)
    └── MySQL Database
            │
            ▼
      Persistent EBS Volume

Monitoring Stack:
Prometheus → Grafana
Datadog → Infrastructure Observability

Alerting:
Prometheus Alertmanager → Slack / Email
```

---

# ✨ Features

✅ User authentication using JWT

✅ Account and transaction management

✅ Fully containerized application

✅ Kubernetes-native deployment

✅ GitHub Actions CI pipelines

✅ GitOps deployment using ArgoCD

✅ Horizontal Pod Autoscaling (HPA)

✅ Persistent MySQL storage using AWS EBS

✅ Cluster monitoring with Prometheus & Grafana

✅ Infrastructure observability using Datadog

✅ Production-style Kubernetes health probes

---

# 🛠️ Technology Stack

## Frontend

* React
* Vite
* Axios

## Backend

* Node.js
* Express.js
* JWT Authentication

## Database

* MySQL 8

## Containerization

* Docker
* Docker Hub

## Orchestration

* Kubernetes
* Amazon EKS

## CI/CD

* GitHub Actions
* ArgoCD

## Monitoring & Observability

* Prometheus
* Grafana
* Datadog

## Cloud Platform

* AWS
* Amazon EKS
* Amazon EBS
* Elastic Load Balancer

---

# 📂 Repository Structure

```bash
online-bank-app/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   ├── Dockerfile
│   └── server.js
│
├── frontend-react/
│   ├── src/
│   ├── public/
│   └── Dockerfile
│
├── K8s/
│   ├── backend-deployment.yaml
│   ├── frontend-deployment.yaml
│   ├── mysql-deployment.yaml
│   ├── services/
│   ├── configmaps/
│   ├── secrets/
│   ├── hpa/
│   └── pvc/
│
├── docs/
│
├── .github/
│   └── workflows/
│       ├── backend-ci.yml
│       └── frontend-ci.yml
│
└── README.md
```

---

# ⚙️ Local Development

## Clone Repository

```bash
git clone https://github.com/pcdeking/online-bank-app.git

cd online-bank-app
```

---

## Backend Setup

```bash
cd backend

npm install

npm start
```

Backend runs on:

```bash
http://localhost:5000
```

---

## Frontend Setup

```bash
cd frontend-react

npm install

npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 🐳 Docker Deployment

## Build Backend Image

```bash
docker build -t online-bank-app-backend ./backend
```

## Build Frontend Image

```bash
docker build -t online-bank-app-frontend ./frontend-react
```

---

## Run Using Docker Compose

```bash
docker compose up --build -d
```

Verify:

```bash
docker ps
```

---

# ☸️ Kubernetes Deployment

Apply all Kubernetes manifests:

```bash
kubectl apply -f K8s/
```

Verify resources:

```bash
kubectl get all
```

Check pods:

```bash
kubectl get pods
```

---

# ☁️ AWS EKS Deployment

Create cluster:

```bash
eksctl create cluster \
--name bankproject-eks-cluster \
--region us-east-1 \
--nodes 2
```

Update kubeconfig:

```bash
aws eks update-kubeconfig \
--region us-east-1 \
--name bankproject-eks-cluster
```

Verify cluster:

```bash
kubectl get nodes
```

---

# 🔄 CI/CD Pipeline

This project implements Continuous Integration using **GitHub Actions**.

Pipeline stages:

1. Checkout repository
2. Build Docker image
3. Authenticate to DockerHub
4. Push image to DockerHub

Images are automatically published on every push to the `main` branch.

---

# 🚀 GitOps Deployment with ArgoCD

ArgoCD continuously monitors this repository and synchronizes Kubernetes manifests automatically.

Benefits:

* Automated deployments
* Git as single source of truth
* Rollback capability
* Continuous reconciliation

---

# 📈 Monitoring & Observability

## Prometheus

Collects metrics from:

* Nodes
* Pods
* Containers

---

## Grafana

Visualizes:

* CPU usage
* Memory usage
* Network traffic
* Cluster health

---

## Datadog

Provides:

* Infrastructure observability
* Cluster visibility
* Application insights

---

# 📊 Autoscaling

Horizontal Pod Autoscaler (HPA) is configured for:

| Component | Min Pods | Max Pods |
| --------- | -------- | -------- |
| Frontend  | 1        | 3        |
| Backend   | 1        | 5        |

---

# 🔐 Security Considerations

* Kubernetes Secrets used for sensitive values
* ConfigMaps used for application configuration
* Health probes implemented
* Resource requests and limits configured

---

# 🧠 Key Lessons Learned

This project provided hands-on experience in:

* Cloud-native application deployment
* Kubernetes troubleshooting
* GitOps workflows
* CI/CD automation
* Persistent storage management
* Kubernetes autoscaling
* Cluster monitoring and observability
* Production-style DevOps practices

---

# 🐛 Troubleshooting Highlights

### Metrics Server

Issue:

```bash
Metrics API not available
```

Solution:

Configured:

```yaml
--kubelet-insecure-tls
```

---

### MySQL Pod Pending

Issue:

```bash
pod has unbound immediate PersistentVolumeClaims
```

Solution:

Installed AWS EBS CSI Driver and recreated PVC.

---

### ArgoCD Stuck in Progressing State

Issue:

Ingress resource existed without ingress controller.

Solution:

Temporarily disabled ingress resource until ingress controller deployment.

---

# 👨‍💻 Author

Paschal Chukwuka Akabuogu

Cloud & DevOps Engineer

GitHub: https://github.com/pcdeking

LinkedIn: https://www.linkedin.com/in/paschal-akabuogu-185490191

---

# ⭐ Support

If you found this project helpful, please consider giving it a **star ⭐**.
