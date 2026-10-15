// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // Adresse publique du site (utilisée pour l'URL canonique). À adapter si le domaine change.
  site: 'https://felixmajou.com',
  // On conserve les espaces du HTML source : avec la compression, Astro retire l'espace entre
  // un texte et une balise voisine (ex. « entreprise<span> » collé). Gain de poids négligeable.
  compressHTML: false,
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
