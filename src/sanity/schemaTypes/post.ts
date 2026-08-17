import { defineArrayMember, defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fieldsets: [
    {
      name: "seo",
      title: "SEO",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative text",
          type: "string",
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: "cardImage",
      title: "Blog card image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative text",
          type: "string",
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "updatedAt",
      title: "Updated at",
      description:
        "When this post was last meaningfully revised. Feeds the article's \"date modified\" signal for search engines — leave blank if the post hasn't been updated since publishing.",
      type: "datetime",
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      validation: (rule) => rule.max(220),
    }),
    defineField({
      name: "commentCount",
      title: "Comment count",
      type: "number",
      initialValue: 0,
      validation: (rule) => rule.min(0).integer(),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
        }),
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alternative text",
              type: "string",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "seoTitle",
      title: "SEO title",
      description:
        "Overrides the page title in search results and social shares. Aim for ~60 characters. Leave blank to use the post title.",
      type: "string",
      fieldset: "seo",
      validation: (rule) => rule.max(60).warning("Beyond ~60 characters, search engines usually truncate the title."),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO description",
      description:
        "Overrides the excerpt as the meta description. Aim for ~155-160 characters. Leave blank to use the excerpt.",
      type: "text",
      rows: 3,
      fieldset: "seo",
      validation: (rule) =>
        rule
          .max(160)
          .warning("Beyond ~155-160 characters, search engines usually truncate the description."),
    }),
    defineField({
      name: "ogImage",
      title: "Social share image",
      description: "Overrides the main image for social cards (Open Graph / Twitter). Leave blank to use the main image.",
      type: "image",
      options: { hotspot: true },
      fieldset: "seo",
    }),
    defineField({
      name: "noindex",
      title: "Hide from search engines",
      description: "When on, this post is excluded from indexing and from the sitemap.",
      type: "boolean",
      initialValue: false,
      fieldset: "seo",
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author: authorName } = selection;
      return { ...selection, subtitle: authorName && `by ${authorName}` };
    },
  },
});
