import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import Nav from "@/_components/Nav";
import {Providers} from "./providers";

export const metadata: Metadata = {
  title: "Magnet Montgomery Blair High School",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
        <Nav/>
        {children}
        </Providers>
      </body>
    </html>
  );
}
