import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Providers from '@/app/providers';

// Use Figtree font
const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Google Devs Fisk",
  description: "An inclusive community where passionate students come together to identify problems, conceptualize coding ideas, and collaborate on real-world projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <div className={`container mx-auto min-w-full ${figtree.className}`}>
          <Providers>
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
