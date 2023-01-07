import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="grid md:grid-cols-2 place-items-center place-content-center grid-cols-1 lg:grid-cols-3 gap-4 p-8">
      <Card
        link={
          "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/banner-1.png"
        }
        name={"Everyday Fresh & Clean with Our Products"}
      ></Card>
      <Card
        link={
          "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/banner-2.png"
        }
        name={"Make your Breakfast Healthy and Easy"}
      ></Card>
      <Card
        link={
          "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/banner-3.png"
        }
        name={"The Best Organic Products Online"}
      ></Card>
    </div>
  );
};

export default Cards;
