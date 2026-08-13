import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemaTypes";

export default defineConfig({
  name: "brainfit",
  title: "BrainFit Studio",
  // The Studio is deployed standalone (`npm run studio:deploy`) rather than
  // embedded in the Next.js app, which keeps it out of the Cloudflare Worker
  // bundle. It is served from the root of brainfit.sanity.studio.
  basePath: "/",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "ati93y0z",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  auth: {
    loginMethod: "token",
  },
  schema: {
    types: schemaTypes,
  },
  plugins: [structureTool()],
});
