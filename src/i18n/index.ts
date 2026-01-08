export type Locale = 'en' | 'fr';

const translations: Record<Locale, Record<string, string>> = {
  en: {
    'projectUpdates.title': 'Project Updates',
    'projectUpdates.placeholder': 'Filter by name or status',
    'projectUpdates.all': 'All',
    'projectUpdates.hot': 'Hot',
    'projectUpdates.inProgress': 'In progress',
    'projectUpdates.completed': 'Completed',
    'projectUpdates.noMatch': 'No projects match your filter',
    'table.projectName': 'Project Name',
    'table.status': 'Status',
    'charts.tickets2024': 'Tickets 2024',
    'charts.tickets2025': 'Tickets 2025',
     'charts.tickets2026': 'Tickets 2025',
      'charts.InProgress': 'In Progress',
    'charts.Created': 'Created',
     'charts.Resolved': 'Resolved',
    'charts.trend': 'Median Trend',
  'charts.contentTitle': "GCintranet's Content",
  'charts.latest4': 'Latest 4 months',
  'charts.yearTitle': 'Year 2024 and 2025',
  'charts.webpages': 'Webpages',
  'charts.images': 'Images',
  'charts.testingFiles': 'Testing files',
  'charts.documents': 'Documents',
  'charts.misc': 'Misc',
    // App / UI
    'app.title': 'Web Hub',
    'app.subtitle': 'tools · updates · insights',
    'app.welcomeTitle': 'Welcome to Web Services',
    'app.welcomeBody': 'Your central gateway to web tools and dashboards. Quickly access utilities, view project updates and monitor content metrics — all in one place.',
    'app.quickTools': 'Quick Tools',
    'nav.contact': 'Contact',
    'nav.admin': 'Admin',
    'nav.profile': 'Profile',
    'nav.settings': 'Settings',
    'nav.logout': 'Logout',
    'tool.converter': 'Converter',
    'tool.bilat': 'Bilat',
    'tool.excel': 'Excel',
    'tool.converter2': 'Converter',
    // Stats
    'stats.totalTools': 'Total Files',
    'stats.updated': 'Updated in 2026',
    'stats.activeProjects': 'Departments served',
    'stats.hot': 'Updated in 2026',
    'stats.visitors': "Visitors (30d)", 
    'stats.visitors-month': "last month",
  // Project titles
  'projects.1': 'Visual Aid Redesign',
  'projects.2': 'Benefit letter',
  'projects.3': 'Procedure migration',
  'projects.4': 'YEPO Calendar refactored',
  'projects.5': 'CWA Sweep',
  'projects.6': 'CWA Sweep',
  'projects.7': 'CWA Sweep',
  'projects.8': 'CWA Sweep',
  'projects.9': 'CWA Sweep',
  'projects.10': 'CWA Sweep',
  },
  fr: {
    'projectUpdates.title': 'Mises à jour des projets',
    'projectUpdates.placeholder': 'Filtrer par nom ou statut',
    'projectUpdates.all': 'Tous',
    'projectUpdates.hot': 'Urgent',
    'projectUpdates.inProgress': 'En cours',
    'projectUpdates.completed': 'Terminé',
    'projectUpdates.noMatch': "Aucun projet ne correspond à votre filtre",
    'table.projectName': 'Nom du projet',
    'table.status': 'Statut',
    'charts.tickets2024': 'Billets 2024',
    'charts.tickets2025': 'Billets 2025',
        'charts.tickets2026': 'Billets 2026',
              'charts.InProgress': 'En cours',
    'charts.Created': 'Créés',
     'charts.Resolved': 'Résolus',
    'charts.trend': 'Tendance médiane',
  'charts.contentTitle': "Contenu GCintranet",
  'charts.latest4': '4 derniers mois',
  'charts.yearTitle': 'Année 2024 et 2025',
  'charts.webpages': 'Pages Web',
  'charts.images': 'Images',
  'charts.testingFiles': 'Fichiers de test',
  'charts.documents': 'Documents',
  'charts.misc': 'Divers',
    // App / UI
    'app.title': 'Portail Web',
    'app.subtitle': 'outils · mises à jour · aperçus',
    'app.welcomeTitle': 'Bienvenue aux services web',
    'app.welcomeBody': "Votre passerelle centrale vers les outils et tableaux de bord web. Accédez rapidement aux utilitaires, consultez les mises à jour des projets et suivez les métriques de contenu — le tout en un seul endroit.",
    'app.quickTools': 'Outils rapides',
    'nav.contact': 'Contact',
    'nav.admin': 'Admin',
    'nav.profile': 'Profil',
    'nav.settings': 'Paramètres',
    'nav.logout': 'Se déconnecter',
    'tool.converter': 'Convertisseur',
    'tool.bilat': 'Bilat',
    'tool.excel': 'Excel',
    'tool.converter2': 'Convertisseur',
    // Stats
    'stats.totalTools': "Nombre total de fichiers",
    'stats.updated': 'Mis à jour en 2026',
    'stats.activeProjects': 'Départements servit',
    'stats.hot': 'Mis à jour en 2026',
    'stats.visitors': "Visiteurs (30j)",
    'stats.visitors-month': "mois passé",
  // Project titles
  'projects.1': 'Refonte de l’aide visuelle',
  'projects.2': 'Lettre d’avantages',
  'projects.3': 'Migration des procédures',
  'projects.4': 'Calendrier YEPO refactorisé',
  'projects.5': 'Balayage CWA',
  'projects.6': 'Balayage CWA',
  'projects.7': 'Balayage CWA',
  'projects.8': 'Balayage CWA',
  'projects.9': 'Balayage CWA',
  'projects.10': 'Balayage CWA',
  },
};

export function t(key: string, locale: Locale = 'fr') {
  const bucket = translations[locale] || translations.en;
  return bucket[key] ?? key;
}

export function months(locale: Locale = 'fr') {
  if (locale === 'fr') {
    return ['Janv', 'Fév', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'];
  }

  return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
}

export default { t, months };
