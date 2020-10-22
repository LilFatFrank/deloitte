import React, { useState } from "react";
import "./Input.css";
import "../App.css";

const Input = (props) => {
  const [showBlock, setShowBlock] = useState(false);
  const data = ["deloitte", "accenture", "interview"];

  const changeBlock = () => {
    setShowBlock(true);
  };

  return (
    <div className={"margin-top15"}>
      <span className={"search-icon"}>
        <i className={"fa fa-search"} />
      </span>
      <input type="text" className={"input-area"} onClick={changeBlock} />
      {showBlock ? (
        <div className={"block"}>
          {data.map((res, index) => {
            return (
              <div key={index} className={"result-label"}>
                {res}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Input;
