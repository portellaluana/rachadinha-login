import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import OpenEyes from "../../assets/open-eyes-password.png";
import ClosedEyes from "../../assets/closed-eyes-password.png";

export const BackgroundLogin = () => {
  const { inputType } = useContext(AppContext);

  return (
    <div className="background-container">
      <div className="background-content">
      <div className="background-content-img">

        {inputType === "password" ? (
          <img src={OpenEyes} alt="" className="background-img" />
        ) : (
          <img src={ClosedEyes} alt="" className="background-img" />
        )}
      </div>
    </div>
    </div>
  );
};
