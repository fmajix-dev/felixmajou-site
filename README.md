# felixmajou.com

Site vitrine de Félix Majou, DAF à temps partagé. Une page, construite avec [Astro](https://astro.build) et [Tailwind CSS](https://tailwindcss.com), publiée sur Cloudflare Pages.

Pour créer de nouvelles pages ou sections dans le même style, voir **[DESIGN-SYSTEM.md](./DESIGN-SYSTEM.md)**.

## Commandes

Nécessite Node.js 22 ou plus récent.

| Commande | Effet |
| --- | --- |
| `npm install` | Installe les dépendances (à faire une fois) |
| `npm run dev` | Site local avec rechargement automatique : http://localhost:4321 |
| `npm run build` | Génère le site final dans `dist/` |
| `npm run preview` | Prévisualise le contenu de `dist/` |

## Où modifier quoi

| Je veux modifier… | Fichier |
| --- | --- |
| E-mail de réception, lien LinkedIn, menu, titre et description du site | `src/config/site.ts` |
| Titre et texte d'accroche, les 3 points sous le titre | `src/components/sections/Hero.astro` |
| Formulaire (champs, textes, message d'envoi) | `src/components/ConsultationForm.astro` |
| Les 6 situations « Quand faire appel à un DAF » | `src/components/sections/Challenges.astro` |
| Les offres (Ingénierie du financement, Pilotage, Croissance externe, Cadre) | `src/components/sections/Services.astro` |
| Les 4 principes « Ce que j'apporte » | `src/components/sections/Approach.astro` |
| Parcours, formation, langues, zones | `src/components/sections/About.astro` |
| Chiffres clés (9 M€, 6 M€, 270 M€…) | `src/components/sections/Achievements.astro` |
| Bandeau final « Besoin d'y voir clair… » | `src/components/sections/ClosingCta.astro` |
| Photos | `src/assets/images/` (remplacer le fichier en gardant le même nom) |
| Icône d'onglet | `public/favicon.svg` |

L'ordre des sections se règle dans `src/pages/index.astro`.

## Mettre le site en ligne

### 1. Envoyer le code sur GitHub

1. Sur https://github.com/new, connecté au compte `fmajix-dev`, créer un dépôt **vide** nommé `felixmajou-site` (sans README, sans .gitignore, sans licence).
2. Dans le dossier du projet :

   ```bash
   git remote add origin https://github.com/fmajix-dev/felixmajou-site.git
   git push -u origin main
   ```

   Le premier `push` demande de s'identifier : GitHub n'accepte plus le mot de passe du compte. Le plus simple est d'installer [GitHub Desktop](https://desktop.github.com) ou la commande `gh` (`gh auth login`).

Le dépôt contient déjà un premier commit sur la branche `main`.

### 2. Relier le dépôt à Cloudflare Pages

Dans le tableau de bord Cloudflare : **Workers & Pages → Create application → onglet Pages → Import an existing Git repository**, choisir `felixmajou-site`, puis **Begin setup** avec ces valeurs :

| Réglage | Valeur |
| --- | --- |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `dist` |

Puis **Save and Deploy**. Ensuite, chaque `git push` sur `main` republie le site automatiquement. La version de Node est fixée par le fichier `.node-version` ; si le build échoue pour cette raison, ajouter la variable d'environnement `NODE_VERSION` = `22`.

Le site est d'abord disponible sur une adresse en `*.pages.dev`.

### 3. Brancher le domaine

Dans le projet Pages : **Custom domains → Set up a custom domain**, saisir `felixmajou.com` et suivre les instructions (si le domaine est enregistré ailleurs que chez Cloudflare, il faut soit déléguer ses serveurs de noms à Cloudflare, soit ajouter l'enregistrement DNS demandé chez le registrar).

## Avant la mise en ligne

- [ ] **Le domaine `felixmajou.com` est acheté.** Sa disponibilité n'a pas été confirmée.
- [ ] **L'adresse `felix@felixmajou.com` existe et reçoit les e-mails.** Le formulaire ouvre le logiciel de messagerie du visiteur avec un e-mail pré-rempli vers cette adresse. Tant qu'elle n'existe pas, les messages sont perdus. Sinon, changer `email` dans `src/config/site.ts` (par exemple pour l'adresse Gmail).
- [ ] **Les droits d'utilisation des deux photos** (portrait, vue de Grenoble) sont réglés.
- [ ] `site` dans `astro.config.mjs` correspond bien à l'adresse définitive du site (utilisée pour l'URL canonique).
