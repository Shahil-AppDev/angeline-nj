# 🚀 DÉPLOIEMENT FINAL - ANGELINE-NJ.XYZ

## ✅ ÉTAT ACTUEL

### Code GitHub
- ✅ Repository: https://github.com/Shahil-AppDev/angeline-nj.git
- ✅ Code pushé avec toutes les corrections
- ✅ 30 articles de blog intégrés
- ✅ Pages SEO optimisées (Home, Reiki, Formations, Boutique)
- ✅ Correction du bug Server/Client Component

### Serveur Hetzner
- ✅ IP: 77.42.34.90
- ✅ Dossier créé: `/var/www/angeline-nj.xyz`
- ✅ Repository cloné
- ✅ PM2 installé
- ✅ Nginx installé et actif
- ⚠️ **Build échoué** - Fichier `page.tsx` contient encore l'ancien code

---

## 🔧 ÉTAPES POUR FINALISER LE DÉPLOIEMENT

### ÉTAPE 1 : Connexion SSH
```bash
ssh root@77.42.34.90
```

### ÉTAPE 2 : Nettoyer et mettre à jour le code
```bash
cd /var/www/angeline-nj.xyz

# Supprimer tous les fichiers locaux et récupérer la dernière version
git fetch --all
git reset --hard origin/main
git clean -fd

# Vérifier que le fichier est correct
cat app/prestations/[slug]/page.tsx
```

**Le fichier doit contenir EXACTEMENT ceci** :
```typescript
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { getPrestationBySlug } from '@/lib/prestations';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PrestationClientContent from './PrestationClientContent';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const prestation = getPrestationBySlug(params.slug);
  if (!prestation) return {};

  return {
    title: `${prestation.title} | Consultation Angeline NJ`,
    description: prestation.subtitle || prestation.shortDescription,
  };
}

export default function PrestationDetailPage({ params }: { params: { slug: string } }) {
  const prestation = getPrestationBySlug(params.slug);

  if (!prestation) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <PrestationClientContent prestation={prestation} />
      <Footer />
    </>
  );
}
```

### ÉTAPE 3 : Builder le projet
```bash
npm run build
```

**Si le build réussit**, vous verrez :
```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages
✓ Finalizing page optimization
```

### ÉTAPE 4 : Démarrer l'application avec PM2
```bash
# Si PM2 n'a pas encore été configuré
pm2 start ecosystem.config.js

# Si PM2 est déjà configuré
pm2 restart angeline-nj

# Sauvegarder la configuration
pm2 save

# Vérifier le statut
pm2 status
```

### ÉTAPE 5 : Vérifier les logs
```bash
pm2 logs angeline-nj --lines 50
```

Vous devriez voir :
```
✓ Ready in XXXms
```

### ÉTAPE 6 : Tester l'application
```bash
curl http://localhost:4000
```

Vous devriez recevoir du HTML.

### ÉTAPE 7 : Configurer le certificat SSL
```bash
certbot --nginx -d angeline-nj.xyz -d www.angeline-nj.xyz
```

Suivez les instructions de Certbot.

---

## 🧪 TESTS À EFFECTUER

### Test 1 : Application locale
```bash
curl http://localhost:4000
```
✅ Doit retourner du HTML

### Test 2 : Nginx
```bash
curl http://77.42.34.90
```
✅ Doit retourner du HTML (si DNS configuré)

### Test 3 : Domaine (après DNS)
```bash
curl http://angeline-nj.xyz
```
✅ Doit retourner du HTML

### Test 4 : SSL (après Certbot)
```bash
curl https://angeline-nj.xyz
```
✅ Doit retourner du HTML avec certificat valide

---

## 📊 COMMANDES UTILES

### PM2
```bash
pm2 status                    # Statut
pm2 logs angeline-nj          # Logs en temps réel
pm2 restart angeline-nj       # Redémarrer
pm2 stop angeline-nj          # Arrêter
pm2 monit                     # Monitoring
```

### Nginx
```bash
sudo nginx -t                 # Tester la config
sudo systemctl reload nginx   # Recharger
sudo systemctl status nginx   # Statut
```

### Git
```bash
git pull origin main          # Mettre à jour
git status                    # Voir l'état
git log --oneline -5          # Derniers commits
```

---

## 🔄 MISES À JOUR FUTURES

### Script de mise à jour rapide
Créer un fichier `/var/www/angeline-nj.xyz/update.sh` :
```bash
#!/bin/bash
cd /var/www/angeline-nj.xyz
git pull origin main
npm install
npm run build
pm2 restart angeline-nj
echo "✅ Mise à jour terminée"
pm2 status
```

Rendre exécutable :
```bash
chmod +x update.sh
```

Pour mettre à jour :
```bash
./update.sh
```

---

## ⚠️ TROUBLESHOOTING

### Problème : Build échoue
**Solution** :
```bash
cd /var/www/angeline-nj.xyz
git fetch --all
git reset --hard origin/main
git clean -fd
npm install
npm run build
```

### Problème : PM2 ne démarre pas
**Solution** :
```bash
pm2 delete angeline-nj
pm2 start ecosystem.config.js
pm2 save
```

### Problème : Nginx erreur 502
**Solution** :
```bash
# Vérifier que l'app tourne
pm2 status

# Vérifier le port
netstat -tulpn | grep 4000

# Redémarrer Nginx
sudo systemctl restart nginx
```

### Problème : Port 4000 déjà utilisé
**Solution** :
```bash
# Trouver le processus
lsof -i :4000

# Tuer le processus (remplacer PID)
kill -9 PID
```

---

## 📋 CHECKLIST FINALE

- [ ] Code mis à jour sur le serveur (`git reset --hard origin/main`)
- [ ] Fichier `page.tsx` correct (32 lignes, pas d'erreurs)
- [ ] Build réussi (`npm run build`)
- [ ] PM2 démarré (`pm2 start ecosystem.config.js`)
- [ ] Application accessible sur `http://localhost:4000`
- [ ] Nginx configuré et rechargé
- [ ] DNS configuré (angeline-nj.xyz → 77.42.34.90)
- [ ] Certificat SSL installé (`certbot --nginx`)
- [ ] Site accessible sur `https://angeline-nj.xyz`
- [ ] pay-check.xyz fonctionne toujours
- [ ] Script de mise à jour créé

---

## 🎯 RÉSUMÉ

**Ce qui a été fait** :
- ✅ Code complet pushé sur GitHub
- ✅ Serveur configuré (Node.js, PM2, Nginx)
- ✅ Repository cloné sur le serveur
- ✅ Configuration PM2 et Nginx créée

**Ce qui reste à faire** :
1. Nettoyer le code sur le serveur (`git reset --hard origin/main`)
2. Builder le projet (`npm run build`)
3. Démarrer PM2 (`pm2 start ecosystem.config.js`)
4. Configurer le DNS
5. Installer le certificat SSL

**Temps estimé** : 10-15 minutes

---

## 📞 SUPPORT

En cas de problème, vérifier :
1. Les logs PM2 : `pm2 logs angeline-nj`
2. Les logs Nginx : `sudo tail -f /var/log/nginx/error.log`
3. Le statut du build : `npm run build`

**Commande de diagnostic complète** :
```bash
echo "=== GIT ===" && git status && \
echo "=== PM2 ===" && pm2 status && \
echo "=== NGINX ===" && sudo systemctl status nginx --no-pager && \
echo "=== PORT 4000 ===" && netstat -tulpn | grep 4000
```
