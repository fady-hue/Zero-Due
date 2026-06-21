import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zero Due | AI-Powered Debt Collection Platform",
  description: "Transform your debt recovery with AI-powered collection solutions for Saudi Arabia and GCC markets.",
  keywords: "debt collection, AI, Saudi Arabia, GCC, BNPL, fintech",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" dir="ltr">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        </head>
        <body className="bg-[#0A0A0F] text-[#F0F0F5] antialiased">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
