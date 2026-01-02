# 🚀 GUIDE DE DÉPLOIEMENT HETZNER - ANGELINE-NJ.XYZ

## 📋 INFORMATIONS SERVEUR
- **IP**: 77.42.34.90
- **Domaine**: angeline-nj.xyz
- **Projet existant**: pay-check.xyz (à préserver)
- **Stack**: Next.js 15 + Node.js + PM2 + Nginx

---

## 🔧 ÉTAPE 1 : PRÉPARATION REPOSITORY GITHUB

### 1.1 Créer le repository sur GitHub
1. Aller sur https://github.com/new
2. Nom du repository: `angeline-nj`
3. Visibilité: **Private** (recommandé)
4. Ne pas initialiser avec README (déjà fait localement)
5. Créer le repository

### 1.2 Connecter et pusher le code local
```bash
# ✅ DÉJÀ FAIT - Repository configuré
# URL: https://github.com/Shahil-AppDev/angeline-nj.git
# Code pushé avec succès
```

---

## 🖥️ ÉTAPE 2 : CONNEXION AU SERVEUR HETZNER

```bash
# Se connecter en SSH (remplacer USER par votre username)
ssh USER@77.42.34.90
```

---

## 📁 ÉTAPE 3 : STRUCTURE MULTI-SITES SUR LE SERVEUR

### 3.1 Créer la structure de dossiers
```bash
# Structure recommandée
/var/www/
├── pay-check.xyz/          # Projet existant (NE PAS TOUCHER)
└── angeline-nj.xyz/        # Nouveau projet
    ├── .env
    ├── .git/
    ├── app/
    ├── components/
    ├── data/
    ├── lib/
    ├── public/
    ├── package.json
    └── ...
```

### 3.2 Créer le dossier et cloner le repository
```bash
# Créer le dossier
sudo mkdir -p /var/www/angeline-nj.xyz
sudo chown -R $USER:$USER /var/www/angeline-nj.xyz

# Cloner le repository
cd /var/www/angeline-nj.xyz
git clone https://github.com/Shahil-AppDev/angeline-nj.git .
```

---

## 🔧 ÉTAPE 4 : INSTALLATION DES DÉPENDANCES

### 4.1 Vérifier Node.js (version 18+)
```bash
node --version
npm --version
```

### 4.2 Installer les dépendances
```bash
cd /var/www/angeline-nj.xyz
npm install
```

### 4.3 Créer le fichier .env
```bash
nano .env
```

**Contenu du .env** :
```env
# Base URL
NEXT_PUBLIC_BASE_URL=https://angeline-nj.xyz

# Email (Resend)
RESEND_API_KEY=votre_clé_resend
RESEND_FROM_EMAIL=contact@angeline-nj.xyz

# Admin
ADMIN_USERNAME=admin
ADMIN_PASSWORD=votre_mot_de_passe_sécurisé

# Database (si nécessaire)
DATABASE_URL="file:./prisma/dev.db"
```

### 4.4 Builder le projet
```bash
npm run build
```

---

## ⚙️ ÉTAPE 5 : CONFIGURATION PM2

### 5.1 Installer PM2 (si pas déjà installé)
```bash
sudo npm install -g pm2
```

### 5.2 Créer le fichier de configuration PM2
```bash
nano ecosystem.config.js
```

**Contenu** :
```javascript
module.exports = {
  apps: [
    {
      name: 'angeline-nj',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/angeline-nj.xyz',
      env: {
        NODE_ENV: 'production',
        PORT: 3001  // Port différent de pay-check.xyz (probablement 3000)
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G'
    }
  ]
};
```

