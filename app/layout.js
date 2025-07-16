const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

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

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Portfolio | Raja Fulara',
    template: '%s | Raja Fulara',
  },
  description: 'Explore the portfolio of Raja Fulara, a skilled Web Developer. Discover creative solutions and innovative projects.',
  keywords: ['raja fulara', 'raja fulara portfolio', 'raja fulara official', 'rajafulara'],
  authors: [{ name: 'Raja Fulara', url: '/' }],
  creator: 'Raja Fulara',
  publisher: 'Raja Fulara',
  openGraph: {
    title: 'Portfolio | Raja Fulara',
    description: 'Explore the portfolio of Raja Fulara, a skilled Web Developer. Discover creative solutions and innovative projects.',
    url: '/',
    siteName: 'Raja Fulara',
    images: [
      {
        url: '/favicon.ico',
        alt: 'Open Graph Image | Raja Fulara',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },

  twitter: {
  card: 'summary_large_image',
  title: 'Portfolio | Raja Fulara',
  description: 'Explore the portfolio of Raja Fulara, a skilled Web Developer. Discover creative solutions and innovative projects.',
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}

<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "Raja Fulara",
  "url": "https://rajafulara.me",
  "image": "https://media.licdn.com/dms/image/v2/D5603AQHzaFj4Jio2UA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727598419842?e=1758153600&v=beta&t=O2DC34o-_pbf1LQ5cS4abqDFsV3UzJKjmcjrm20cG34",
  "sameAs": [
    "https://www.linkedin.com/in/rajafulara",
    "https://github.com/rajafulara"
  ],
  "jobTitle": "Professional",
  "worksFor": {
    "@type": "Organization",
    "name": "Organization"
  }  
}
</script>
  
      </body>
    </html>
  );
}
