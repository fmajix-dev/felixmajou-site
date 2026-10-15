# Design system : felixmajou.com

Ce document décrit les règles visuelles du site pour que toute nouvelle page ou section reste cohérente. Tout est construit avec les classes utilitaires de Tailwind CSS 4 ; les valeurs ci-dessous sont celles réellement utilisées dans le code.

Principe général : sobre, aéré, typographie légère. Beaucoup de blanc, des gris-bleu, une seule couleur d'accent (le bleu), des bords fins plutôt que des ombres marquées.

## Couleurs

La palette est figée dans `src/styles/global.css` (bloc `@theme`). Pour utiliser une teinte qui n'y figure pas, l'ajouter à ce bloc.

### Neutres (slate)

| Teinte | Hex | Usage |
| --- | --- | --- |
| `slate-50` | `#f8fafc` | Fond des sections alternées, fond des champs de formulaire |
| `slate-100` | `#f1f5f9` | Fond de la page (autour de la carte blanche), traits de séparation |
| `slate-200` | `#e2e8f0` | Bordures des cartes et des champs |
| `slate-400` | `#94a3b8` | Texte atténué : seconde partie du titre, astérisques, mentions légales, placeholders |
| `slate-500` | `#64748b` | Paragraphes courants, navigation |
| `slate-600` | `#475569` | Texte secondaire plus marqué (points du hero, citations des situations) |
| `slate-700` | `#334155` | Libellés de formulaire |
| `slate-800` | `#1e293b` | Libellés dans les cartes (« Ce que je fais ») |
| `slate-900` | `#0f172a` | Titres, texte principal, bandeau sombre final |

### Accent (bleu)

| Teinte | Hex | Usage |
| --- | --- | --- |
| `blue-500` | `#3b82f6` | Boutons principaux, icônes de validation |
| `blue-600` | `#2563eb` | Surtitres, liens, chiffres clés, survol des liens du pied de page |
| `blue-400` | `#60a5fa` | Survol du bouton sur fond sombre |
| `blue-50` / `blue-100` / `blue-200` | `#eff6ff` / `#dbeafe` / `#bfdbfe` | Pastilles d'icône, bandeau de statut, bordure au survol des cartes |
| `blue-900` | `#1e3a8a` | Texte de sélection |

Teintes d'appoint, réservées aux pastilles d'icône des offres : `indigo` (50, 100, 600) et `emerald` (50, 100, 600). Ne pas les utiliser ailleurs.

Règle : un seul bouton principal par zone, toujours `blue-500` sur fond clair.

## Typographie

Police : **Inter**, intégrée au site (pas de chargement depuis Google). Graisses disponibles : 300 (light), 400, 500 (medium), 600. Pour en ajouter une, importer `@fontsource/inter/latin-<poids>.css` dans `src/layouts/BaseLayout.astro`.

| Élément | Classes |
| --- | --- |
| Titre de page (h1) | `text-[1.75rem] sm:text-[2.1rem] lg:text-[2.6rem] font-medium leading-[1.18] tracking-tight` ; la seconde moitié de la phrase en `text-slate-400` |
| Titre de section (h2) | `text-2xl sm:text-3xl font-medium tracking-tight` |
| Titre de carte (h3) | `text-lg font-medium tracking-tight` (offres), `text-base font-medium` (principes), `text-sm font-medium` (chiffres, libellés) |
| Chapeau (sous le h1) | `text-base sm:text-lg font-light leading-relaxed text-slate-500` |
| Paragraphe courant | `text-sm font-light leading-relaxed text-slate-500` |
| Surtitre | `text-xs font-medium uppercase tracking-widest text-blue-600` |
| Chiffre clé | `text-3xl font-medium tracking-tight text-blue-600` |
| Petits textes (pied de page, libellés) | `text-xs` |

Les titres sont en graisse `medium` ; le texte courant en `light`. Ne pas mettre de gras (`font-bold`).

