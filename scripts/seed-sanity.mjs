import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_READ_TOKEN;

if (!projectId || !token) {
  console.error("Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_READ_TOKEN before seeding.");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-05-06",
  token,
  useCdn: false,
});

const author = await client.createIfNotExists({
  _id: "author-brainfit-team",
  _type: "author",
  name: "BrainFit Team",
  slug: { _type: "slug", current: "brainfit-team" },
});

const category = await client.createIfNotExists({
  _id: "category-guidance",
  _type: "category",
  title: "Guidance",
  slug: { _type: "slug", current: "guidance" },
});

const posts = [
  {
    _id: "post-small-rituals",
    title: "Small rituals for a quieter morning",
    slug: { _type: "slug", current: "small-rituals-for-a-quieter-morning" },
    excerpt: "Gentle ways to give your nervous system a steadier start.",
    commentCount: 18,
  },
  {
    _id: "post-rest-recovery",
    title: "How rest changes emotional recovery",
    slug: { _type: "slug", current: "how-rest-changes-emotional-recovery" },
    excerpt: "Why sleep, pauses, and low-friction routines matter in care.",
    commentCount: 12,
  },
  {
    _id: "post-confidence",
    title: "Building confidence without pressure",
    slug: { _type: "slug", current: "building-confidence-without-pressure" },
    excerpt: "A practical framework for progress that does not feel forced.",
    commentCount: 24,
  },
];

for (const [index, post] of posts.entries()) {
  await client.createIfNotExists({
    ...post,
    _type: "post",
    author: { _type: "reference", _ref: author._id },
    categories: [{ _type: "reference", _ref: category._id }],
    publishedAt: new Date(Date.now() - index * 86400000).toISOString(),
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: `${post.excerpt} Publish real imagery in Studio to complete the editorial card presentation.`,
          },
        ],
      },
    ],
  });
}

console.log("Seeded BrainFit Sanity content.");
