// Relative imports (not the `@/` alias) so these files resolve in both the
// Next.js build and the standalone Sanity Studio build, which uses Vite.
import { author } from "./author";
import { category } from "./category";
import { post } from "./post";

export const schemaTypes = [post, author, category];
