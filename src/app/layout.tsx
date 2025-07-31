//when you open starting page (localhost:3001)
import type { Metadata } from "next";
import "./globals.css";
import { useSession } from '@/lib/session';



export const metadata: Metadata = {
  title: "Computer Seat Booking System",
  description: "จองที่นั่งในทุกห้องคอมพิวเตอร์ของตึก COSCI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = useSession();
  return (
    <html lang="en">
      <body className={` bg-gray-100 min-h-screen flex flex-col`}>
        {/* <h1 className="justify-center">Computer Seat Booking System </h1>8 */}
        <div>{session?.username}</div>
        <hr />
        {children}
      </body>
    </html>
  );
}
