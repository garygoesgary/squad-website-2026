import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Squad Recruitment — We Love Your Work",
  description:
    "Squad Recruitment connects you to exclusive professional networks worldwide. Let us help you find your perfect match.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
