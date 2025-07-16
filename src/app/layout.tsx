//when you open starting page (localhost:3001)
import type { Metadata } from "next";
import "./globals.css";




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
      <body className={` bg-gray-100 min-h-screen flex flex-col`}>
        {/* <h1 className="justify-center">Computer Seat Booking System </h1>8 */}
        <hr />
        {children}
      </body>
    </html>
  );
}
