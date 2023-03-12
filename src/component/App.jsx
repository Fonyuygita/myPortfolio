import React, {useState} from 'react'
import About from './about/About';



import Intro from './intro/Intro';
import ProductList from './productLlist/ProductList';
import Project from './project/Project';




const App = () => {


  return (
  <div className="app">
  <Intro/>
  <About/>
  <ProductList/>

  </div>
  )
}

export default App