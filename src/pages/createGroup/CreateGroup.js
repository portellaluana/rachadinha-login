import backIcon from "../../assets/icons/previous-icon.png";
import addIcon from "../../assets/icons/add-icon.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import addIconDisabled from "../../assets/icons/add-icon-disabled.png";

export const CreateGroup = () => {
  const [gabinete, setGabinete] = useState("");

  const newInput = () => {
    return;
  };

  return (
    <div className="create-group-container">
      <div className="create-group-header">
        <Link to="/dashboard">
          <button>
            <img src={backIcon} alt="back-icon" />
            criando gabinete
          </button>
        </Link>
      </div>
      <div className="create-group-content">
        <input
          placeholder="digite o nome do gabinete"
          name="gabinete"
          type="text"
          required
          value={gabinete}
          onChange={(e) => setGabinete(e.target.value)}
        />
        {gabinete === "" ? (
          <button className="btn-add-disabled add-people">
            <img src={addIconDisabled} alt="add" />
            adicionar laranjas
          </button>
        ) : (
          <button className="btn-add add-people">
            <img src={addIcon} alt="add" onClick={newInput} />
            adicionar laranjas
          </button>
        )}
        <Link to='/dashboard'>
        <button className="btn-text btn-alone">não quero adicionar laranjas</button>
        </Link>
      </div>
     </div>
  );
};
