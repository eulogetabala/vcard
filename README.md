# vcard

Carte de visite digitale d'**Euloge Tabala** — [eulogetabala.cg](https://eulogetabala.cg)

## Fonctionnalités

- Page contact designée (photo, coordonnées, LinkedIn, WhatsApp)
- Enregistrement du contact (.vcf) en un clic
- QR imprimable sur `/qr` → ouvre la carte web au scan

## Développement

```bash
npm install
npm run dev
```

- Carte : [http://localhost:3000](http://localhost:3000)
- QR à imprimer : [http://localhost:3000/qr](http://localhost:3000/qr)

## Déploiement (Vercel)

1. Importer ce repo sur [vercel.com](https://vercel.com)
2. Ajouter le domaine `eulogetabala.cg`
3. Modifier les infos dans `src/data/profile.ts`

## Structure

- `src/data/profile.ts` — coordonnées et liens
- `src/components/VCardScreen.tsx` — interface carte
- `src/app/qr/page.tsx` — QR pour impression
- `src/app/api/vcard/route.ts` — fichier .vcf
