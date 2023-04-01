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
          {!isLoggedIn && <Route path="/signup" component={UserSignupPage} />}
          {!isLoggedIn && <Route path="/notFound" component={NotFoundPage} />}
          <Route
            path="/all-products/:categoryId/:subId"
            component={CategoryDetailPage}
          />
          {isLoggedIn && role === "admin" && (
            <Route exact path="/editProduct/:id" component={EditProductPage} />
          )}
          
          <Redirect to="/error" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
