import React, { useState } from "react";
import ProfileCard from "../components/userPage/ProfileCard";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Spinner from "../components/toolbox/Spinner";
import UserMenu from "../components/toolbox/ComponentList";
import UserOrders from "../components/userPage/UserOrders";
import UserAddress from "../components/userPage/UserAddress";

const UserPage = () => {
  const { email } = useSelector((store) => ({
    email: store.email,
  }));

  const [user, setUser] = useState({
    // Örnek bir kullanıcı verisi
    name: "John Doe",
    age: 25,
    // ... diğer özellikler
  });

  const [notFound, setNotFound] = useState(false);

  const [currentCategory, setCurrentCategory] = useState("My User Information");
  const categories = [
    {
      id: "1",
      categoryName: "My User Information",
    },
    {
      id: "2",
      categoryName: "My Products",
    },
    {
      id: "3",
      categoryName: "My Address Information",
    },
    
  ];

  const { t } = useTranslation();

  const onChangeCategory = (category) => {
    setCurrentCategory(category.categoryName);
  };

  const returnActiveComponent = () => {
    if (currentCategory === "My User Information") {
      return <ProfileCard user={user} />;
    } else if (currentCategory === "My Products") {
      return <UserOrders />;
    } else if (currentCategory === "My Address Information") {
      return <UserAddress user={user} editing={true} />;
    }
  };

  if (notFound) {
    return (
      <div className="container mt-5 mb-5">
        <div className="alert alert-danger text-center">
          <div>
            <span className="material-icons" style={{ fontSize: "48px" }}>
              error
            </span>
          </div>
          {t("User Not Found!")}
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5 w-100">
      <div className="row">
        <div className="col-3">
          <UserMenu
            categories={categories}
            currentCategory={currentCategory}
            onClickCategory={onChangeCategory}
          />
        </div>
        <div className="col-9">{returnActiveComponent()}</div>
      </div>
    </div>
  );
};

export default UserPage;
