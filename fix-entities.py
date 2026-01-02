import json
import html

with open('data/products.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

for product in products:
    product['title'] = html.unescape(product['title'])
    product['description'] = html.unescape(product['description'])

with open('data/products.json', 'w', encoding='utf-8') as f:
    json.dump(products, f, indent=2, ensure_ascii=False)

print("✅ Entités HTML corrigées!")
