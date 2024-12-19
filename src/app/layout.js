'use client' ;
import './globals.css'
import { Inter } from 'next/font/google'
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Container from 'react-bootstrap/Container';
import Footer from "./components/Footer";
import { UserProvider } from '@auth0/nextjs-auth0/client';

const inter = Inter({ subsets: ['latin'] })

export const Metadata = {
  title: 'MyNextPWA',
  descrption: 'Mascotas en adopcion',
  manifest: '/manifest.json',
  
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <head>
          <link
              rel="manifest"
              href="/manifest.json"
          />
      </head>
      <UserProvider>
      <body className={inter.className}>
        <NavBar />
        <Container>
          {children}
        </Container>
        <Footer />
      </body>
      </UserProvider>
    </html>
  )
}
