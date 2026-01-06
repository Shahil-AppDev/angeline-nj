# Script de deploiement automatique pour angeline-nj.xyz
# Execute toutes les commandes SSH en une seule session

$SERVER = "root@77.42.34.90"

Write-Host "`n🚀 DEPLOIEMENT ANGELINE-NJ.XYZ" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan

# Commandes a executer sur le serveur en une seule session SSH
$commands = @"
echo '📦 Installation des dependances...'
cd /var/www/angeline-nj.xyz
npm install

echo ''
echo '🔨 Build du projet Next.js...'
npm run build

echo ''
echo '⚙️ Creation du fichier ecosystem.config.js pour PM2...'
cat > ecosystem.config.js << 'EOFPM2'
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
EOFPM2

echo ''
echo '🚀 Demarrage de l application avec PM2...'
pm2 start ecosystem.config.js
pm2 save

echo ''
echo '🌐 Configuration Nginx...'
cat > /etc/nginx/sites-available/angeline-nj.xyz << 'EOFNGINX'
server {
    listen 80;
    server_name angeline-nj.xyz www.angeline-nj.xyz;

    location / {
        proxy_pass http://localhost:4000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOFNGINX

echo ''
echo '🔗 Activation du site Nginx...'
ln -sf /etc/nginx/sites-available/angeline-nj.xyz /etc/nginx/sites-enabled/

echo ''
echo '🔍 Test de la configuration Nginx...'
nginx -t

echo ''
echo '🔄 Rechargement de Nginx...'
systemctl reload nginx

echo ''
echo '📊 Statut PM2:'
pm2 status

echo ''
echo '✅ DEPLOIEMENT TERMINE'
echo '========================================'
echo ''
echo '🌐 Prochaines etapes:'
echo '1. Configurer le DNS: angeline-nj.xyz -> 77.42.34.90'
echo '2. Installer le certificat SSL:'
echo '   ssh root@77.42.34.90'
echo '   certbot --nginx -d angeline-nj.xyz -d www.angeline-nj.xyz'
echo '3. Tester: http://77.42.34.90:4000 (puis https://angeline-nj.xyz apres SSL)'
echo ''
echo '📝 Commandes utiles:'
echo '   pm2 logs angeline-nj    # Voir les logs'
echo '   pm2 restart angeline-nj # Redemarrer'
echo '   pm2 monit               # Monitoring'
"@

Write-Host "`n🔐 Connexion SSH au serveur..." -ForegroundColor Yellow
ssh $SERVER $commands

if ($LASTEXITCODE -eq 0) {
  Write-Host "`n✅ DEPLOIEMENT REUSSI!" -ForegroundColor Green
  Write-Host "`n📋 RESUME:" -ForegroundColor Cyan
  Write-Host "- Application deployee sur le port 4000" -ForegroundColor White
  Write-Host "- PM2 configure et demarre" -ForegroundColor White
  Write-Host "- Nginx configure pour angeline-nj.xyz" -ForegroundColor White
  Write-Host "`n⚠️ N'oubliez pas:" -ForegroundColor Yellow
  Write-Host "1. Configurer le DNS" -ForegroundColor White
  Write-Host "2. Installer le certificat SSL" -ForegroundColor White
}
else {
  Write-Host "`n❌ ERREUR LORS DU DEPLOIEMENT" -ForegroundColor Red
  Write-Host "Verifiez les logs ci-dessus pour plus de details" -ForegroundColor Yellow
  Exit 1
}
