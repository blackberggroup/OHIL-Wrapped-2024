const fs = require('fs');
const manifest = JSON.parse(fs.readFileSync('./dist/.vite/manifest.json', 'utf8'));

module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode('viteScript', function () {
    return `<script type="module" src="/${manifest['src/assets/js/main.js'].file}"></script>`;
  });
    
    // Watch the SCSS directory for changes
    eleventyConfig.addWatchTarget("src/assets/scss");
    
    // Passthrough copy for images
    eleventyConfig.addPassthroughCopy("src/assets/images");

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
        input: "src",       
        output: "dist",    
        includes: "_includes",
      },
    };
  };
  