export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Digantix',
    url: 'https://digantix.com',
    logo: 'https://digantix.com/logo/logo-light.png',
    description: 'Digital Product Design and Technology Partner. Working alongside ambitious startups and enterprises to build scalable web, mobile, and cross-platform products.',
    sameAs: [
      'https://www.linkedin.com/company/digantix',
      'https://twitter.com/digantix',
      'https://github.com/digantix'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['English', 'Serbian']
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'RS'
    },
    knowsAbout: [
      'Web Development',
      'Mobile App Development',
      'UI/UX Design',
      'Custom Software Development',
      'CRM Systems',
      'E-commerce Solutions',
      'Digital Transformation',
      'React Development',
      'Next.js Development',
      'React Native Development'
    ],
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '44.8176',
        longitude: '20.4569'
      }
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