### 5.3 Démarrer l'application avec PM2
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup  # Suivre les instructions affichées
```

### 5.4 Vérifier le statut
```bash
pm2 status
pm2 logs angeline-nj
```

---

## 🌐 ÉTAPE 6 : CONFIGURATION NGINX (MULTI-SITES)

### 6.1 Créer le fichier de configuration Nginx
```bash
sudo nano /etc/nginx/sites-available/angeline-nj.xyz
```

**Contenu** :
```nginx
server {
    listen 80;
    server_name angeline-nj.xyz www.angeline-nj.xyz;

    location / {
        proxy_pass http://localhost:3001;
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
```

### 6.2 Activer le site
```bash
sudo ln -s /etc/nginx/sites-available/angeline-nj.xyz /etc/nginx/sites-enabled/
```

### 6.3 Tester et recharger Nginx
```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

## 🔒 ÉTAPE 7 : CERTIFICAT SSL (LET'S ENCRYPT)

### 7.1 Installer Certbot (si pas déjà installé)
```bash
sudo apt update
sudo apt install certbot python3-certbot-nginx
```

### 7.2 Obtenir le certificat SSL
```bash
sudo certbot --nginx -d angeline-nj.xyz -d www.angeline-nj.xyz
```

### 7.3 Vérifier le renouvellement automatique
```bash
sudo certbot renew --dry-run
```

---

## 🧪 ÉTAPE 8 : TESTS ET VALIDATION

### 8.1 Vérifier l'application
```bash
# Vérifier que l'app tourne
pm2 status

# Vérifier les logs
pm2 logs angeline-nj --lines 50

# Tester localement
curl http://localhost:3001
```

### 8.2 Vérifier le domaine
- Ouvrir https://angeline-nj.xyz dans un navigateur
- Vérifier le certificat SSL (cadenas vert)
- Tester toutes les pages principales
- Vérifier le blog et les articles

### 8.3 Vérifier que pay-check.xyz fonctionne toujours
- Ouvrir https://pay-check.xyz
- S'assurer qu'aucune régression

---

## 🔄 ÉTAPE 9 : DÉPLOIEMENT DES FUTURES MISES À JOUR

### Script de déploiement automatique
```bash
nano /var/www/angeline-nj.xyz/deploy.sh
```

**Contenu** :
```bash
#!/bin/bash
cd /var/www/angeline-nj.xyz
git pull origin main
npm install
npm run build
pm2 restart angeline-nj
echo "✅ Déploiement terminé"
```

**Rendre exécutable** :
```bash
chmod +x /var/www/angeline-nj.xyz/deploy.sh
```

**Pour déployer une mise à jour** :
```bash
# Local : pusher les changements
git add .
git commit -m "Description des changements"
git push origin main

# Serveur : exécuter le script
ssh USER@77.42.34.90
cd /var/www/angeline-nj.xyz
./deploy.sh
```

---

## 📊 COMMANDES UTILES

### PM2
```bash
pm2 status                    # Statut de toutes les apps
pm2 logs angeline-nj          # Voir les logs
pm2 restart angeline-nj       # Redémarrer l'app
pm2 stop angeline-nj          # Arrêter l'app
pm2 delete angeline-nj        # Supprimer l'app de PM2
pm2 monit                     # Monitoring en temps réel
```

### Nginx
```bash
sudo nginx -t                 # Tester la config
sudo systemctl reload nginx   # Recharger Nginx
sudo systemctl restart nginx  # Redémarrer Nginx
sudo systemctl status nginx   # Statut de Nginx
```

### Logs
```bash
# Logs Nginx
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Logs PM2
pm2 logs angeline-nj --lines 100
```

---

## ⚠️ POINTS D'ATTENTION

1. **Port différent** : angeline-nj.xyz sur port 3001, pay-check.xyz probablement sur 3000
2. **Firewall** : S'assurer que les ports 80 et 443 sont ouverts
3. **DNS** : Vérifier que angeline-nj.xyz pointe bien vers 77.42.34.90
4. **Backup** : Faire un backup de la config Nginx de pay-check.xyz avant toute modification
5. **Variables d'environnement** : Ne jamais commiter le fichier .env

---

## 🆘 TROUBLESHOOTING

### L'app ne démarre pas
```bash
pm2 logs angeline-nj --lines 50
# Vérifier les erreurs dans les logs
```

### Erreur 502 Bad Gateway
```bash
# Vérifier que l'app tourne
pm2 status

# Vérifier le port dans Nginx
sudo nano /etc/nginx/sites-available/angeline-nj.xyz
```

### Certificat SSL ne fonctionne pas
```bash
# Relancer Certbot
sudo certbot --nginx -d angeline-nj.xyz -d www.angeline-nj.xyz --force-renewal
```

---

## ✅ CHECKLIST FINALE

- [ ] Repository GitHub créé et code pushé
- [ ] Connexion SSH au serveur réussie
- [ ] Dossier /var/www/angeline-nj.xyz créé
- [ ] Repository cloné sur le serveur
- [ ] Dépendances installées (npm install)
- [ ] Fichier .env créé et configuré
- [ ] Build réussi (npm run build)
- [ ] PM2 configuré et app démarrée
- [ ] Configuration Nginx créée et activée
- [ ] Certificat SSL installé
- [ ] Site accessible via https://angeline-nj.xyz
- [ ] pay-check.xyz fonctionne toujours
- [ ] Script de déploiement créé
