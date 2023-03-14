import React, {useContext, useState} from 'react'
import { DarkModeProvider, ThemeContext } from '../context';
// import { ThemeProvider } from '../context';
import About from './about/About';
import Contact from './contact/Contact';
import "../darkMode.css"



import Intro from './intro/Intro';
import ProductList from './productLlist/ProductList';
import Project from './project/Project';
import Toggle from './toggle/Toggle';




const App = () => {

  const {dark}=useContext(ThemeContext);


  return (

  <div className={dark ? "darkMode" : ""} >
  <Toggle/>
  <Intro/>
  <About/>
  <ProductList/>
  <Contact/>

  </div>
  )
}

export default App