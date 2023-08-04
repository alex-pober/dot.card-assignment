"use client"
import Image from 'next/image'
import styled from 'styled-components'
import { DM_Sans, Inter } from 'next/font/google';

const dmSans = DM_Sans({
  style: ['normal'],
  weight: ['700', '500'],
  subsets: ['latin']
})

const inter = Inter({
  style: ['normal'],
  weight: '400',
  subsets: ['latin']
})

const Promo = styled.div`
  max-width: 1116px;
  mix-width: 350px;
  margin-bottom: 64px;
  height: 427px;
  flex-shrink: 0;
  border-radius: 40px;
  background: var(--hero-bg, #EAEEEF);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const PromoText = styled.div`

  & h2{
    color: var(--orange, #EC5E2A);
    font-family: ${dmSans.style.fontFamily};
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 56px; /* 116.667% */
    letter-spacing: -1px;
  }

  & h1{
    color: var(--black, #201B21);
    font-family: ${dmSans.style.fontFamily};
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: 73px; /* 114.063% */
    letter-spacing: -1px;
  }

  & p{
    color: var(--dark-grey, #67696E);
    font-family: ${inter.style.fontFamily};
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; /* 150% */
    margin-top: 20px;
  }
`

const PromoImage = styled.div`

`

const Button = styled.button`
  border-radius: 10px;
  background: var(--black, #201B21);
  display: inline-flex;
  padding: 20px 80px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: var(--white, #FFF);
  font-family: ${inter.style.fontFamily};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 111.111% */
  margin-top: 48px;
  cursor: pointer;
`

const PromoBanner: React.FC = () => {

  return(
    <Promo>

      <PromoText>
        <h2>25% OFF</h2>
        <h1>Summer Sale</h1>
        <p>Discover our summer styles with discount</p>

        <Button>
          Shop Now
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18.6875 12.7188L13.6875 17.7188C13.5 17.9062 13.25 18 13 18C12.7188 18 12.4688 17.9062 12.2812 17.7188C11.875 17.3438 11.875 16.6875 12.2812 16.3125L15.5625 13H6C5.4375 13 5 12.5625 5 12C5 11.4688 5.4375 11 6 11H15.5625L12.2812 7.71875C11.875 7.34375 11.875 6.6875 12.2812 6.3125C12.6562 5.90625 13.3125 5.90625 13.6875 6.3125L18.6875 11.3125C19.0938 11.6875 19.0938 12.3438 18.6875 12.7188Z" fill="white"/>
          </svg>
        </Button>
      </PromoText>

      <PromoImage>
        <Image
          alt='Promo Shoe'
          src="/images/PromoBannerShoe.png"
          width={490}
          height={321}
        />
      </PromoImage>

    </Promo>
  )
}

export default PromoBanner;
