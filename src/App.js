import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import TopBar from "../src/components/common/TopBar";
import Footer from "../src/components/common/Footer";
import MegaMenu from "../src/components/common/MegaMenu";
import CategoryDetailPage from "../src/pages/CategoryDetailPage";
import EditProductPage from "../src/pages/EditProductPage";
import UserSignupPage from "../src/pages/UserSignupPage";
import Chat from "./pages/MessagePage";
import NotFoundPage from "../src/pages/NotFoundPage";
import LoginPage from "../src/pages/LoginPage";
import CategorySearchPage from "../src/pages/CategorySearchPage";
import UserPage from "../src/pages/UserPage";

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
          <Route exact path="/" />
          {!isLoggedIn && <Route path="/login" component={LoginPage} />}
          {!isLoggedIn && <Route path="/signup" component={UserSignupPage} />}
          {!isLoggedIn && <Route path="/notFound" component={NotFoundPage} />}
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
          <Route 
            path="/messagepage" 
            component={Chat} 
           />
          {isLoggedIn && role === "user" && (
            <Route path="/myprofile" component={UserPage} />
          )}
          <Redirect to="/error" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
