import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist/', // Custom output directory
    manifest: true,           // Generate manifest.json
    emptyOutDir: false,       // Prevent overwriting the entire directory
    rollupOptions: {
      input: "./src/assets/js/main.js", // Entry point for your JS
      output: {
        entryFileNames: 'assets/js/[name].js',   // Use flat file structure for entry files
        assetFileNames: '[name].[ext]', // Flatten asset output structure
      },
    },
  },
});
