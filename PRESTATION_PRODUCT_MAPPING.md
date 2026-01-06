# Mapping Prestations → Produits WooCommerce

## Analyse de la logique de commande

### Prestations existantes et leurs produits correspondants

| Prestation (slug) | Produit WooCommerce | URL de commande |
|------------------|---------------------|-----------------|
| `reiki-a-distance` | `reiki-a-distance` (wp-1453) | https://angeline-nj.com/produit/reiki-a-distance/ |
| `tirage-visio` | Contact direct | https://angeline-nj.xyz/contact |
| `formations` | Plusieurs produits formations | https://angeline-nj.xyz/formations |
| `tirage-video` | Catégorie "Mes prestations" | https://angeline-nj.xyz/boutique/mes-prestations |
| `rituel-pdf` | Catégorie "Rituels" (PDF) | https://angeline-nj.xyz/boutique/rituels |
| `rituel-video` | Catégorie "Rituels" (Vidéo) | https://angeline-nj.xyz/boutique/rituels |

### Produits "Mes prestations" disponibles

1. **Tirage en urgence** (wp-1469) - 80€
   - `slug`: `tirage-en-urgence`
   - `source_url`: https://angeline-nj.com/produit/tirage-en-urgence/

2. **Tirage positif** (wp-1467) - 30€
   - `slug`: `tirage-positif`
   - `source_url`: https://angeline-nj.com/produit/tirage-positif/

3. **Tirage sentimental** (wp-1465) - 30€
   - `slug`: `tirage-sentimental`
   - `source_url`: https://angeline-nj.com/produit/tirage-sentimental/

4. **Question simple** (wp-1463) - 10€
   - `slug`: `question-simple`
   - `source_url`: https://angeline-nj.com/produit/question-simple/

5. **Question précise sur un domaine** (wp-1461) - 25€
   - `slug`: `question-precise-domaine`
   - `source_url`: https://angeline-nj.com/produit/question-precise-domaine/

6. **Question sur une semaine** (wp-1459) - 15€
   - `slug`: `question-sur-une-semaine`
   - `source_url`: https://angeline-nj.com/produit/question-sur-une-semaine/

7. **Reiki à distance** (wp-1453) - 40€
   - `slug`: `reiki-a-distance`
   - `source_url`: https://angeline-nj.com/produit/reiki-a-distance/

### Rituels disponibles

#### Rituels PDF (3,90€)
- `rituel-amour-pdf`
- `rituel-protection-pdf`
- `rituel-abondance-chance-pdf`
- `rituel-couper-le-lien-pdf`
- `rituel-manifestation-projet-pdf`

#### Rituels Vidéo (19,90€)
- `rituel-amour-video`
- `rituel-protection-video`
- `rituel-abondance-chance-video`
- `rituel-couper-le-lien-video`
- `rituel-manifestation-projet-video`

## Logique de redirection

### Depuis la page Prestations (bouton "Découvrir")
- Redirige vers `/prestations/[slug]`

### Depuis la page détail Prestation (bouton "Commander")
- **Reiki à distance** → https://angeline-nj.com/produit/reiki-a-distance/
- **Tirage visio** → https://angeline-nj.xyz/contact
- **Formations** → https://angeline-nj.xyz/formations
- **Tirage vidéo** → https://angeline-nj.xyz/boutique/mes-prestations
- **Rituel PDF** → https://angeline-nj.xyz/boutique/rituels
- **Rituel Vidéo** → https://angeline-nj.xyz/boutique/rituels

## Action requise

Actuellement, les prestations utilisent `oldSiteUrl` qui pointe vers l'ancien site (angeline-nj.xyz).

**Options:**
1. Garder les liens vers l'ancien site (solution actuelle)
2. Créer des pages produits locales pour chaque prestation
3. Rediriger vers les produits WooCommerce du nouveau site (angeline-nj.com)

**Recommandation:** Utiliser les URLs du nouveau site (angeline-nj.com) pour les produits existants.
