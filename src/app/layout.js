'use client' ;
import './globals.css'
import { Inter } from 'next/font/google'
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Container from 'react-bootstrap/Container';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <Container>
          {children}
        </Container>
      </body>
    </html>
  )
}
