// Informations globales du site : à modifier ici, elles se répercutent partout.

export interface NavItem {
  label: string;
  href: string;
}

// Les liens commencent par "/#" pour fonctionner aussi depuis les futures pages.
const sections = {
  enjeux: { label: 'Vos enjeux', href: '/#enjeux' },
  services: { label: 'Mon intervention', href: '/#services' },
  approach: { label: 'Ce que j’apporte', href: '/#approach' },
  about: { label: 'Mon parcours', href: '/#about' },
  realisations: { label: 'Réalisations', href: '/#realisations' },
  contact: { label: 'Contact', href: '/#consultation' },
} satisfies Record<string, NavItem>;

export const siteConfig = {
  name: 'Félix Majou',
  title: 'Félix Majou | DAF à temps partagé',
  description:
    'Félix Majou, DAF à temps partagé pour startups deeptech, PME industrielles et entreprises cleantech : levées de fonds, financements non-dilutifs, pilotage de trésorerie, M&A.',
  tagline: 'DAF à temps partagé · Startups & PME deeptech, industrie, cleantech',
  // Adresse de réception du formulaire (mailto). Elle doit exister avant la mise en ligne.
  email: 'felix@felixmajou.com',
  linkedin: 'https://www.linkedin.com/in/felixm1',
  headerNav: [
    sections.enjeux,
    sections.services,
    sections.approach,
    sections.about,
    sections.realisations,
    sections.contact,
  ] as NavItem[],
  footerNav: [
    sections.enjeux,
    sections.services,
    sections.approach,
    sections.about,
    sections.realisations,
  ] as NavItem[],
};
