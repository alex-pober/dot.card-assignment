'use client'
import React, { useState, useEffect, useContext } from 'react';
import ProductImages from '@/components/ProductImages';
import QuantityInput from '@/components/QuantityInput';
import styled from "styled-components";
import Image from 'next/image';
import { DM_Sans, Inter } from '@next/font/google';
import { CartContext } from '@/context/cart.context';

const dmSans = DM_Sans({
  weight: ['700', '500'],
  subsets: ['latin']
})

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin']
})

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 42px;
  margin-top: 32px;
`

const ProductAddToCart = styled.div`
  width: 456px;
  height: 374px;
  border-radius: 20px;
  background: var(--white, #FFF);
  box-shadow: 0px 4.444444179534912px 66.66666412353516px 0px rgba(0, 0, 0, 0.08);
  padding: 36px;
`
const ProductBrand = styled.h3`
  color: var(--black, #201B21);
  font-family: ${dmSans.style.fontFamily};
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.5px;
  margin-bottom: 8px;
`
const ProductName = styled.h4`
  color: var(--dark-grey, #67696E);
  font-family: ${inter.style.fontFamily};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */
  margin-bottom: 18px;
`
const ProductPrice = styled.p`
  color: var(--black, #201B21);
  font-family: ${dmSans.style.fontFamily};
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 100% */
  letter-spacing: -0.5px;
`

const Divder = styled.div`
  border: 1px solid var(--line-light-grey, #E9EBEE);
  background: var(--line-light-grey, #E9EBEE);
  margin-top: 36px;
  width: auto;
  margin-inline: -36px;
`

const Quanity = styled.div`
  margin-top: 36px;

  & p{
    color: var(--black, #201B21);
    font-family: ${dmSans.style.fontFamily};
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 111.111% */
    letter-spacing: -0.5px;
  }
`

const AddToCartButton = styled.button`
  margin-top: 56px;
  display: flex;
  width: 456px;
  padding: 20px 80px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: var(--black, #201B21);
  color: var(--white, #FFF);
  font-family: ${inter.style.fontFamily};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 111.111% */
  cursor: pointer;
`
const DescriptionSection = styled.div`
  width: 514px;
  padding: 16px;
  & h3 {
    color: var(--black, #201B21);
    font-family: ${dmSans.style.fontFamily};
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
    letter-spacing: -0.5px;
  }

  & p {
    color: var(--dark-grey, #67696E);
    font-family: ${inter.style.fontFamily};
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
  }

  & ul {
    margin-top: 16px;
    margin-left: 24px;
  }

  & li {
    color: var(--dark-grey, #67696E);
    font-family: ${inter.style.fontFamily};
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
  }
`
interface ShoeType {
  id: number;
  brand: string;
  name: string;
  description: string;
  descBullet: any[];
  price: string;
  images: string[];
  imagesSmall: string[];
}


export default function Shoe({ params }: { params: { id: number } }) {
  const [shoeData, setShoeData] = useState<ShoeType | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const {state, dispatch} = useContext(CartContext)

  console.log(state)
  const handleIncrement = () => {
    setQuantity((prev) => Math.min(prev + 1, 99));
  };

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/shoes');
        const data: ShoeType[] = await response.json();
        const matchingShoe = data.find((shoe: ShoeType) => shoe.id == params.id)

        setShoeData(matchingShoe || null);
      } catch (error) {
        console.error('Error fetching shoe data:', error);
      }
    };

    fetchData();
  }, [params.id]);

  return <Main>
  <ProductImages src={shoeData?.images || []}/>
  <ProductAddToCart>
    <ProductBrand>{shoeData?.brand}</ProductBrand>
    <ProductName>{shoeData?.name}</ProductName>
    <ProductPrice>${shoeData?.price}</ProductPrice>
    <Divder />
    <Quanity>
      <p>Quanity</p>
      <QuantityInput
        style={{marginTop: '16px'}}
        value={quantity}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </Quanity>
    <AddToCartButton
       //@ts-ignore
      onClick={() => dispatch({type: "ADD_ITEM", payload: shoeData})}
    >
      Add to Cart
    </AddToCartButton>
  </ProductAddToCart>

  <DescriptionSection>
    <h3>Description</h3>
    <Divder style={{marginInline: '0px', marginTop: '10px', marginBottom: '18px', width: '546px'}}/>
    <p>{shoeData?.description}</p>
    <ul>
      {shoeData?.descBullet.map((bullet, index) => {return (
        <li key={`bullet-${index}`}>{bullet}</li>
      )})}
    </ul>
  </DescriptionSection>
  <Image
    alt='product image'
    src={(shoeData?.images[shoeData?.images.length-1])}
    width={528}
    height={373}
  />
  </Main>

}
