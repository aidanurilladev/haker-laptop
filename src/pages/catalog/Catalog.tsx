import React from "react";
import scss from "./Catalog.module.scss";
import Image from "next/image";

const laptops = [
  {
    id: 1,
    name: "Apple MacBook Air M1",
    price: 999,
    brand: "Apple",
    processor: "Apple M1",
    ram: "8 GB",
    storage: "256 GB SSD",
    screen: "13.3-inch Retina Display",
    gpu: "Apple 7-Core GPU",
    os: "macOS",
    battery: "Up to 18 hours",
    weight: "1.29 kg",
    image: "https://m.media-amazon.com/images/I/81NM7eS7peL.jpg",
    description:
      "The Apple MacBook Air with M1 chip offers incredible performance, efficiency, and battery life. Perfect for productivity and creativity.",
  },
  {
    id: 2,
    name: "Dell XPS 13 9310",
    price: 1099,
    brand: "Dell",
    processor: "Intel Core i7-1165G7",
    ram: "16 GB",
    storage: "512 GB SSD",
    screen: "13.4-inch FHD+ Touch Display",
    gpu: "Intel Iris Xe Graphics",
    os: "Windows 11",
    battery: "Up to 14 hours",
    weight: "1.2 kg",
    image: "https://m.media-amazon.com/images/I/81NM7eS7peL.jpg",
    description:
      "Dell XPS 13 combines sleek design, powerful specs, and a stunning display for a premium ultrabook experience.",
  },
  {
    id: 3,
    name: "Asus ROG Zephyrus G14",
    price: 1499,
    brand: "Asus",
    processor: "AMD Ryzen 9 5900HS",
    ram: "16 GB",
    storage: "1 TB SSD",
    screen: "14-inch WQHD 120Hz",
    gpu: "NVIDIA GeForce RTX 3060",
    os: "Windows 10",
    battery: "Up to 10 hours",
    weight: "1.7 kg",
    image: "https://m.media-amazon.com/images/I/81NM7eS7peL.jpg",
    description:
      "The Asus ROG Zephyrus G14 is a compact and powerful gaming laptop with exceptional performance and portability.",
  },
  {
    id: 4,
    name: "Lenovo ThinkPad X1 Carbon Gen 9",
    price: 1299,
    brand: "Lenovo",
    processor: "Intel Core i5-1135G7",
    ram: "8 GB",
    storage: "256 GB SSD",
    screen: "14-inch FHD+ Display",
    gpu: "Intel Iris Xe Graphics",
    os: "Windows 11",
    battery: "Up to 15 hours",
    weight: "1.13 kg",
    image: "https://m.media-amazon.com/images/I/81NM7eS7peL.jpg",
    description:
      "Lenovo ThinkPad X1 Carbon delivers exceptional business performance, reliability, and battery life for professionals.",
  },
  {
    id: 5,
    name: "HP Spectre x360 14",
    price: 1399,
    brand: "HP",
    processor: "Intel Core i7-1165G7",
    ram: "16 GB",
    storage: "1 TB SSD",
    screen: "13.5-inch WUXGA+ Touch Display",
    gpu: "Intel Iris Xe Graphics",
    os: "Windows 11",
    battery: "Up to 17 hours",
    weight: "1.34 kg",
    image: "https://m.media-amazon.com/images/I/81NM7eS7peL.jpg",
    description:
      "The HP Spectre x360 is a versatile 2-in-1 laptop with premium design, performance, and a long-lasting battery.",
  },
];

const Catalog = () => {
  return (
    <div className={scss.Catalog}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.cards}>
            {laptops.map((item) => (
              <div className={scss.card} key={item.id}>
                <img src={item.image} alt="photo" />
                <h2>{item.name}</h2>
                <h3>{item.description}</h3>
                <div className={scss.btns}>
                  <button>Подробнее</button>
                  <button>В карзину</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
