#!/usr/bin/env python3
import json

with open('data/products.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

count = 0
for product in products:
    old_title = product['title']
    old_desc = product['description']
    
    product['title'] = product['title'].replace('&lsquo;', "'").replace('&rsquo;', "'").replace('&amp;', '&')
    product['description'] = product['description'].replace('&lsquo;', "'").replace('&rsquo;', "'").replace('&amp;', '&')
    
    if old_title != product['title'] or old_desc != product['description']:
        count += 1

with open('data/products.json', 'w', encoding='utf-8') as f:
    json.dump(products, f, indent=2, ensure_ascii=False)

print(f'Correction terminee: {count} produits modifies')
