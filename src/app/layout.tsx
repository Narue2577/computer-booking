//when you open starting page (localhost:3001)
import type { Metadata } from "next";
import {  Kanit } from "next/font/google";
import "./globals.css";



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
      <body className={`${kanit.className} bg-gray-100 min-h-screen flex flex-col`}>
        <h1>Header</h1>
        <hr />
        {children}
      </body>
    </html>
  );
}
