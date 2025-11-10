// Importer la bibliothèque Luxon
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  // Commande pour "passer" le dossier css au site final
  eleventyConfig.addPassthroughCopy("css");

  // NOTRE NOUVEAU FILTRE DE DATE
  // On l'appelle "dateFr"
  eleventyConfig.addFilter("dateFr", (dateObj) => {
    // "dateObj" est la date qui vient de ton article
    // On la met en français et on la formate
    return DateTime.fromJSDate(dateObj, { zone: 'utc' })
                   .setLocale('fr') 
                   .toFormat("dd MMMM yyyy");
  });

  // Configuration des dossiers
  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
  };
};


