import React, { useEffect, useState } from "react";
import { getUser } from "../api/apiCalls";
import ProfileCard from "../components/userPage/ProfileCard";
import { useTranslation } from "react-i18next";
import { useApiProgress } from "../shared/ApiProgress";
import { useSelector } from "react-redux";
import Spinner from "../components/toolbox/Spinner";
import UserMenu from "../components/toolbox/ComponentList";
import UserOrders from "../components/userPage/UserOrders";
import UserAddress from "../components/userPage/UserAddress";
import { getUserRatingAverage } from "../api/apiCalls";
import ReactStars from "react-rating-stars-component";
import "../components/userPage/UserPage.css";

const UserPage = () => {
  const { email } = useSelector((store) => ({
    email: store.email,
  }));

  const [user, setUser] = useState({
    name: "John Doe",
    age: 25,
    averageRating: 3.5, // Ortalama örnek oy değeri
    comment: "", // New comment field
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
    {
      id: "4",
      categoryName: "Average Rating",
    },
  ];

  const { t } = useTranslation();

  // const pendingApiCall = useApiProgress("get", "/api/1.0/users/" + email, true);

  // useEffect(() => {
  //   setNotFound(false);
  // }, [user]);

  // useEffect(() => {
  //   const loadUser = async () => {
  //     try {
  //       const response = await getUser(email);
  //       setUser(response.data);
  //     } catch (error) {
  //       setNotFound(true);
  //     }
  //   };

  //   loadUser();
  // }, [email]);

  const onChangeCategory = (category) => {
    setCurrentCategory(category.categoryName);
  };

  // useEffect(() => {
  //   const fetchUserRatingAverage = async () => {
  //     try {
  //       const response = await getUserRatingAverage(userId); // Gerçek ortalama oy değerini almak için uygun bir API çağrısı yapmanız gerekebilir
  //       const averageRating = response.data.averageRating;
  //       setUser((prevUser) => ({ ...prevUser, averageRating }));
  //     } catch (error) {
  //       // Hata yönetimi
  //     }
  //   };
  
  //   fetchUserRatingAverage();
  // }, []);
  
  const returnActiveComponent = () => {
    if (currentCategory === "My User Information") {
      return <ProfileCard user={user} />;
    } else if (currentCategory === "My Products") {
      return <UserOrders />;
    } else if (currentCategory === "My Address Information") {
      return <UserAddress user={user} editing={true} />;
    } else if (currentCategory === "Average Rating") {
      return (
        <div className="average-rating-container">
          <div className="average-rating-value">
            <ReactStars
              count={5}
              size={28}
              activeColor="#ffd700"
              half={true} // Enable half-star ratings
              isHalf={true}
              value={user.averageRating}
              // onChange={fetchAverageRating()}
            />
          </div>
          <div className="current-ratings-container">
          <h4>{t("Votes")}</h4>
            <ul className="rating-list">
              <li className="rating-item">
                <span className="rating-label">{t("Vote")} 1:</span>
                <ReactStars count={5} size={20} activeColor="#ffd700" value={2.5} edit={false} half={true} isHalf={true} />
                <div className="comment-section">
                  <p className="comment">{t("It was a very worn product.")}</p>  {/* backendten commenti çek: user.comment */}
                </div>
              </li>
              <li className="rating-item">
                <span className="rating-label">{t("Vote")} 2:</span>
                <ReactStars count={5} size={20} activeColor="#ffd700" value={3} edit={false} half={true} isHalf={true} />
              </li>
              <li className="rating-item">
                <span className="rating-label">{t("Vote")} 3:</span>
                <ReactStars count={5} size={20} activeColor="#ffd700" value={4.2} edit={false} half={true} isHalf={true} />
                <div className="comment-section">
                  <p className="comment">{t("The swap was successful.")}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      );
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

  // if (pendingApiCall || user.email !== email) {
  //   return <Spinner />;
  // }

  return (
    <div className="container mt-5 w-100">
      <div className="row">
        <div className="col-3">
          <UserMenu
            categories={categories}
            currentCategory={currentCategory}
            onClickCategory={(category) => {
//               // if (category.categoryName === "Average Rating") {
//               //   fetchAverageRating(userId); // userId, kullanıcının kimliğini temsil eden bir değer olmalı
//               // }
              onChangeCategory(category);
             }}
          />
        </div>
        <div className="col-9">{returnActiveComponent()}</div>
      </div>
    </div>
  );
};

export default UserPage;
