import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Robe Mulugeta | Technology & Education Leader",
  description: "Official portfolio of Robe Mulugeta - Tech Leader, Founder of Free Education Ethiopia, and Youth Advocate.",
  openGraph: {
    title: "Robe Mulugeta | Technology & Education Leader",
    description: "Building Africa’s Digital Education Future. Founder of a 150,000+ student platform.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans bg-background text-foreground antialiased selection:bg-primary/30`}
      >
        <div className="fixed inset-0 -z-10 bg-gradient-premium" />
        {children}
      </body>
    </html>
  );
}
