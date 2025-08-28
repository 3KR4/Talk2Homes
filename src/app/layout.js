import "./globals.css";
import "aos/dist/aos.css";
import AOSInit from "@/components/AOSInit";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Talk to Homes",
  description:
    "Real Estate Cold Calling Services specializes in providing high-quality cold calling services to real estate professionals.",
  keywords:
    "Talk to homes, talk 2 homes, talk2homes, talkhomes, talktohomes, VA cold calling, Virtual assistant, cold calling , real estate leads , real estate appointments , real estate lead generating , appointment setters , quality leads real estate , cold calling leads real estate , wholesaling real estate leads",
  openGraph: {
    title: "Talk to Homes",
    description:
      "Real Estate Cold Calling Services specializes in providing high-quality cold calling services to real estate professionals.",
    type: "website",
  },
  openGraph: {
    title: "Talk to Homes",
    description:
      "Real Estate Cold Calling Services specializes in providing high-quality cold calling services to real estate professionals.",
    url: "https://talk2-homes.vercel.app",
    siteName: "Talk to Homes",
    images: [
      {
        url: "/ogo.png",
        width: 1300,
        height: 750,
        alt: "Talk to Homes Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/small-logo.png",
    shortcut: "/small-logo.png",
    apple: "/small-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AOSInit />
        {children}
        <Footer />
      </body>
    </html>
  );
}
