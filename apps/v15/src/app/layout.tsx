import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "v15",
  description: "v15",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}
