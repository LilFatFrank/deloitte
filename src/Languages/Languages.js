import React from 'react';
import "../App.css";
import "./Languages.css";

const Languages = (props) => {

    const languageArray = ["हिन्दी", "বাংলা", "తెలుగు", "मराठी", "தமிழ்", "ગુજરાતી", "ಕನ್ನಡ", "മലയാളം", "ਪੰਜਾਬੀ"];

    return (
        <div className={"margin-top15"}>Google offered in:
            {languageArray.map((language, index) => {
                return <a key={index} className={"margin-5"} href="javascript:void(0)" style={{ textDecoration: "none" }}>{language}</a>
            })}
        </div>
    )
}

export default Languages;
