import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { dbConfig } from "@/utils/dbConfig";
import MainProvider from "./MainProvider";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  dbConfig();
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainProvider>
          <Header />
          <div className="w-full flex justify-center">
            <div className=" flex w-[90%] m-10 border rounded-md min-h-[600px] p-4">
              {children}
            </div>
          </div>
        </MainProvider>
      </body>
    </html>
  );
}
