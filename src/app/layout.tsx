import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./navbar/navbar"
import Footer from "./footer/footer"
export const metadata: Metadata = {
  title: "To Do list App",
  description: "To Do Application",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html>
      <Navbar/>
      <body>{children}</body>
      <Footer/>
    </html>
  );
}
