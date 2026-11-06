import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Customvaas | Websites, Applications & Custom Software",
  description:
    "Customvaas builds professional business websites, web applications and custom software solutions for growing businesses.",
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
