import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import Nav from "@/_components/Nav";

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
        <Nav/>
        <ThemeProvider attribute="class" defaultTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  );
}
