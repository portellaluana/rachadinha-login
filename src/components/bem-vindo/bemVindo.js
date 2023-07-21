import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import IconLogo from "../../assets/icons/icon-logo.svg";
import { Link } from "react-router-dom";
import { BackgroundLogin } from "../background/BackgroundLogin";

export const WelcomeScreen = () => {
  const { modalVisible, setModalVisible } = useContext(AppContext);

  const handleClick = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <div className="login-container">

      <BackgroundLogin />
      <div className="welcome-container">
        <div className="welcome-content">
          <div className="content-info">
            <img src={IconLogo} alt="ícone da logo" className="welcome-icon" />
            <h4>Olá</h4>
            <p>seja muito bem-vindo</p>
            <Link to="/login">
              <button className="btn-primary" onClick={handleClick}>
                fazer login
              </button>
              <br />
            </Link>
            <Link to="/cadastro" onClick={handleClick}>
            <p>
              ainda não tem conta?{" "}
              <span className="btn-text btn-register">cadastre-se</span>
            </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
