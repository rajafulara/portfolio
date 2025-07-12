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
  authors: [{ name: 'Raja Fulara', url: baseUrl }],
  creator: 'Raja Fulara',
  publisher: 'Raja Fulara',
  openGraph: {
    title: 'Portfolio | Raja Fulara',
    description: 'Explore the portfolio of Raja Fulara, a skilled Web Developer. Discover creative solutions and innovative projects.',
    url: baseUrl,
    siteName: 'Raja Fulara',
    images: [
      {
        url: `${baseUrl}/favicon.ico`,
        alt: 'Open Graph Image | Raja Fulara',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      'en-US': `${baseUrl}/`,
    },
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
    icon: `${baseUrl}/favicon.ico`,
    shortcut: `${baseUrl}/favicon.ico`,
    apple: `${baseUrl}/favicon.ico`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
