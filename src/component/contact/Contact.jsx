import React, { useRef, useState } from 'react'
import { BsMailbox, BsMap, BsPhone } from 'react-icons/bs'
import emailjs from '@emailjs/browser';
import "./Contact.css"

const Contact = () => {
  // confirm email state
  const [confirm, setConfirm]=useState(false);

  
// using useRef hook to send our data
const formRef=useRef();
// create our handle sbmit functionality

const handleSubmit=e=>{
  e.preventDefault();

  // now we can send our message using email js
  emailjs.sendForm('service_wzlow5b', 'template_teu4p9n', formRef.current, '6g3n1zVcflVji4WB-')
      .then((result) => {
          console.log(result.text);
          setConfirm(true)
      }, (error) => {
          console.log(error.text);
      });


}

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">{"Let's discuss your projects "}</h1>

          <div className="c-info">
            <div className="c-info-item">

              <BsPhone />
              <h3><span>Contact Me: </span>+237 672 792 563 </h3>

            </div>

            <div className="c-info-item">

              <BsMailbox />
              <h3><span>Email Me: </span>fonyuyjudegita@gmail.com</h3>

            </div>

            <div className="c-info-item">

              <BsMap />
              <h3><span>See Me: </span>BAMENDA CM</h3>

            </div>

          </div>
        </div>
        <div className="c-right">
          <p className="c-des">
            <b>What is your story?</b>
            Get in touch let us discuss business
          </p>

          <form ref={formRef} onSubmit={handleSubmit} >

            <input type="text" placeholder='Name' name='user_name' />

            <input type="text" placeholder='subject' name='user_subject' />
            <input type="email" placeholder='Email' name='user_email' />
            <textarea rows="5" placeholder='Message' name='message' />
            <button>Submit</button>

{confirm && <p>Message send</p>}
          </form>

        </div>
      </div>
      <div className='google-map'>
        <iframe width="100%" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=futru%20%20Nkwen&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </div>


    </div>
  )
}

export default Contact