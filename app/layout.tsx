import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Localy - Hyperlocal Superapp",
  description:
    "Your everything local app. Marketplace, Rides, Delivery, Travel Buddy, Local Discovery.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon is automatically handled by Next.js from metadata.icons */}
      </head>
      <body className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {children}
      </body>
    </html>
  );
}
