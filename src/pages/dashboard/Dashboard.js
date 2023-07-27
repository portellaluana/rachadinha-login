// import { useContext, useEffect } from "react";
// import { AppContext } from "../../context/AppContext";
import rachadinhaLight from "../../assets/rachadinha-logo-light.svg";
import addIcon from "../../assets/icons/add-icon.png";
import { Link } from "react-router-dom";

export const Dashboard = () => {

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <img
          src={rachadinhaLight}
          className="marca-rachadinha-dashboard"
          alt="marca-rachadinha"
        />
      </div>
      <div className="dashboard-content">
        <h5>sem gabinete, sem laranjas, sem lucro</h5>
        <p>crie um gabinete para começar a lucrar</p>
        <Link to="/create-group">
        <button className="btn-add">
          <img src={addIcon} alt="add" />
          criar gabinete
        </button>
        </Link>
      </div>
    </div>
  );
};
