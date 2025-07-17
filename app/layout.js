import { GoogleAnalytics } from '@next/third-parties/google'
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400","500","600","700"],
})
const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

const pageTitle = 'Raja Fulara | Portfolio Website'

const pageDescription = 'Explore the portfolio of Raja Fulara, a skilled Web Developer based in India. Discover creative solutions and innovative projects in this website.'

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: pageTitle,
    template: '%s | Raja Fulara',
  },
  description: pageDescription,
  keywords: ['raja fulara', 'raja fulara portfolio', 'raja fulara portfolio website', 'raja fulara official', 'rajafulara'],
  authors: [{ name: 'Raja Fulara', url: '/' }],
  creator: 'Raja Fulara',
  publisher: 'Raja Fulara',
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/',
    siteName: 'Raja Fulara',
    images: [
      {
        url: '/favicon.ico',
        alt: 'Raja Fulara | Open Graph Image',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },

  twitter: {
  card: 'summary_large_image',
  title: pageTitle,
  description: pageDescription,
  images: ['/favicon.ico'],
  },
  
  alternates: {
    canonical: '/',
  },
  
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Raja Fulara',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQHzaFj4Jio2UA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727598419842?e=1758153600&v=beta&t=O2DC34o-_pbf1LQ5cS4abqDFsV3UzJKjmcjrm20cG34',
    url: 'https://www.linkedin.com/in/rajafulara',
  }
 

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>

        <GoogleAnalytics gaId="G-KCZ9X4MQ7T" />

<script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
        
    </html>
  );
}
