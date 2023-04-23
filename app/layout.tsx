"use client"

import { ReactNode } from "react"
import { SessionProvider } from "next-auth/react";
import Navbar from "../components/Navbar";

// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// }

interface IProps {
  children: ReactNode;
}

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Navbar />
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
