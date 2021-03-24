import React, { useState } from "react";
import "../assets/styles/home.css";
import Menu from "../containers/Menu";

const App = () => {
  const [mode, setMode] = useState("admin");

  const handleChange = (e) => {
    const { value } = e.target;
    setMode(value);
  };
  return (
    <div className='home'>
      <div className='top-section'>
        <h4>Logo</h4>
        <div className='buttons'>
          <input
            id='appmode'
            value='app'
            name='mode'
            type='radio'
            onChange={handleChange}
          />
          App Mode
          <input
            id='appmode'
            value='admin'
            name='mode'
            type='radio'
            onChange={handleChange}
          />
          Admin Mode
        </div>
      </div>
      <div
        className='content-section'
        className={`${
          mode == "app" ? "app-content-section" : "content-section"
        }`}
      >
        <Menu appMode={mode} />
      </div>
    </div>
  );
};

export default App;
