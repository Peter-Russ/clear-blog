import { defineCollection, defineConfig, s } from "velite";

// This function is used to add a computed property (slugAsParams) to the posts
const computedPosts = <T extends { slug: string }>(posts: T) => ({
  ...posts,
  slugAsParams: posts.slug.split("/").slice(1).join("/"),
})

const posts = defineCollection({
  name: "Post",
  pattern: "blog/**/*.mdx",
  schema: s.object({
    slug: s.path(),
    title: s.string().max(99),
    description: s.string().max(999).optional(),
    date: s.isodate(),
    published: s.boolean().default(true),
    tags: s.array(s.string()).optional(),
    body: s.mdx(),
  })
    .transform(computedPosts),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts },
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  }
});