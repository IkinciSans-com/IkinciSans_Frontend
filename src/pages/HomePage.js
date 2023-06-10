import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ImageSlider from "../components/toolbox/ImageSlider";
import ProductCard from "../components/product/ProductCard";
import ProductHeaderCard from "../components/product/ProductHeaderCard";
import { useSelector } from "react-redux";
import { Row, Col, Button } from "react-bootstrap";

const HomePage = () => {
  const history = useHistory();

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

  const buttonStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
  };

  const handleChatButtonClick = () => {
    history.push("/chat");
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

      <Row>
        <Col
          md={6}
          className="d-flex flex-direction-column align-items-center justify-content-center"
        >
          <div style={buttonStyle}>
            <Button variant="success" onClick={handleChatButtonClick}>
              Mesajlaşma <i className="fas fa-comments home-message-icon"></i>
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
