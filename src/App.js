import React, { useState } from "react";
import "./styles.css";

const flagDict = {
  "🇮🇳": "India",
  "🇯🇵": "Japan",
  "🇮🇱": "Israel",
  "🇦🇫": "Afghanistan",
  "🇩🇪": "Germany",
  "🇺🇸": "USA",
  "🇫🇷": "France",
  "🇨🇭": "Switzerland",
  "🇵🇰": "Pakistan",
  "🇧🇪": "Belgium",
  "🇲🇽": "Mexico",
  "🇧🇷": "Brazil",
  "🇨🇳": "China",
  "🇳🇵": "Nepal",
  "🇧🇩": "Bangladesh"
};

const flagList = Object.keys(flagDict);

export default function App() {
  var [countryName, setCountryName] = useState("");
  var [selectedFlag, setSelectedFlag] = useState("");
  function inputHandler(event) {
    if (flagDict[event.target.value] === undefined) {
      setCountryName("Not found in database");
      setSelectedFlag("");
    } else {
      setCountryName(flagDict[event.target.value]);
      setSelectedFlag(event.target.value + " : ");
    }
  }

  function clickHandler(event) {
    setCountryName(flagDict[event.target.innerText]);
    setSelectedFlag(event.target.innerText + " : ");
  }

  return (
    <div className="App">
      <h1>Know the Country</h1>
      <input onChange={inputHandler}></input>
      <h3>Click on below flags to know its Country</h3>
      {flagList.map(function (item) {
        return (
          <ul
            onClick={clickHandler}
            style={{ display: "inline", fontSize: "2em" }}
          >
            {item}
          </ul>
        );
      })}
      <div style={{ padding: "1em", fontSize: "2em" }}>
        {selectedFlag} {countryName}
      </div>
    </div>
  );
}