Typographie française : utiliser une espace insécable (`&nbsp;` ou ` `) avant `:`, `?`, `!`, `»` et après `«`, ainsi qu'entre un montant et son unité (`9 M€`).

## Espacements et mise en page

| Élément | Classes |
| --- | --- |
| Marge autour de la page | `p-3 sm:p-6 lg:p-8` (sur `body`) |
| Carte blanche contenant toute la page | `mx-auto max-w-7xl rounded-2xl bg-white shadow-md ring-1 ring-slate-900/5` |
| Section courante | `px-6 py-14 lg:px-16 lg:py-16` |
| Section d'ouverture (hero) | `px-6 py-12 lg:px-16 lg:py-20` |
| Séparateur de section | `border-b border-slate-100` (ou `border-y` pour une section sur fond `slate-50`) |
| Sections alternées | blanc, puis `bg-slate-50`, puis blanc… |
| Ancres de navigation | `scroll-mt-6` sur chaque section ciblée |
| Padding interne des cartes | `p-6` (petites), `p-6 sm:p-8` (grandes) |
| Écarts de grille | `gap-4` (cartes serrées), `gap-5`, `gap-8` (colonnes de texte), `gap-12 lg:gap-16` (grandes colonnes) |

Points de rupture : `sm` 640 px, `md` 768 px, `lg` 1024 px. Le site est pensé mobile d'abord : toute grille démarre en une colonne et s'élargit avec `md:` ou `lg:`. Le menu horizontal n'apparaît qu'à partir de `md`.

## Formes, bordures, ombres

| Usage | Classes |
| --- | --- |
| Carte de page | `rounded-2xl` |
| Cartes de contenu, images, bandeau sombre | `rounded-xl` |
| Boutons, champs, pastilles d'icône | `rounded-lg` |
| Pastille numérotée | `rounded-full` |
| Bordure de carte | `border border-slate-200` (ou `border-slate-200/70`) |
| Ombres | `shadow-xs` (petites cartes, boutons), `shadow-md` (carte de page), `shadow-xl shadow-slate-200/50` (carte du formulaire), `shadow-lg shadow-blue-500/10` (bouton sur fond sombre) |

Au survol, une carte d'offre change seulement sa bordure : `transition-colors hover:border-blue-200`.

## Composants

Les composants sont dans `src/components/`. Les textes sont passés en paramètres (« props ») ou définis dans la liste en tête de chaque section.

| Composant | Rôle | Paramètres |
| --- | --- | --- |
| `Header.astro` | Barre de navigation et menu mobile | aucun (les liens viennent de `src/config/site.ts`) |
| `Footer.astro` | Pied de page | aucun |
| `SectionHeading.astro` | Surtitre + titre + description | `eyebrow`, `title`, `description?`, `align` (`left` ou `center`), `class?` |
| `ServiceCard.astro` | Carte d'offre avec pastille d'icône | `icon`, `title`, `intro`, `tone` (`blue`, `indigo`, `emerald`, `slate`), `surface` (`muted` ou `plain`), `details?` ou `bullets?` |
| `StatCard.astro` | Carte de chiffre clé | `value`, `label`, `text`, `wide?` |
| `ConsultationForm.astro` | Formulaire de prise de contact (ouvre un e-mail pré-rempli) | aucun |
| `sections/*.astro` | Les sections de la page d'accueil | aucun |

### Bouton principal

```html
<a href="#consultation" class="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-6 py-3 text-sm text-white shadow-xs transition-colors hover:bg-blue-600">
  Prendre rendez-vous
</a>
```
Sur fond sombre (`bg-slate-900`), remplacer le survol par `hover:bg-blue-400`.

### Lien d'action

```html
<a href="#consultation" class="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700">
  Échangeons sur vos enjeux
</a>
```
Il est suivi d'une flèche : `<Icon name="solar:arrow-right-linear" size={16} />`.

### Champ de formulaire

