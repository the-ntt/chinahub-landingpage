# ChinaHub Landing Page

Next.js landing page for ChinaHub, deployed with Docker and Nginx.

## Prerequisites

- Docker and Docker Compose
- Git

## Deployment

### Initial setup

```bash
ssh root@198.46.190.101
cd /usr/src
git clone https://github.com/the-ntt/chinahub-landingpage.git
cd chinahub-landingpage
docker compose up -d --build
```

The site will be available on port 80.

### Redeployment

```bash
ssh root@198.46.190.101
cd /usr/src/chinahub-landingpage
git pull
docker compose up -d --build
```

## DNS Setup

Create an A record pointing your subdomain to `198.46.190.101`, then update `server_name` in `nginx.conf` to match.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
