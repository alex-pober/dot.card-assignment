
import { NextResponse } from "next/server";


export async function GET(){
  const mockData = [
    {
      id: 1,
      brand: "Off-White",
      name: 'Out Of Office "Ooo" sneakers',
      description: "Energize your look with a fresh take on heritage adidas style. The adidas Daily 3.0 Shoes cut a classic profile with a modern suede upper. Your walk across campus or commute across town has never looked or felt this good.",
      descBullet: ["Regular fit", "Lace closure", "Rubber outsole with vulcanized look", "Imported"],
      price: "775",
      images: [
        "/images/product1-1.png",
        "/images/product1-2.png",
        "/images/product1-3.png",
        "/images/product1-4.png"
      ],
      imagesSmall: [
        "/images/product1-small.png"
      ]
    },
    {
      id: 2,
      brand: "Nike",
      name: "Nike Gamma Force",
      description: "Layers upon layers of dimensional style—that's a force to be reckoned with. Offering both comfort and versatility, these kicks are rooted in heritage basketball culture. The collar materials pay homage to vintage sport while the subtle platform elevates your look, literally. The Gamma Force is forging its own legacy: court style that can be worn all day, wherever you go.",
      descBullet: ["Regular fit", "Lace closure", "Rubber outsole with vulcanized look", "Imported"],
      price: "200",
      images: [
        "/images/product2-1.png",
        "/images/product2-2.png",
        "/images/product2-3.png",
        "/images/product2-4.png"
      ],
      imagesSmall: [
        "/images/product2-small.png"
      ]
    },
    {
      id: 3,
      brand: "Nike",
      name: "Cosmic Unity 3",
      description: "Better for your game, designed with sustainability in mind—2 things you care about—the Cosmic Unity 3 has a secure, lightweight design for a low-to-the-ground feel. It gives you cloud-like cushioning for explosive speed and quick changes in direction, the difference-makers in a game that’s becoming more extraterrestrial.",
      descBullet: ["Regular fit", "Lace closure", "Rubber outsole with vulcanized look", "Imported"],
      price: "160",
      images: [
        "/images/product3-1.png",
        "/images/product3-2.png",
        "/images/product3-3.png",
        "/images/product3-4.png"
      ],
      imagesSmall: [
        "/images/product3-small.png"
      ]
    },
    {
      id: 4,
      brand: "adidas",
      name: "DAILY 3.0 SHOES",
      description: "A fresh take on a classic, these adidas shoes blend a heritage feel with modern materials and design. Your walk across campus has never looked or felt this good.",
      descBullet: ["Regular fit", "Lace closure", "Rubber outsole with vulcanized look", "Imported"],
      price: "98.99",
      images: [
        "/images/product4-1.png",
        "/images/product4-2.png",
        "/images/product4-3.png",
        "/images/product4-4.png"
      ],
      imagesSmall: [
        "/images/product4-small.png"
      ]
    },
  ];
  return NextResponse.json(mockData)
}
