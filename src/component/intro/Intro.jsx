import React from "react";
import "./intro.css";
import me from "../../asset/traf.png"
import svg1 from "../../asset/toggle-on-svgrepo-com.svg";
import svg2 from "../../asset/icons8-mouse-scrolling-50.png";



const Intro = () => {
  return (
    <div className="i">
      <div className="iLeft">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Fonyuy Gita</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">FrontEnd Developer</div>
              <div className="i-title-item">Backend Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
            </div>
          </div>
          <p className="i-desc">
            I design and develope services for customers of all sizes
            specializing in creating stylish, modern websites, web services and
            online stores
          </p>
        </div>
        <img src={svg2} alt=""  className='i-scroll' color="white"/>
      </div>
      <div className="iRight">
        <div className="i-bg"></div>
        <img src={me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
