import scss from "./Catalog.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import NavBar from "./navbar/NavBar";
import laptop from "@/assets/6ac63fa27eb76bb5491a83af9b39cf46.jpg";
import Image from "next/image";

const laptops = [
  {
    id: 1,
    name: "Apple MacBook Air M1",
    price: 90000, 
    sale: 10, 
    brand: "Apple",
    processor: "Apple M1",
    ram: "8 GB",
    storage: "256 GB SSD",
    screen: "13.3-inch Retina Display",
    gpu: "Apple 7-Core GPU",
    os: "macOS",
    battery: "Up to 18 hours",
    weight: "1.29 kg",
    image:
      "https://www.apple.com/v/macbook-air/m/images/overview/hero_endframe__c1j9jr9os7oy_large.jpg", // Фото Apple MacBook Air
    description:
      "The Apple MacBook Air with M1 chip offers incredible performance, efficiency, and battery life. Perfect for productivity and creativity.",
  },
  {
    id: 2,
    name: "Dell XPS 13 9310",
    price: 100000, 
    sale: 15, 
    brand: "Dell",
    processor: "Intel Core i7-1165G7",
    ram: "16 GB",
    storage: "512 GB SSD",
    screen: "13.4-inch FHD+ Touch Display",
    gpu: "Intel Iris Xe Graphics",
    os: "Windows 11",
    battery: "Up to 14 hours",
    weight: "1.2 kg",
    image:
      "https://i.dell.com/sites/csimages/Video_Imagery/all/xps-13-9310-laptop.jpg", // Фото Dell XPS 13
    description:
      "Dell XPS 13 combines sleek design, powerful specs, and a stunning display for a premium ultrabook experience.",
  },
  {
    id: 3,
    name: "Asus ROG Zephyrus G14",
    price: 130000, // Цена в рублях
    sale: 20, // Скидка 20%
    brand: "Asus",
    processor: "AMD Ryzen 9 5900HS",
    ram: "16 GB",
    storage: "1 TB SSD",
    screen: "14-inch WQHD 120Hz",
    gpu: "NVIDIA GeForce RTX 3060",
    os: "Windows 10",
    battery: "Up to 10 hours",
    weight: "1.7 kg",
    image: "https://rog.asus.com/media/1610243393002.png", // Фото Asus ROG Zephyrus G14
    description:
      "The Asus ROG Zephyrus G14 is a compact and powerful gaming laptop with exceptional performance and portability.",
  },
  {
    id: 4,
    name: "Lenovo ThinkPad X1 Carbon Gen 9",
    price: 115000, // Цена в рублях
    sale: 10, // Скидка 10%
    brand: "Lenovo",
    processor: "Intel Core i5-1135G7",
    ram: "8 GB",
    storage: "256 GB SSD",
    screen: "14-inch FHD+ Display",
    gpu: "Intel Iris Xe Graphics",
    os: "Windows 11",
    battery: "Up to 15 hours",
    weight: "1.13 kg",
    image:
      "https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-carbon-gen-9.jpg?context=bWFzdGVyfHJvb3R8NzU5NzF8aW1hZ2UvanBlZ3xydW9vfGg2Yy9oYTAvMTE4NzcwNzA5MzY3OC5qcGd8NzMwNjJlYzBkZmQ2YzQ2YjZlNWI2YmZkM2EwNmY1ZDZlMzNmZmM0ZmYzOTcxMjUzMThhMjExNjEwY2Q5ZDk5MTEzZTQ5ZWE4",
    description:
      "Lenovo ThinkPad X1 Carbon delivers exceptional business performance, reliability, and battery life for professionals.",
  },
  {
    id: 5,
    name: "HP Spectre x360 14",
    price: 120000, // Цена в рублях
    sale: 10, // Скидка 10%
    brand: "HP",
    processor: "Intel Core i7-1165G7",
    ram: "16 GB",
    storage: "1 TB SSD",
    screen: "13.5-inch WUXGA+ Touch Display",
    gpu: "Intel Iris Xe Graphics",
    os: "Windows 11",
    battery: "Up to 17 hours",
    weight: "1.34 kg",
    image:
      "https://www.hp.com/content/dam/hp/common/launch_campaign/2022/hp_spectre_x360_14_hero_1360.jpg",
    description:
      "The HP Spectre x360 is a versatile 2-in-1 laptop with premium design, performance, and a long-lasting battery.",
  },
];

const Catalog = () => {
  return (
    <div className={scss.Catalog}>
      <NavBar />
      <div className="container">
        <div className={scss.content}>
          <div className={scss.cards}>
            {laptops.map((item) => (
              <div className={scss.card} key={item.id}>
                <Image src={laptop} alt="photo" />
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <div className={scss.priceSale}>
                  <h2>{item.price - (item.price * item.sale) / 100}сом</h2>
                  <del>{item.price}с</del>
                </div>
                <div className={scss.btns}>
                  <div className={scss.btnLeft}>
                    <button>Подробнее</button>
                    <FaArrowRightLong className={scss.icon} />
                  </div>
                  <div className={scss.btnRight}>
                    <button>В карзину</button>
                    <FaArrowRightLong className={scss.icon} />
                  </div>
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
