export type Post = {
  slug: string,
  title: string,
  description?: string,
  date: string,
  published: boolean,
  tags?: string[],
  body: string,
  slugAsParams: string,
}