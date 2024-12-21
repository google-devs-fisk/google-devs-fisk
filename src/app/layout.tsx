import type { Metadata } from "next";
import "./globals.css";
import Providers from '@/app/providers';

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
        <div className="container mx-auto px-4 max-w-6xl">
          <Providers>
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
