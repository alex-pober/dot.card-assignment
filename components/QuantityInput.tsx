import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: '700',
  subsets: ['latin']
})

const Outline = styled.div`
  min-width: 106px;
  max-width: 136px;
  display: inline-flex;
  justify-content: space-evenly;
  padding: 12px 16px;
  align-items: center;
  gap: 16px;
  border-radius: 10px;
  border: 1px solid var(--line-light-grey, #e9ebee);
  box-shadow: 0px 4.444444179534912px 66.66666412353516px 0px
  rgba(0, 0, 0, 0.08);
  color: var(--black, #201B21);
  text-align: center;
  font-family: ${inter.style.fontFamily};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 133.333% */
`
const Button = styled.button`
  border: none;
  background: none;
  display: flex;
  cursor: pointer;
  height: auto;
`

type Props = {
  style?: React.CSSProperties;
  value: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
};

export default function QuantityInput({ style, value, onIncrement, onDecrement }: Props) {

  return (
    <Outline style={style}>
      {value <= 1 ? (
        <Button
          disabled
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              opacity="0.4"
              d="M17.5 13H6.5C5.9375 13 5.5 12.5625 5.5 12C5.5 11.4688 5.9375 11 6.5 11H17.5C18.0312 11 18.5 11.4688 18.5 12C18.5 12.5625 18.0312 13 17.5 13Z"
              fill="#201B21"
            />
          </svg>
        </Button>
      ) : (
        <Button
          onClick={onDecrement}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M13.125 9.75H4.875C4.45312 9.75 4.125 9.42188 4.125 9C4.125 8.60156 4.45312 8.25 4.875 8.25H13.125C13.5234 8.25 13.875 8.60156 13.875 9C13.875 9.42188 13.5234 9.75 13.125 9.75Z"
              fill="#201B21"
            />
          </svg>
        </Button>
      )}

      {value}

      {value === 99 ? (
        <Button
          disabled
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              opacity="0.3"
              d="M18.5 12C18.5 12.5625 18.0312 13.0312 17.5 13.0312H13V17.5312C13 18.0625 12.5312 18.5 12 18.5C11.4375 18.5 11 18.0625 11 17.5312V13.0312H6.5C5.9375 13.0312 5.5 12.5625 5.5 12C5.5 11.4688 5.9375 11.0312 6.5 11.0312H11V6.53125C11 5.96875 11.4375 5.5 12 5.5C12.5312 5.5 13 5.96875 13 6.53125V11.0312H17.5C18.0312 11 18.5 11.4688 18.5 12Z"
              fill="#201B21"
            />
          </svg>
        </Button>
      ) : (
        <Button
          onClick={onIncrement}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18.5 12C18.5 12.5625 18.0312 13.0312 17.5 13.0312H13V17.5312C13 18.0625 12.5312 18.5 12 18.5C11.4375 18.5 11 18.0625 11 17.5312V13.0312H6.5C5.9375 13.0312 5.5 12.5625 5.5 12C5.5 11.4688 5.9375 11.0312 6.5 11.0312H11V6.53125C11 5.96875 11.4375 5.5 12 5.5C12.5312 5.5 13 5.96875 13 6.53125V11.0312H17.5C18.0312 11 18.5 11.4688 18.5 12Z"
              fill="#201B21"
            />
          </svg>
        </Button>
      )}
    </Outline>
  );
}
