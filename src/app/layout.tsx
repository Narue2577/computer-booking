import type { Metadata } from "next";
import { Geist, Kanit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const kanit = Kanit({
  subsets: ["thai"],
  weight: ['100','200', '300', '400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Computer Seat Booking System",
  description: "จองที่นั่งในทุกห้องคอมพิวเตอร์ของตึก COSCI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${kanit.className} `}
      >
        {children}
      </body>
    </html>
  );
}
