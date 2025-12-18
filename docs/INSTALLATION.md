# Installation Guide

This guide covers multiple ways to run Dymi locally or deploy it to production.

## 📦 Local Development

### Prerequisites
- Node.js 18+ and npm
- Git

### Steps

```bash
# Clone the repository
git clone https://github.com/yourusername/dymi.git
cd dymi

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`

## 🏗️ Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🐳 Docker Deployment

### Using Docker

```bash
# Build the Docker image
docker build -t dymi:latest .

# Run the container
docker run -d -p 8080:80 --name dymi-clock dymi:latest
```

Visit `http://localhost:8080`

### Using Docker Compose

```bash
# Start the service
docker-compose up -d

# Stop the service
docker-compose down
```

## ☁️ Cloud Deployment

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/dymi)

Or manually:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/dymi)

Or use Netlify CLI:

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

### GitHub Pages

The repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to `main`.

1. Go to Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to `main` branch

Your site will be live at `https://yourusername.github.io/dymi/`

### AWS S3 + CloudFront

```bash
# Build the app
npm run build

# Upload to S3
aws s3 sync dist/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

## 📱 PWA Installation

Once deployed, users can install Dymi as a Progressive Web App:

1. Visit the deployed URL
2. Look for the "Install" button in the browser
3. Click to install as a standalone app

## 🔧 Environment Variables

Dymi doesn't require environment variables for basic functionality, but you can optionally set:

```bash
# .env.local (optional)
VITE_APP_TITLE=Dymi
VITE_DEFAULT_THEME=midnight
```

## 🚨 Troubleshooting

### Port already in use

```bash
# Kill process on port 3000
npx kill-port 3000
```

### Node version issues

```bash
# Use nvm to switch Node version
nvm use 20
```

### Build errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📚 Next Steps

- Read the [Contributing Guide](../CONTRIBUTING.md)
- Check out [Customization Options](./CUSTOMIZATION.md)
- Explore [API Documentation](./API.md)
