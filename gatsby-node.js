/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  // Sample data for actualités (in a real application, this would come from a data source)
  const actualites = [
    {
      id: 1,
      title: "Inscription ouverte pour l'année académique 2023-2024",
      excerpt: "Les inscriptions pour l'année académique 2023-2024 sont maintenant ouvertes. Veuillez consulter le calendrier des inscriptions.",
      date: "15 Juin 2023",
      category: "Administratif",
      slug: "inscription-2023-2024",
      image: "https://fs.uit.ac.ma/wp-content/uploads/2025/02/POSTER-of-ICBDAIA25-860x1216.png",
    },
    {
      id: 2,
      title: "Conférence internationale sur les énergies renouvelables",
      excerpt: "La faculté organise une conférence internationale sur les énergies renouvelables du 10 au 12 juillet 2023.",
      date: "5 Juin 2023",
      category: "Recherche",
      slug: "conference-energies-renouvelables",
      image: "https://fs.uit.ac.ma/wp-content/uploads/2025/02/17-Feb-2025-Appel-a%CC%80-Candidature-PostDoc-PyroBioFuel-_1_-860x1216.jpg",
    },
    {
      id: 3,
      title: "Résultats des examens du premier semestre",
      excerpt: "Les résultats des examens du premier semestre sont maintenant disponibles. Consultez votre espace étudiant.",
      date: "1 Juin 2023",
      category: "Académique",
      slug: "resultats-examens-s1",
      image: "https://via.placeholder.com/600x400?text=Résultats",
    },
  ]

  // Create pages for actualités
  actualites.forEach(actualite => {
    createPage({
      path: `/actualites/${actualite.slug}`,
      component: require.resolve("./src/templates/actualite-template.js"),
      context: {
        slug: actualite.slug,
        actualite,
      },
    })
  })

  // Sample data for événements
  const evenements = [
    {
      id: 1,
      title: "Journée portes ouvertes",
      excerpt: "Venez découvrir notre faculté et nos formations lors de notre journée portes ouvertes.",
      day: "20",
      month: "Juin",
      time: "09:00 - 17:00",
      location: "Campus universitaire",
      slug: "journee-portes-ouvertes",
      image: "https://via.placeholder.com/600x400?text=Portes+Ouvertes",
    },
    {
      id: 2,
      title: "Séminaire sur l'intelligence artificielle",
      excerpt: "Un séminaire sur les avancées récentes en intelligence artificielle et leurs applications.",
      day: "25",
      month: "Juin",
      time: "14:00 - 16:00",
      location: "Amphithéâtre A",
      slug: "seminaire-ia",
      image: "https://via.placeholder.com/600x400?text=Séminaire+IA",
    },
  ]

  // Create pages for événements
  evenements.forEach(evenement => {
    createPage({
      path: `/evenements/${evenement.slug}`,
      component: require.resolve("./src/templates/evenement-template.js"),
      context: {
        slug: evenement.slug,
        evenement,
      },
    })
  })

  // Sample data for soutenances
  const soutenances = [
    {
      id: 1,
      title: "Étude des propriétés physico-chimiques des matériaux composites",
      excerpt: "Soutenance de thèse de doctorat en sciences des matériaux.",
      date: "22 Juin 2023",
      time: "10:00",
      location: "Salle des soutenances",
      type: "Doctorat",
      candidate: "Mohammed Alami",
      supervisors: "Pr. Ahmed Bensouda, Pr. Fatima Zohra El Mansouri",
      slug: "these-materiaux-composites",
    },
    {
      id: 2,
      title: "Développement d'algorithmes d'optimisation pour les réseaux de capteurs sans fil",
      excerpt: "Soutenance de thèse de doctorat en informatique.",
      date: "28 Juin 2023",
      time: "14:00",
      location: "Amphithéâtre B",
      type: "Doctorat",
      candidate: "Karim Benjelloun",
      supervisors: "Pr. Hassan Ouahbi",
      slug: "these-algorithmes-optimisation",
    },
  ]

  // Create pages for soutenances
  soutenances.forEach(soutenance => {
    createPage({
      path: `/soutenances/${soutenance.slug}`,
      component: require.resolve("./src/templates/soutenance-template.js"),
      context: {
        slug: soutenance.slug,
        soutenance,
      },
    })
  })
}
