import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./component/navbar";
import { ProductProvider } from "./context/productContext";
import { ProductSearchProvider } from "./context/productSearchContext";
import { CartProvider } from "./context/cartContext";
import { AuthProvider } from "./context/authContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nammkart",
  description: "A digital store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
        <ProductSearchProvider>
          
        <ProductProvider>
        <CartProvider>
      <Navbar/>
        {children}
        </CartProvider>
        </ProductProvider> 
        
        </ProductSearchProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
