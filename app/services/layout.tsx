import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore our comprehensive digital services: Web Development, Mobile App Development, UI/UX Design, Custom Software, CRM Systems, E-commerce Solutions, and more.',
  keywords: [
    'web development services',
    'mobile app development',
    'UI/UX design services',
    'custom software development',
    'CRM development',
    'e-commerce development',
    'React development',
    'Next.js development',
    'React Native apps',
    'digital transformation services'
  ],
  openGraph: {
    title: 'Our Services | Digantix',
    description: 'Explore our comprehensive digital services: Web Development, Mobile App Development, UI/UX Design, Custom Software, and more.',
  },
  alternates: {
    canonical: '/services',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
