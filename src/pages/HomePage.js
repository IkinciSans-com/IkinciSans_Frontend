import React, { useState } from "react";
import ImageSlider from "../components/toolbox/ImageSlider";
import ProductCard from "../components/product/ProductCard";
import ProductHeaderCard from "../components/product/ProductHeaderCard";

const HomePage = () => {
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

  const isLoggedIn = true;
  const role = "user";

  return (
    <div className="container">
      <div className="row mt-3 w-75 mx-auto">
        <ImageSlider images={images} />
      </div>
      <div className="row">
        <ProductCard category="discover" />
      </div>

      {isLoggedIn && role === "user" && !suggestionsIsEmpty && (
        <>
          <div className="row">
            <ProductCard
              category="suggestions"
              onChangeSuggestions={onChangeSuggestions}
            />
          </div>
        </>
      )}

      <div className="row">
        <ProductHeaderCard category="Laptop" generalId="3" subId="1" />
      </div>
      <div className="row">
        <ProductCard generalId="3" subId="1" />
      </div>

      <div className="row">
        <ProductHeaderCard category="Mobile Phone" generalId="2" subId="1" />
      </div>
      <div className="row">
        <ProductCard generalId="2" subId="1" />
      </div>

      <div className="row">
        <ProductHeaderCard category="Television" generalId="4" subId="1" />
      </div>
      <div className="row">
        <ProductCard generalId="4" subId="1" />
      </div>

      <div className="row">
        <ProductHeaderCard category="Photo & Camera" generalId="6" subId="1" />
      </div>
      <div className="row">
        <ProductCard generalId="6" subId="1" />
      </div>
    </div>
  );
};

export default HomePage;