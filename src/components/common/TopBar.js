import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../../redux/authActions";
import LanguageSelector from "./LanguageSelector";
import alertify from "alertifyjs";
import CartItem from "../order/CartItem";

const TopBar = (props) => {
  const { t } = useTranslation();
  let history = useHistory();

  const { isLoggedIn, name, surname, role } = useSelector((store) => {
    return {
      isLoggedIn: store.isLoggedIn,
      name: store.name,
      surname: store.surname,
      role: store.role,
    };
  });

  const menuArea = useRef(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [searchWord, setSearchWord] = useState();

  useEffect(() => {
    document.addEventListener("click", menuClickTracker);

    return () => {
      document.removeEventListener("click", menuClickTracker);
    };
  }, [isLoggedIn]);

  const menuClickTracker = (event) => {
    if (menuArea.current === null || !menuArea.current.contains(event.target)) {
      setMenuVisible(false);
    }
  };

  const dispatch = useDispatch();

  const onLogoutSuccess = () => {
    dispatch(logoutSuccess());
    history.push("/");
  };

  useEffect(() => {
    if (role === "admin") {
      setUserRole("/admin");
    } else if (role === "user") {
      setUserRole("/myprofile");
    }
  }, [role]);

  let links = (
    <ul className="navbar-nav ml-auto">
      <li>
        <Link className="btn btn-outline-primary mr-1" to="/login">
          {t("Login")}
        </Link>
      </li>
      <li>
        <Link className="btn btn-outline-primary" to="/signup">
          {t("Sign Up")}
        </Link>
      </li>
    </ul>
  );

  const editMenuVisible = () => {
    if (menuVisible) {
      setMenuVisible(false);
    } else {
      setMenuVisible(true);
    }
  };

  if (isLoggedIn) {
    let dropDownClass = "dropdown-menu p-0 shadow";

    if (menuVisible) {
      dropDownClass += " show";
    }

    links = (
      <ul className="navbar-nav ml-auto" ref={menuArea}>
        {role === "user" && (
          <div className="container mr-5 border-right border-solid">
            <CartItem />
          </div>
        )}
        <li className="nav-item dropdown">
          <div
            className="d-flex"
            style={{ cursor: "pointer" }}
            onClick={editMenuVisible}
          >
            <span className="nav-link dropdown-toggle btn-outline-primary btn">
              {name} {surname}
            </span>
          </div>
          <div className={dropDownClass}>
            <Link
              className="dropdown-item d-flex p-2"
              to={userRole}
              onClick={() => setMenuVisible(false)}
            >
              <span className="material-icons text-info mr-2">person</span>
              {t("My Profile")}
            </Link>
            <span
              className="dropdown-item d-flex p-2"
              onClick={onLogoutSuccess}
              style={{ cursor: "pointer" }}
            >
              <span className="material-icons text-danger mr-2">
                power_settings_new
              </span>
              {t("Logout")}
            </span>
          </div>
        </li>
      </ul>
    );
  }

  return (
    <div className="shadow-sm bg-light">
      <nav className="container navbar navbar-white navbar-expand">
        <Link className="navbar-brand" to="/">
          <img src={logo} width="120" alt="Tradeify Logo" />
        </Link>
        <form className="form-inline ml-auto">
          <input
            className="form-control mr-sm-2"
            placeholder={t("Search")}
            onChange={(event) => {
              event.preventDefault();
              setSearchWord(event.target.value);
            }}
          />
          <button
            className="btn btn-outline-danger"
            onClick={(event) => {
              event.preventDefault();
              if (searchWord.length >= 3) {
                history.push(
                  "/all-products/" + searchWord.split(" ").join("|")
                );
              } else {
                alertify.error(t("You must enter at least 3 characters"));
              }
            }}
          >
            {t("Search")}
          </button>
        </form>
        <div className="form-inline">
          <LanguageSelector />
        </div>
        {links}
      </nav>
    </div>
  );
};

export default TopBar;
