import React from 'react'
import Project from '../project/Project'
import "./ProductList.css"
// import {data} from "../../data.js"
import socials from "../../asset/social.png"
import dashboard from "../../asset/dashboard.png"

export const data=[

    {
        id:1,
        img:socials,
        link:""
    },

    {
        id:2,
        img:"https://mir-s3-cdn-cf.behance.net/projects/max_808/f7abbb103982779.Y3JvcCwzMDAwLDIzNDYsMCwyOQ.png",
        link:""
    },

    {
        id:3,
        img:"https://mir-s3-cdn-cf.behance.net/projects/max_808/f7abbb103982779.Y3JvcCwzMDAwLDIzNDYsMCwyOQ.png",
        link:""
    },

    {
        id:4,
        img:"https://static.vecteezy.com/system/resources/previews/001/447/112/non_2x/dashboard-ui-admin-panel-design-vector.jpg",
        link:"",
    },

    {
        id:5,
        img:dashboard,
        link:""
    },

    {
        id:6,
        img:"https://mir-s3-cdn-cf.behance.net/projects/max_808/f7abbb103982779.Y3JvcCwzMDAwLDIzNDYsMCwyOQ.png",
        link:""
    }
]

const ProductList = () => {
  return (
    <div className='pl'>
    <div className="pl-text">
    
    <h1 className="pl-title">My Projects</h1>
    <p className="pl-des">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt distinctio voluptas tenetur, vitae cum, consequuntur aspernatur mollitia modi recusandae tempora aliquam iure? Eum.
    </p>
    </div>

    <div className="pl-list">
   
    {data.map((p)=>(
        <Project key={p.id} img={p.img} link={p.link}/>

    ))}
   
    

    </div>

    </div>
  )
}

export default ProductList