import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import SingleProduct from "../Home/Shared/Products/SingleProduct";
import {
  StarBorderOutlined,
  StarHalf,
  StarHalfTwoTone,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const ProductDetailpage = () => {
  const [singleProduct, setSingleProduct] = useState([]);
  const [jewelery, setJewelary] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const url = `https://fakestoreapi.com/products/${id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setSingleProduct(data));
  }, [id]);
  useEffect(() => {
    const url = `https://fakestoreapi.com/products/category/${singleProduct.category}`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => setJewelary(json));
  }, [jewelery]);
  console.log(jewelery);
  return (
    <div className="w-full  py-8 flex-col gap-4 flex justify-center items-center h-fit">
      <Navbar></Navbar>
      <Container>
        <div className="w-72">
          <Image src={singleProduct.image} alt={singleProduct.name} />
        </div>
        <Content>
          <Title>{singleProduct.title}</Title>
          <Price>${singleProduct.price}</Price>
          <div className="flex text-yellow-500">
            <StarHalfTwoTone />
            <StarHalfTwoTone />
            <StarHalfTwoTone />
            <StarHalfTwoTone />
          </div>
          <Description>{singleProduct.description}</Description>
          <Link to={`/checkout/${id}`}>
            <Button>Confirm Checkout </Button>
          </Link>
        </Content>
      </Container>
      <h3 className="text-xl">Category</h3>
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 px-4">
        {jewelery.map((jewelery, indx) => (
          <SingleProduct product={jewelery} key={indx} />
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    padding: 80px 20px;
  }
`;

const Image = styled.img`
  width: 100%;

  object-fit: cover;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    flex-basis: 50%;

    margin-bottom: 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;

  @media screen and (min-width: 768px) {
    flex-basis: 50%;
    margin-left: 60px;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    text-align: left;
    font-size: 40px;
    margin-bottom: 40px;
  }
`;

const Price = styled.h2`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  color: #3bb77e;
  @media screen and (min-width: 768px) {
    text-align: left;
    font-size: 30px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  text-align: justify;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 60px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #3bb77e;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #3bb76f;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    padding: 15px 40px;
  }
`;
export default ProductDetailpage;
