import React from 'react'
import "./Product.css"

const Project = ({img, link}) => {
  return (
    <div className="p">
    <div className="p-browser">
    <div className="p-circle"></div>
    <div className="p-circle"></div>
    <div className="p-circle"></div>

    </div>

 {/*our project image goes here*/}

 <a href={link} target="_blank">
 <img src={img} alt="" className='p-img' />
 </a>
    
    </div>
  )
}

export default Project