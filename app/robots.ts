import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://doora.app'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/',
          '/user/settings/',
          '/user/profile/',
          '/user/activity/',
          '/user/favorites/',
          '/user/following/',
          '/user/sell/',
          '/user/chat/',
          '/user/*/reviews/',
          '/user/*/wardrobe/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/',
          '/user/settings/',
          '/user/profile/',
          '/user/activity/',
          '/user/favorites/',
          '/user/following/',
          '/user/sell/',
          '/user/chat/',
          '/user/*/reviews/',
          '/user/*/wardrobe/',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/',
          '/user/settings/',
          '/user/profile/',
          '/user/activity/',
          '/user/favorites/',
          '/user/following/',
          '/user/sell/',
          '/user/chat/',
          '/user/*/reviews/',
          '/user/*/wardrobe/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}



