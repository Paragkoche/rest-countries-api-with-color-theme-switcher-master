"use client";
import "./style.scss";
import { ThemeProvider } from "next-theme";
import Header from "@/components/Header";
import { CountryDataProvider } from "@/providers/country.provider";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <Header />
      <CountryDataProvider>
        <main>{children}</main>
      </CountryDataProvider>
    </ThemeProvider>
  );
}
