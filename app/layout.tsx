import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "RW Guru Fintech",
  description: "Developed by AZSH Vendors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
return (
<ClerkProvider>
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
</ClerkProvider>
  );
}
