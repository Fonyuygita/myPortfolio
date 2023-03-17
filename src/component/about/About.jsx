import React from 'react'
import  {BsLinkedin, BsTwitter, BsWhatsapp,  BsFacebook, BsGithub } from 'react-icons/bs'
import "./About.css"
import  gita from "../../asset/gita.jpg"
const About = () => {
  return (
   <div className="a">
   <div className="a-left">
   <div className="a-card bg"></div>
   <div className="a-card">
   <img src={gita} alt="" className='a-img' />
   </div>
   </div>
   <div className="a-right">
   <h1 className="a-title">About Me</h1>
   <hr/>
   <p className="a-sub">{"It's a long established fact that a reader will be distracted by the readable content "}</p>

   <p className="a-desc">
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nemo numquam fugiat, vitae, ab, rem ratione iste eaque beatae earum nesciunt quod deserunt quas id! Facere, laborum sequi! Voluptatum nihil neque ex expedita odit quae? Debitis animi incidunt in similique temporibus obcaecati iste reiciendis tempore ab iure, assumenda laboriosam numquam sapiente accusantium voluptas quod dignissimos architecto quam voluptatum repellendus! Esse ea ratione facilis illum, at repellat ut inventore magni in?

   </p>
<div className="socials">
<a href=""><BsGithub  className='icon' /></a>
<a href=""><BsTwitter  className='icon' /></a>
<a href=""><BsWhatsapp  className='icon' /></a>
<a href=""><BsLinkedin  className='icon' /></a>


</div>

   </div>
   </div>
  )
}

export default About