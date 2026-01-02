#!/bin/bash
# 🚀 SCRIPT DE DÉPLOIEMENT COMPLET - ANGELINE-NJ.XYZ
# Serveur Hetzner: 77.42.34.90
# Port: 4000

echo "🚀 DÉPLOIEMENT ANGELINE-NJ.XYZ - DÉBUT"
echo "=========================================="

# ÉTAPE 1: Créer la structure de dossiers
echo ""
echo "📁 ÉTAPE 1: Création de la structure..."
sudo mkdir -p /var/www/angeline-nj.xyz
sudo chown -R $USER:$USER /var/www/angeline-nj.xyz

# ÉTAPE 2: Cloner le repository
echo ""
echo "📥 ÉTAPE 2: Clonage du repository GitHub..."
cd /var/www/angeline-nj.xyz
git clone https://github.com/Shahil-AppDev/angeline-nj.git .

# ÉTAPE 3: Installer les dépendances
echo ""
echo "📦 ÉTAPE 3: Installation des dépendances..."
npm install

# ÉTAPE 4: Créer le fichier .env
echo ""
echo "⚙️ ÉTAPE 4: Configuration de l'environnement..."
cat > .env << 'EOF'
# Base URL
NEXT_PUBLIC_BASE_URL=https://angeline-nj.xyz

# Email (Resend)
RESEND_API_KEY=votre_clé_resend
RESEND_FROM_EMAIL=contact@angeline-nj.xyz

# Admin
ADMIN_USERNAME=admin
ADMIN_PASSWORD=votre_mot_de_passe_sécurisé

# Database
DATABASE_URL="file:./prisma/dev.db"
EOF

echo "⚠️ ATTENTION: Modifiez le fichier .env avec vos vraies clés:"
echo "   nano /var/www/angeline-nj.xyz/.env"
read -p "Appuyez sur ENTRÉE après avoir modifié le .env..."

# ÉTAPE 5: Builder le projet
echo ""
echo "🔨 ÉTAPE 5: Build du projet Next.js..."
npm run build

# ÉTAPE 6: Créer la configuration PM2
echo ""
echo "⚙️ ÉTAPE 6: Configuration PM2..."
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

# ÉTAPE 7: Démarrer avec PM2
echo ""
echo "🚀 ÉTAPE 7: Démarrage de l'application avec PM2..."
pm2 start ecosystem.config.js
pm2 save

# ÉTAPE 8: Configuration Nginx
echo ""
echo "🌐 ÉTAPE 8: Configuration Nginx..."
sudo tee /etc/nginx/sites-available/angeline-nj.xyz > /dev/null << 'EOF'
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

# Activer le site
sudo ln -s /etc/nginx/sites-available/angeline-nj.xyz /etc/nginx/sites-enabled/ 2>/dev/null || echo "Lien symbolique déjà existant"

# Tester et recharger Nginx
echo ""
echo "🔍 Test de la configuration Nginx..."
sudo nginx -t

if [ $? -eq 0 ]; then
    echo "✅ Configuration Nginx valide"
    sudo systemctl reload nginx
    echo "✅ Nginx rechargé"
else
    echo "❌ Erreur dans la configuration Nginx"
    exit 1
fi

# ÉTAPE 9: Certificat SSL
echo ""
echo "🔒 ÉTAPE 9: Installation du certificat SSL..."
echo "Exécutez manuellement:"
echo "sudo certbot --nginx -d angeline-nj.xyz -d www.angeline-nj.xyz"

# ÉTAPE 10: Vérification finale
echo ""
echo "=========================================="
echo "✅ DÉPLOIEMENT TERMINÉ"
echo "=========================================="
echo ""
echo "📊 Statut de l'application:"
pm2 status

echo ""
echo "🌐 Vérifications à faire:"
echo "1. Modifier le fichier .env avec vos vraies clés"
echo "2. Installer le certificat SSL: sudo certbot --nginx -d angeline-nj.xyz -d www.angeline-nj.xyz"
echo "3. Vérifier que le DNS pointe vers 77.42.34.90"
echo "4. Tester: https://angeline-nj.xyz"
echo "5. Vérifier que pay-check.xyz fonctionne toujours"
echo ""
echo "📝 Logs en temps réel:"
echo "pm2 logs angeline-nj"
echo ""
echo "🔄 Pour redémarrer:"
echo "pm2 restart angeline-nj"
