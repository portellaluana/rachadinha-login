import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import hidePassword from "../../assets/icons/hide-grey.png";
import showPassword from "../../assets/icons/show-grey.png";
import rachadinha from "../../assets/rachadinha-logo.svg";

export const ModalNewUser = () => {
  const [hide, setHide] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { modalVisible, inputType, setInputType, name, setName } =
    useContext(AppContext);

  const onHide = () => {
    setHide(!hide);
    if (inputType === "password") {
      setInputType("text");
    } else setInputType("password");
  };
  const handleName = () => {
    localStorage.setItem('userName', JSON.stringify(name));
  };

  const HandleEmail = (e) => {
    setEmail(e.target.value);
  };

  const HandlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div
      className={`modal-new-user ${
        modalVisible
          ? "modal-new-user-container-active modal-new-user-container"
          : ""
      }`}
    >
      <div className="modal-new-user-content">
        <input
          name="name"
          type="text"
          placeholder="nome"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="email"
          type="email"
          placeholder="email"
          required
          onChange={HandleEmail}
        />
        <input
          name="password"
          type={inputType}
          placeholder="senha"
          className="input-senha"
          required
          onChange={HandlePassword}
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
        <div className="new-user-btn-container">
          {" "}
          {name && email && password !== "" ? (
            <Link to="/dashboard">
              <button
                className="btn-primary-mini"
                onClick={() => handleName("userName", name)}
              >
                cadastrar
              </button>
            </Link>
          ) : (
            <button className="btn-disabled-mini" type="submit">
              cadastrar
            </button>
          )}
          <button className="btn-text-mini">voltar</button>
        </div>
      </div>
      <img
        src={rachadinha}
        className="marca-rachadinha"
        alt="marca-rachadinha"
      />
    </div>
  );
};
