import { MetadataRoute } from 'next'
import { speakers } from '@/lib/2026/data'

export const dynamic = 'force-static'

const baseUrl = 'https://phcukconference.org'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const pages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/2026/`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/2026/schedule/`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/2026/dinner/`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/2026/exhibitors/`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/privacy-policy/`, lastModified, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${baseUrl}/terms/`, lastModified, changeFrequency: 'yearly', priority: 0.2 },
  ]

  const speakerPages: MetadataRoute.Sitemap = speakers.map((speaker) => ({
    url: `${baseUrl}/2026/speakers/${speaker.slug}/`,
    lastModified,
    changeFrequency: 'yearly',
    priority: 0.4,
  }))

  return [...pages, ...speakerPages]
}
