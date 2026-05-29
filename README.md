# vcard

Carte de visite digitale d'**Euloge Tabala** — [euloge-tabala.netlify.app](https://euloge-tabala.netlify.app)

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

## Déploiement (Netlify)

Site en ligne : **https://euloge-tabala.netlify.app**

1. Repo GitHub : [github.com/eulogetabala/vcard](https://github.com/eulogetabala/vcard)
2. Build : `npm run build` — publish géré par `@netlify/plugin-nextjs`
3. Modifier les infos dans `src/data/profile.ts`

## Structure

- `src/data/profile.ts` — coordonnées et liens
- `src/components/VCardScreen.tsx` — interface carte
- `src/app/qr/page.tsx` — QR pour impression
- `src/app/api/vcard/route.ts` — fichier .vcf
