import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Menu Klug Next",
  description: "Menu Klug Next js",
};

/*ESTO SERIA EL LAYOUT GLOBAL OBLIGATORIO*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-teal-500"
      >
        {children}
      </body>
    </html>
  );
}
