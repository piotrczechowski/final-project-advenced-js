import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import { globSync } from "glob"; // Correct named import

// Use globSync to find all HTML files
const htmlFiles = globSync("./src/*.html");

const input = htmlFiles.reduce((entries, file) => {
  const name = file.replace("./src/", "").replace(".html", "");
  entries[name] = file;
  return entries;
}, {});

export default defineConfig({
  root: "src",
  build: {
    rollupOptions: {
      input, // Use the generated input object
    },
    outDir: "../dist", // Ensure output is placed outside 'src'
  },
  plugins: [
    handlebars({
      partialDirectory: "./src/partials", // Path to partials
    }),
  ],
  base: "/final-project-advenced-js/",
});
