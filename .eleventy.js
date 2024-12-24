const fs = require('fs');
const manifest = JSON.parse(fs.readFileSync('./dist/.vite/manifest.json', 'utf8'));

module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode('viteScript', function () {
    return `<script type="module" src="/${manifest['src/assets/js/main.js'].file}"></script>`;
  });

    // Pass through the assets folder
    eleventyConfig.addPassthroughCopy("src/assets/css");
    eleventyConfig.addPassthroughCopy("src/assets/images");
  
    // Return the configuration object
    return {
      templateFormats: ["md", "njk", "html", "liquid"],
      htmlTemplateEngine: "liquid",      
      dir: {
        input: "src",       // Source files
        output: "dist",    // Output directory
        includes: "_includes",    // Includes directory
      },
    };
  };
  