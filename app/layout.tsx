'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CartContextProvider } from '@/context/cart.context'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import StyledComponentsRegistry from './registry'
import styled from 'styled-components'
const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

const BodyComponent = styled.div`
  min-height: 100vh;
  max-width: 1116px;
  margin: auto;
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body className={inter.className}>
          <CartContextProvider>
            <NavBar />
            <BodyComponent>
              {children}
            </BodyComponent>
          </CartContextProvider>
          <Footer />
        </body>
      </StyledComponentsRegistry>
    </html>
  )
}