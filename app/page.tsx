"use client"
import Image from 'next/image'
import LatestProductShowcase from '../components/LatestProductsShowcase'
import styled from 'styled-components'
import PromoBanner from '@/components/PromoBanner'

export default function Home() {
  return (
    <>
      <PromoBanner />
      <LatestProductShowcase />
    </>
  )
}
