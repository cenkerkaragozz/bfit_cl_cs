"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "@/sanity/schemaTypes";

export default defineConfig({
  name: "brainfit",
  title: "BrainFit Studio",
  basePath: "/studio",
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
