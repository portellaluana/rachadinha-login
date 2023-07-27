import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import googleIcon from "../../assets/icons/google-icon.png";
import rachadinha from "../../assets/rachadinha-logo.svg";
import hidePassword from "../../assets/icons/hide-grey.png";
import showPassword from "../../assets/icons/show-grey.png";
import { Link } from "react-router-dom";

export const ModalLogin = () => {
  const [hide, setHide] = useState(false);

  const { modalVisible, setName, inputType, setInputType } =
    useContext(AppContext);

  const onHide = () => {
    setHide(!hide);

    if (inputType === "password") {
      setInputType("text");
    } else setInputType("password");
  };

// useEffect(() => {
// setName(JSON.parse(localStorage.getItem("userName")) || "");
// },[])

  return (
<div
        className={`modal-login ${
          modalVisible
            ? "modal-login-container-active modal-login-container"
            : ""
        }`}
      >
        <div className="modal-login-content">
          <input
            name="email"
            type="email"
            placeholder="email"
            required
          />
          <input
            name="password"
            type={inputType}
            placeholder="senha"
            className="input-senha"
            required
          />
          {hide ? (
            <img
              src={showPassword}
              alt=""
              className="hide-password"
              onClick={onHide}
            />
          ) : (
            <img
              src={hidePassword}
              alt=""
              className="hide-password"
              onClick={onHide}
            />
          )}{" "}
          <button className="btn-forgot-password">esqueci a senha</button>
          {/* {user.email && user.password ? ( */}
          <Link to='/dashboard'>
            <button className="btn-primary">entrar</button>
            </Link>
          {/* ) : ( */}
            {/* <button className="btn-disabled">entrar</button> */}
          {/* )} */}
          <button className="btn-text btn-google">
            <img src={googleIcon} alt="google-icon" />
            entrar com Google
          </button>
        </div>
        <img
          src={rachadinha}
          className="marca-rachadinha"
          alt="marca-rachadinha"
        />
      </div>
  );
};
