"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { CartContext } from "@/context/cart.context";
import styled from "styled-components";
import { DM_Sans, Inter } from "@next/font/google";
import QuantityInput from "@/components/QuantityInput";
const dmSans = DM_Sans({
  weight: ["700", "500"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const YourBagSection = styled.div`
  width: 582px;

  & h1 {
    margin-bottom: 28px;
  }
`;
const SummarySection = styled.div`
  width: 388px;
  height: 437px;
  flex-shrink: 0;
  border-radius: 20px;
  padding: 36px;
  background: var(--white, #fff);
  box-shadow: 0px 4.444444179534912px 66.66666412353516px 0px
    rgba(0, 0, 0, 0.08);

  & h1 {
    margin-bottom: 24px;
  }
`;

const ItemInBag = styled.div`
  margin-right: 74px;
  display: flex;
  padding-bottom: 32px;
  margin-bottom: 32px;
  border-bottom: 1px solid #201b2129;;
`
const ItemInBagMiddle = styled.div`
  display: flex;
  height: max-content;
  flex-direction: column;
  height: auto;
  justify-content: space-between;
  margin-left: 33px;

  & h3 {
    color: var(--black, #201B21);
    font-family: ${dmSans.style.fontFamily};
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 120% */
    letter-spacing: -0.5px;
  }

  & h5 {
    color: var(--dark-grey, #67696E);
    font-family: ${inter.style.fontFamily};
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
  }
`

const ItemInBagRight = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-direction: row-reverse;
  width: -webkit-fill-available;

  & p {
    color: var(--black, #201B21);
    text-align: right;
    font-family: ${dmSans.style.fontFamily};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.5px;
  }
`

const RemoveButton = styled.button`
  color: var(--dark-grey, #67696E);
  font-family: ${inter.style.fontFamily};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 150% */
  text-decoration-line: underline;
  background: none;
  border: none;
`

const Count = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--black, #201B21);
  font-family: ${dmSans.style.fontFamily};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 120% */
  letter-spacing: -0.5px;
  margin-bottom: 16px;
`
const Total = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--black, #201B21);
  font-family: ${dmSans.style.fontFamily};
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.5px;
`

type Props = {};

export default function Cart({}: Props) {
  const { state, dispatch } = useContext(CartContext);
  const [totalPice, setTotalPrice] = useState<number>()

  function total_price(products: Array<any>) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        console.log(products)
        const price = parseInt(product['price']);
        total += price;
    }
    setTotalPrice(total);
}

  useEffect(() => {
    total_price(state.cart)
  }, [state])

  console.log(totalPice)
  return (
    <Main>
      <YourBagSection>
        <h1>Your Bag</h1>
        {state.cart.map(product => {
          return (
            <ItemInBag>
              <Image
                alt="product image"
                src={product.imagesSmall[0]}
                width={165}
                height={166}
              />

              <ItemInBagMiddle>
                <div>
                  <h3>{product.brand}</h3>
                  <h5>{product.name}</h5>
                </div>
                <div style={{display: 'flex', gap: '30px'}}>
                  <QuantityInput value={1}/>
                  <RemoveButton
                    onClick={() => dispatch({type: "REMOVE_ITEM", payload: product})}
                  >Remove</RemoveButton>
                </div>
              </ItemInBagMiddle>

              <ItemInBagRight>
                <p>${product.price}</p>
              </ItemInBagRight>
            </ItemInBag>
          )
        })}
      </YourBagSection>

      <SummarySection>
        <h1>Summary</h1>
        <Count>
          <p>Subtotal</p>
          <p>123</p>
        </Count>
        <Count>
          <p>Shipping and delivery</p>
          <p>$20.00</p>
        </Count>
        <Count>
          <p>Tax</p>
          <p>$6.00</p>
        </Count>
        <Count>
          <p>Discount</p>
          <p>-$6.00</p>
        </Count>

        <Total>
          <p>Total</p>
          <p>${totalPice}</p>
        </Total>
      </SummarySection>
    </Main>
  );
}
