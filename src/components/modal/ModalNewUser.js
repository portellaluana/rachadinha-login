import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import hidePassword from "../../assets/icons/hide-grey.png";
import showPassword from "../../assets/icons/show-grey.png";
import rachadinha from "../../assets/rachadinha-logo.svg";

export const ModalNewUser = () => {
  const [hide, setHide] = useState(false);

  const { modalVisible, user, setUser, inputType, setInputType } =
    useContext(AppContext);

  const onHide = () => {
    setHide(!hide);
    if (inputType === "password") {
      setInputType("text");
    } else setInputType("password");
  };

  const handleUser = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
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
          value={user.name}
          onChange={handleUser}
          type="text"
          placeholder="nome"
          required
        />
        <input
          name="email"
          value={user.email}
          onChange={handleUser}
          type="email"
          placeholder="email"
          required
        />
        <input
          name="password"
          value={user.password}
          onChange={handleUser}
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
        <div className="new-user-btn-container">
          {" "}
          {user.name && user.email && user.password ? (
            <button className="btn-primary-mini">entrar</button>
          ) : (
            <button className="btn-disabled-mini">entrar</button>
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
