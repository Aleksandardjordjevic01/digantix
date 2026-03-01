import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about Digantix - our mission, vision, and the team behind innovative digital solutions. We are passionate about creating meaningful digital experiences.',
  openGraph: {
    title: 'About Us | Digantix',
    description: 'Learn more about Digantix - our mission, vision, and the team behind innovative digital solutions.',
  },
  alternates: {
    canonical: '/about-us',
  },
}

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
