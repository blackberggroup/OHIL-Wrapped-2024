const fs = require('fs');
const manifest = JSON.parse(fs.readFileSync('./dist/.vite/manifest.json', 'utf8'));

module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode('viteScript', function () {
    return `<script type="module" src="/${manifest['src/assets/js/main.js'].file}"></script>`;
  });

    // Pass through the assets folder
    // eleventyConfig.addPassthroughCopy("src/assets/css");
    // eleventyConfig.addPassthroughCopy("dist/assets/css");
    // eleventyConfig.addPassthroughCopy("src/assets/images");
    
    // Watch the SCSS directory for changes
    eleventyConfig.addWatchTarget("src/assets/scss");

    // Watch the compiled CSS file for changes
    eleventyConfig.setBrowserSyncConfig({
      files: ["dist/assets/css/style.css"],
      callbacks: {
        ready: (err, bs) => {
          console.log("Watching for CSS changes...");
        }
      }
    });

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
  