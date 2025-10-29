import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
});

export const metadata = {
  title: "AKTIVO - Good design, good business",
  description: "Advanced Engineering Solutions - Product Design, Engineering, Prototyping, Manufacturing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
