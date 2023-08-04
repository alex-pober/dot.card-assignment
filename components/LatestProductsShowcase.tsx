"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components'
import { DM_Sans, Inter } from 'next/font/google';
import { useRouter } from 'next/navigation'

const dmSans = DM_Sans({
  weight: ['700', '500'],
  subsets: ['latin']
})

const inter = Inter({
  weight: '400',
  subsets: ['latin']
})

const Title = styled.h1`
  color: var(--black, #201B21);
  font-family: ${dmSans.style.fontFamily};
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 133.333% */
  letter-spacing: -1px;
  margin-bottom: 32px;
`

const Product = styled.div`
  display: flex;
  gap: 24px;
`
const ProductBrand = styled.h3`
  color: var(--black, #201B21);
  font-family: ${dmSans.style.fontFamily};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 120% */
  letter-spacing: -0.5px;
  margin-top: 18px;
  margin-bottom: 6px;
`
const ProductName = styled.h4`
  color: var(--dark-grey, #67696E);
  font-family: ${inter.style.fontFamily};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
`
const ProductPrice = styled.p`
  color: var(--black, #201B21);
  font-family: ${dmSans.style.fontFamily};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.5px;
  margin-top: 14px;
`

interface Product {
  id: number;
  brand: string;
  name: string;
  description: string;
  descBullet: Array<any>;
  price: string;
  images: Array<any>;
  imagesSmall: Array<any>;
}

const LatestProductShowcase: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);
  const router = useRouter()

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/shoes');
      const jsonData = await res.json();
      setData(jsonData);
    }

    fetchData();
  }, []);

  return (
    <div>
      <Title>Explore our latest drops</Title>
      <Product>
        {data.map(product => (
          <div style={{cursor: "pointer"}} key={product.id} onClick={() => router.push(`/shoes/${product.id}`)}>
            <Image
              alt='image'
              src={String(product.imagesSmall[0])}
              width={261}
              height={284}
            />
            <ProductBrand>{product.brand}</ProductBrand>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>${product.price}</ProductPrice>
          </div>
        ))}
      </Product>
    </div>
  );
};

export default LatestProductShowcase;
