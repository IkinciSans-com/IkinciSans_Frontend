import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import TopBar from "../src/components/common/TopBar";
import Footer from "../src/components/common/Footer";
import MegaMenu from "../src/components/common/MegaMenu";
import CategoryDetailPage from "../src/pages/CategoryDetailPage";
import EditProductPage from "../src/pages/EditProductPage";
import UserSignupPage from "../src/pages/UserSignupPage";
import NotFoundPage from "../src/pages/NotFoundPage";
import LoginPage from "../src/pages/LoginPage";
import CategorySearchPage from "../src/pages/CategorySearchPage";
import UserPage from "../src/pages/UserPage";
import HomePage from "./pages/HomePage";
import EmailValidationPage from "./pages/EmailValidationPage";
import ProductDetailPage from "./pages/ProductDetailPage";

const App = () => {
  const { isLoggedIn, role } = useSelector((store) => ({
    isLoggedIn: store.isLoggedIn,
    role: store.role,
  }));

  return (
    <div>
      <Router>
        <TopBar />
        <MegaMenu />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          {!isLoggedIn && <Route path="/login" component={LoginPage} />}
          {!isLoggedIn && <Route path="/signup" component={UserSignupPage} />}
          {!isLoggedIn && <Route path="/notFound" component={NotFoundPage} />}
          <Route path="/email-validation" component={EmailValidationPage} />
          <Route path="/product-detail" component={ProductDetailPage} />
          <Route path="/myprofile" component={UserPage} />
          {/* {isLoggedIn && role === "user" && (
            <Route path="/myprofile" component={UserPage} />
          )} */}
          <Route
            path="/all-products/:categoryId/:subId"
            component={CategoryDetailPage}
          />
          <Route
            exact path="/all-products/:searchWord"
            component={CategorySearchPage}
          />
          {isLoggedIn && role === "admin" && (
            <Route exact path="/editProduct/:id" component={EditProductPage} />
          )}
           { <Redirect to="/error" />  }
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
