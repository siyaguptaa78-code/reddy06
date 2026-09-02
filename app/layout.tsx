import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://reddybookies.com"),
  applicationName: "Reddy Anna",
  title: "Reddy Anna Official Website | ID & Book Information | reddybookies.com",
  description:
    "Explore Reddy Anna information, online ID guidance, sports betting and gaming resources, account help, and frequently asked questions.",
  keywords: [
    "Reddy Anna",
    "Reddy Anna Book",
    "Reddy Anna ID",
    "Cricket Betting ID",
    "IPL Betting ID",
    "Online Betting ID",
    "Best Betting Id Provider"
  ],
  authors: [{ name: "Reddy Anna" }],
  creator: "Reddy Anna",
  publisher: "Reddy Anna",
  alternates: {
    canonical: "https://reddybookies.com",
  },
  openGraph: {
    title: "Reddy Anna Official Website | ID & Book Information | reddybookies.com",
    description:
      "Explore Reddy Anna information, online ID guidance, sports betting and gaming resources, account help, and frequently asked questions.",
    url: "https://reddybookies.com",
    siteName: "Reddy Anna",
    images: [
      {
        url: "https://reddybookwinin.in/wp-content/uploads/elementor/thumbs/cricket-bg-rlghoi9i0hsj2n8qphq7tivs3mol4s3iin7qqytzxc.webp",
        width: 800,
        height: 600,
        alt: "Reddy Anna Book Cricket Background"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Reddy Anna Official Website | ID & Book Information | reddybookies.com",
    description:
      "Explore Reddy Anna information, online ID guidance, sports betting and gaming resources, account help, and frequently asked questions.",
    images: [
      "https://reddybookwinin.in/wp-content/uploads/elementor/thumbs/cricket-bg-rlghoi9i0hsj2n8qphq7tivs3mol4s3iin7qqytzxc.webp"
    ]
  },
  icons: {
    icon: [
      {
        url: "https://reddybookwinin.in/wp-content/uploads/2025/06/cropped-download-1-1-150x150.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        url: "https://reddybookwinin.in/wp-content/uploads/2025/06/cropped-download-1-1-300x300.png",
        sizes: "192x192",
        type: "image/png"
      }
    ],
    apple: [
      {
        url: "https://reddybookwinin.in/wp-content/uploads/2025/06/cropped-download-1-1-300x300.png"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <meta name="google-site-verification" content="BVhrPu1_IgUzq9a4iFZa_D9WN9OnlrLXgyflYbV-vpo" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#05080f] text-gray-200 antialiased flex flex-col justify-between">
        <Header />
        <main className="flex-1 w-full bg-[#05080f]">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-GSYPQG92W7" strategy="afterInteractive" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GSYPQG92W7');
            `
          }}
        />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://reddybookies.com/#website",
                  "url": "https://reddybookies.com/",
                  "name": "Reddy Anna",
                  "inLanguage": "en"
                },
                {
                  "@type": "Organization",
                  "@id": "https://reddybookies.com/#organization",
                  "name": "Reddy Anna",
                  "url": "https://reddybookies.com/"
                },
                {
                  "@type": "WebPage",
                  "@id": "https://reddybookies.com/#webpage",
                  "url": "https://reddybookies.com/",
                  "name": "Reddy Anna Official Website | ID & Book Information | reddybookies.com",
                  "description": "Explore Reddy Anna information, online ID guidance, sports betting and gaming resources, account help, and frequently asked questions.",
                  "isPartOf": {
                    "@id": "https://reddybookies.com/#website"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://reddybookies.com/#faq",
                  "url": "https://reddybookies.com/",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What is Reddy Anna?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Reddy Anna is the brand or website referenced on this domain. Check the site's current pages and terms for the latest information."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How does a Reddy Anna ID work?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "An account ID is generally used to identify a user account. Refer to Reddy Anna's current account instructions and terms for the exact process."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How can I access the Reddy Anna website?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Use the site's current official URL and verify the domain before entering any account information. Follow the access instructions published on the site."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What sports are available on Reddy Anna?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Available sports can change. Check the current sports or betting section on the website for the latest list and availability."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Does Reddy Anna provide live sports information?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Check the site's current sports section for any live-event information and the terms that apply to its use."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How can I get help with my Reddy Anna account?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What payment options are supported?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How can I check Reddy Anna login information?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What should I do if I have a problem with my account?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Refer to Reddy Anna's current website information and terms for the most accurate answer."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Where can I find the latest Reddy Anna updates?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Refer to Reddy Anna's current website information and terms for the most accurate answer."
                      }
                    }
                  ]
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
