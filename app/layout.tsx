import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://mahshook.dev";

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Muhammed Mahshook Ali P | Software Engineer & AI Engineer",
  description:
    "Muhammed Mahshook Ali is a Software Engineer and AI Engineer specializing in full-stack engineering, Applied AI, LLM applications, RAG systems, cloud infrastructure, and scalable production software.",
  keywords: [
    "Muhammed Mahshook Ali",
    "Mahshook Ali",
    "Software Engineer",
    "AI Engineer",
    "Applied AI Engineer",
    "LLM Engineer",
    "Generative AI Engineer",
    "RAG Engineer",
    "Full Stack Engineer",
    "Backend Engineer",
    "Python Developer",
    "Next.js Developer",
    "Software Engineer India",
    "AI Engineer India",
    "Kerala Software Engineer",
    "Kochi Software Engineer",
  ],
  authors: [{ name: "Muhammed Mahshook Ali P", url: siteUrl }],
  creator: "Muhammed Mahshook Ali P",
  publisher: "Muhammed Mahshook Ali P",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Muhammed Mahshook Ali P | Software Engineer & AI Engineer",
    description:
      "Building scalable software and practical AI systems from idea to production. Specializing in full-stack, RAG, LLMs, and cloud deployments.",
    siteName: "Muhammed Mahshook Ali Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammed Mahshook Ali P - Software Engineer & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Mahshook Ali P | Software Engineer & AI Engineer",
    description:
      "Building scalable software and practical AI systems from idea to production. Specializing in full-stack, RAG, LLMs, and cloud deployments.",
    images: ["/images/og-image.jpg"],
    creator: "@mahshook_ali",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "geo.region": "IN-KL",
    "geo.placename": "Kochi, Kerala, India",
    "geo.position": "9.9312;76.2673",
    "ICBM": "9.9312, 76.2673",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Muhammed Mahshook Ali P",
      jobTitle: "Software Engineer & AI Engineer",
      description:
        "Software Engineer and AI Engineer specializing in full-stack development, Applied AI, LLM applications, RAG systems, backend engineering, and cloud infrastructure.",
      url: siteUrl,
      email: "mmahshookalip@gmail.com",
      telephone: "+91-7034049672",
      image: `${siteUrl}/images/portrait-cutout.png`,
      sameAs: [
        "https://github.com/Mahsh123",
        "https://www.linkedin.com/in/muhammed-mahshook",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kochi",
        addressRegion: "Kerala",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 9.9312,
        longitude: 76.2673,
      },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "APJ Abdul Kalam Technological University",
        },
      ],
      worksFor: [
        {
          "@type": "Organization",
          name: "Aionpixel",
        },
      ],
      knowsAbout: [
        "Software Engineering",
        "Artificial Intelligence",
        "Large Language Models",
        "Retrieval-Augmented Generation (RAG)",
        "Python",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Docker",
        "Kubernetes",
        "Cloud Infrastructure",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Muhammed Mahshook Ali P - Software Engineer & AI Engineer",
      description:
        "Personal brand and engineering portfolio of Muhammed Mahshook Ali P, Software Engineer and AI Engineer.",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: "Muhammed Mahshook Ali P | Software Engineer & AI Engineer Portfolio",
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#030712] text-slate-100 antialiased min-h-screen selection:bg-sky-500/20 selection:text-sky-300`}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
