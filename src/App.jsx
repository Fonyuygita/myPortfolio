import React, {useContext, useState} from 'react'
import { DarkModeProvider, ThemeContext } from './context';
// import { ThemeProvider } from '../context';
import About from './component/about/About';
import Contact from './component/contact/Contact';
import "./darkMode.css"
import Intro from './component/intro/Intro';
import ProductList from './component/productLlist/ProductList';
import Project from './component/project/Project';

import Toggle from './component/toggle/Toggle';








const App = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  console.log(darkMode);


  return (

  <div style={{
    backgroundColor: darkMode ? "#222" : "white",
    color: darkMode && "white",
  }} >
 <Toggle/>
  <Intro/>
  <About/>
  <ProductList/>
  <Contact/>

  </div>
  )
}

export default App