```
block w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm outline-none transition
placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10
```
Libellé associé : `block text-xs text-slate-700`.

### Carte de contenu

`rounded-xl border border-slate-200 bg-white p-6` (ou `bg-slate-50/60` pour une carte légèrement teintée sur fond blanc).

### Bandeau sombre d'appel à l'action

Voir `src/components/sections/ClosingCta.astro` : fond `bg-slate-900`, motif de points `#94a3b8` à 15 % d'opacité, titre blanc, texte `text-slate-400`.

## Icônes

Les icônes sont intégrées au site au moment du build (aucun chargement externe). Utilisation :

```astro
---
import { Icon } from 'astro-icon/components';
---
<Icon name="solar:check-circle-linear" size={20} class="text-blue-500" aria-hidden="true" />
```

- Interface (flèches, validation, menu, courrier) : jeu **Solar**, variante `-linear`, par exemple `solar:arrow-right-linear`.
- Pastilles des offres : jeu **Lucide**, par exemple `lucide:landmark`.
- Tailles : 16 à 17 px dans le texte et les boutons, 20 px pour les points du hero, 22 px dans les pastilles et le menu.
- Les icônes prennent la couleur du texte (`currentColor`) : les colorer avec `text-…`.
- Parcourir les icônes : https://icon-sets.iconify.design/solar/ et https://icon-sets.iconify.design/lucide/

## Images

Placer les images dans `src/assets/images/` et les afficher avec le composant `Image` d'Astro (redimensionnement et compression automatiques, chargement différé) :

```astro
---
import { Image } from 'astro:assets';
import photo from '../assets/images/ma-photo.webp';
---
<Image src={photo} alt="Description utile de l'image" class="w-full rounded-xl object-cover" />
```

- Toujours renseigner `alt`.
- Cadrage : `object-cover` avec `object-[50%_45%]` (centre horizontal, 45 % depuis le haut) pour choisir la zone visible.
- Bandeau large : `h-56 sm:h-72 lg:h-96`. Portrait : `aspect-square`.
- Format conseillé : WebP, 1 800 px de large au maximum pour un bandeau, 900 px pour un portrait.

## Créer une nouvelle page

1. Créer `src/pages/ma-page.astro` (l'adresse sera `/ma-page`).
2. Utiliser le layout, qui fournit l'en-tête, le pied de page, les polices et le style de base :

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import SectionHeading from '../components/SectionHeading.astro';
import ClosingCta from '../components/sections/ClosingCta.astro';
---

<BaseLayout title="Titre de la page | Félix Majou" description="Résumé en une phrase, affiché par Google.">
  <section class="px-6 py-14 lg:px-16 lg:py-16">
    <SectionHeading eyebrow="Surtitre" title="Titre de la section." description="Une phrase d'introduction." />
    <!-- contenu -->
  </section>

  <section class="border-y border-slate-100 bg-slate-50 px-6 py-14 lg:px-16 lg:py-16">
    <!-- section sur fond gris clair -->
  </section>

  <ClosingCta />
</BaseLayout>
```

3. Pour l'ajouter au menu, ajouter une entrée dans `src/config/site.ts`. Les liens internes s'écrivent `/ma-page` et les ancres de la page d'accueil `/#services`.

## Pièges connus

- **Ne pas réactiver `compressHTML`** dans `astro.config.mjs` : Astro supprimerait alors l'espace entre un texte et une balise voisine (« entreprise**sans** »).
- **Tailwind 4 renomme les petites ombres** : `shadow-sm` de Tailwind 3 s'appelle ici `shadow-xs`. Les anciens extraits de code Tailwind 3 trouvés en ligne peuvent donc rendre un peu différemment.
- **Les classes doivent être écrites en entier** dans le code (`bg-blue-500`, jamais `bg-${couleur}-500`), sinon Tailwind ne les génère pas.
- **Vérifier toute nouvelle page sur mobile** (390 px de large) avant publication.
