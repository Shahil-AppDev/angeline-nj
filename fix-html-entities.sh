#!/bin/bash
cd /var/www/angeline-nj.xyz

echo "Correction des entités HTML..."
sed -i "s/\&lsquo;/'/g" data/products.json
sed -i "s/\&rsquo;/'/g" data/products.json
sed -i "s/\&amp;/\&/g" data/products.json

echo "Vérification..."
COUNT=$(grep -c "&lsquo;" data/products.json || echo "0")
echo "Entités restantes: $COUNT"

if [ "$COUNT" = "0" ]; then
    echo "✅ Toutes les entités HTML ont été corrigées!"
else
    echo "⚠️  Il reste encore $COUNT entités"
fi

echo ""
echo "Rebuild du site..."
rm -rf .next
npm run build

echo ""
echo "Redémarrage PM2..."
pm2 restart angeline-nj

echo ""
echo "✅ DÉPLOIEMENT TERMINÉ!"
echo "🌐 https://angeline-nj.xyz/boutique"
echo ""
pm2 status
