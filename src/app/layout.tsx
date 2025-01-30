import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Menu Klug Next",
  description: "Menu Klug Next js",
  icons: {
    icon: '/logo1.png', 
    apple: '/logo1png', 
  },
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
      >
        {children}
      </body>
    </html>
  );
}
