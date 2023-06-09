import React, { useState } from "react";
import ImageSlider from "../components/toolbox/ImageSlider";
import ProductCard from "../components/product/ProductCard";
import ProductHeaderCard from "../components/product/ProductHeaderCard";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { isLoggedIn, role } = useSelector((store) => ({
    isLoggedIn: store.isLoggedIn,
    role: store.role,
  }));

  const [suggestionsIsEmpty, setSuggestionsIsEmpty] = useState(false);

  const images = [
    {
      id: "1",
      name: "first.png",
    },
    {
      id: "2",
      name: "second.png",
    },
    {
      id: "3",
      name: "third.png",
    },
  ];

  const onChangeSuggestions = (isEmpty) => {
    setSuggestionsIsEmpty(isEmpty);
  };

  return (
    <div className="container">
      <div className="row mt-3 w-75 mx-auto">
        <ImageSlider images={images} />
      </div>

      <div className="row">
        <ProductHeaderCard category="popular products" />
      </div>
      <div className="row">
        <ProductCard category="discover" />
      </div>

      {isLoggedIn && role === "user" && !suggestionsIsEmpty && (
        <>
          <div className="row">
            <ProductHeaderCard category="Recommended Products" />
          </div>
          <div className="row">
            <ProductCard
              category="suggestions"
              onChangeSuggestions={onChangeSuggestions}
            />
          </div>
        </>
      )}

      <div className="row">
        <ProductHeaderCard category="Clothing" generalId="3" subId="1" />
      </div>
      <div className="row">
        <ProductCard generalId="3" subId="1" />
      </div>

      <div className="row">
        <ProductHeaderCard category="Shoes & Accessories" generalId="2" subId="1" />
      </div>
      <div className="row">
        <ProductCard generalId="2" subId="1" />
      </div>

      <div className="row">
        <ProductHeaderCard category="Home & Furniture" generalId="4" subId="1" />
      </div>
      <div className="row">
        <ProductCard generalId="4" subId="1" />
      </div>

      <div className="row">
        <ProductHeaderCard category="Electronic" generalId="6" subId="1" />
      </div>
      <div className="row">
        <ProductCard generalId="6" subId="1" />
      </div>
    </div>
  );
};

export default HomePage;