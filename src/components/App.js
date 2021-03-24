import React, { useState } from "react";
import "../assets/styles/home.css";

const App = () => {
  return (
    <div className='home'>
      <div className='top-section'>
        <h4>Logo</h4>
        <div className='buttons'>
          <input type='radio' value='Male' name='gender' /> App Mode
          <input type='radio' value='Female' name='gender' /> Admin Mode
        </div>
      </div>
      <div className='content-section'>
        {" "}
        <h4>Logo</h4>
        <h4>buttons</h4> <h4>Logo</h4>
        <h4>buttons</h4> <h4>Logo</h4>
        <h4>buttons</h4> <h4>Logo</h4>
        <h4>buttons</h4>
      </div>
    </div>
  );
};

export default App;
