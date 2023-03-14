import React, { useContext } from 'react'
import { BsFillSunFill } from 'react-icons/bs';
import { CiDark } from 'react-icons/ci';
import { ThemeContext } from '../../context';

import "./Toggle.css";

const Toggle = () => {
const {dark, toggle}=useContext(ThemeContext);



  return (
    <div className="t">
    
    <BsFillSunFill size={300}  color="#fff" />
    <CiDark size={300}  />
    
   
    <div className="button" style={{right: dark && "34px"}} onClick={toggle}></div>
    



    
    </div>
  )
}

export default Toggle