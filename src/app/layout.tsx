import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CaseFlo - Law Firm Web App",
  description: "Check case updates, read approved documents, and pay fees.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
