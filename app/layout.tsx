import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "N7",
  description: "The new foundation of modern banking",
  icons: {
    icon: "/assets/svg/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
