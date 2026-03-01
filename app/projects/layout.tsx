import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore our portfolio of successful projects: Web applications, Mobile apps, CRM systems, E-commerce platforms, and custom solutions for startups and enterprises.',
  keywords: [
    'web development portfolio',
    'mobile app portfolio',
    'digital agency projects',
    'case studies',
    'successful projects',
    'web applications',
    'mobile applications',
    'CRM systems',
    'e-commerce projects'
  ],
  openGraph: {
    title: 'Our Projects | Digantix',
    description: 'Explore our portfolio of successful projects: Web applications, Mobile apps, CRM systems, E-commerce platforms, and custom solutions.',
  },
  alternates: {
    canonical: '/projects',
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
