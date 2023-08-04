"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";

const ProductImagesMain = styled.div`
  max-width: 546px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 28px;
`;
const PaginationRightLeft = styled.button`
  display: flex;
  max-width: 40px;
  max-height: 40px;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 8px;
  border-radius: 25px;
  fill: var(--white, #fff);
  filter: drop-shadow(
      0px 4.444444179534912px 66.66666412353516px rgba(0, 0, 0, 0.08)
    )
    drop-shadow(0px 4.444444179534912px 66.66666412353516px rgba(0, 0, 0, 0.08));
  cursor: pointer;
`;

const PaginationDots = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
type Images = string;

type Props = {
  src: Images[];
};

export default function ProductImages({ src }: Props) {
  const [pictureInView, setPictureInView] = useState<string>();
  const [pictureInViewIndex, setPictureInViewIndex] = useState<number>(0);

  useEffect(() => {
    if (src?.length >= 1) {
      setPictureInView(src[pictureInViewIndex]);
    }
  }, [src, pictureInViewIndex]);

  return (
    <ProductImagesMain>
      <Image
        alt="product image"
        src={pictureInView as any}
        width={546}
        height={375}
        style={{borderRadius: "20px"}}
      />

      <Pagination>
        <PaginationRightLeft
          onClick={() => {
            setPictureInViewIndex((prev) => prev - 1);
          }}
          disabled={pictureInViewIndex === 0 ? true : false}
        >
          {pictureInViewIndex === 0 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                opacity="0.3"
                d="M13.9922 18.9922C14.2734 18.9922 14.5234 18.8984 14.7109 18.7109C15.1172 18.3359 15.1172 17.6797 14.7109 17.3047L9.42969 11.9922L14.7109 6.71094C15.1172 6.33594 15.1172 5.67969 14.7109 5.30469C14.3359 4.89844 13.6797 4.89844 13.3047 5.30469L7.30469 11.3047C6.89844 11.6797 6.89844 12.3359 7.30469 12.7109L13.3047 18.7109C13.4922 18.8984 13.7422 18.9922 13.9922 18.9922Z"
                fill="#201B21"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M13.9922 18.9922C14.2734 18.9922 14.5234 18.8984 14.7109 18.7109C15.1172 18.3359 15.1172 17.6797 14.7109 17.3047L9.42969 11.9922L14.7109 6.71094C15.1172 6.33594 15.1172 5.67969 14.7109 5.30469C14.3359 4.89844 13.6797 4.89844 13.3047 5.30469L7.30469 11.3047C6.89844 11.6797 6.89844 12.3359 7.30469 12.7109L13.3047 18.7109C13.4922 18.8984 13.7422 18.9922 13.9922 18.9922Z"
                fill="#201B21"
              />
            </svg>
          )}
        </PaginationRightLeft>
        <PaginationDots>
          {src?.map((image, index) => {
            return (
              <>
                {index === pictureInViewIndex ? (
                  <div style={{ marginTop: "3.5px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <ellipse cx="6" cy="6" rx="6" ry="6" fill="#201B21" />
                    </svg>
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      setPictureInViewIndex(index);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                    >
                      <circle
                        opacity="0.2"
                        cx="4"
                        cy="4"
                        r="4"
                        fill="#201B21"
                      />
                    </svg>
                  </div>
                )}
              </>
            );
          })}
        </PaginationDots>
        <PaginationRightLeft
          onClick={() => {
            setPictureInViewIndex((prev) => prev + 1);
          }}
          disabled={pictureInViewIndex === (src?.length-1) ? true : false}
        >
          {pictureInViewIndex === (src?.length-1) ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                opacity="0.3"
                d="M10.0078 18.9922C9.72656 18.9922 9.47656 18.8984 9.28906 18.7109C8.88281 18.3359 8.88281 17.6797 9.28906 17.3047L14.5703 11.9922L9.28906 6.71094C8.88281 6.33594 8.88281 5.67969 9.28906 5.30469C9.66406 4.89844 10.3203 4.89844 10.6953 5.30469L16.6953 11.3047C17.1016 11.6797 17.1016 12.3359 16.6953 12.7109L10.6953 18.7109C10.5078 18.8984 10.2578 18.9922 10.0078 18.9922Z"
                fill="#201B21"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M10.0078 18.9922C9.72656 18.9922 9.47656 18.8984 9.28906 18.7109C8.88281 18.3359 8.88281 17.6797 9.28906 17.3047L14.5703 11.9922L9.28906 6.71094C8.88281 6.33594 8.88281 5.67969 9.28906 5.30469C9.66406 4.89844 10.3203 4.89844 10.6953 5.30469L16.6953 11.3047C17.1016 11.6797 17.1016 12.3359 16.6953 12.7109L10.6953 18.7109C10.5078 18.8984 10.2578 18.9922 10.0078 18.9922Z"
                fill="#201B21"
              />
            </svg>
          )}
        </PaginationRightLeft>
      </Pagination>
    </ProductImagesMain>
  );
}
