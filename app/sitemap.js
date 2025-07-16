const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export default function sitemap() {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
  ]
}
