import { defineConfig } from "astro/config";

const repository = process.env.GITHUB_REPOSITORY;
const [owner, repositoryName] = repository?.split("/") ?? [];
const site = owner ? `https://${owner}.github.io` : "https://example.github.io";
const isUserOrOrganizationSite = repositoryName === `${owner}.github.io`;
const base = repositoryName && !isUserOrOrganizationSite ? `/${repositoryName}` : "/";

export default defineConfig({
  output: "static",
  site,
  base,
  build: {
    inlineStylesheets: "never",
  },
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
