#!/bin/bash
# Script de déploiement pour angeline-nj.xyz
# À exécuter DIRECTEMENT sur le serveur après connexion SSH

echo "🚀 DÉPLOIEMENT ANGELINE-NJ.XYZ"
echo "========================================"

# Installation des dépendances
echo ""
echo "📦 Installation des dépendances..."
cd /var/www/angeline-nj.xyz
npm install

# Build du projet
echo ""
echo "🔨 Build du projet Next.js..."
npm run build

# Configuration PM2
echo ""
echo "⚙️ Création du fichier ecosystem.config.js..."
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [
    {
      name: 'angeline-nj',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/angeline-nj.xyz',
      env: {
        NODE_ENV: 'production',
        PORT: 4000
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G'
    }
  ]
};
EOF

# Démarrage PM2
echo ""
echo "🚀 Démarrage de l'application avec PM2..."
pm2 start ecosystem.config.js
pm2 save

# Configuration Nginx
echo ""
echo "🌐 Configuration Nginx..."
cat > /etc/nginx/sites-available/angeline-nj.xyz << 'EOF'
server {
    listen 80;
    server_name angeline-nj.xyz www.angeline-nj.xyz;

    location / {
        proxy_pass http://localhost:4000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

# Activation du site
echo ""
echo "🔗 Activation du site Nginx..."
ln -sf /etc/nginx/sites-available/angeline-nj.xyz /etc/nginx/sites-enabled/

# Test et rechargement Nginx
echo ""
echo "🔍 Test de la configuration Nginx..."
nginx -t

echo ""
echo "🔄 Rechargement de Nginx..."
systemctl reload nginx

# Statut final
echo ""
echo "📊 Statut PM2:"
pm2 status

echo ""
echo "✅ DÉPLOIEMENT TERMINÉ"
echo "========================================"
echo ""
echo "🌐 Prochaines étapes:"
echo "1. Configurer le DNS: angeline-nj.xyz → 77.42.34.90"
echo "2. Installer le certificat SSL:"
echo "   certbot --nginx -d angeline-nj.xyz -d www.angeline-nj.xyz"
echo "3. Tester: http://77.42.34.90:4000"
echo ""
echo "📝 Commandes utiles:"
echo "   pm2 logs angeline-nj    # Voir les logs"
echo "   pm2 restart angeline-nj # Redémarrer"
echo "   pm2 monit               # Monitoring"
