import {emailjs} from "emialjs-com"
import React from 'react';



function Contact() {


  function sendEmail(e){
    e.preventDefault()
      
    emailjs.send("service_8zifnyg", "template_e7hqvog",e.target,"fHlgxCGt4t1Xj1doh")
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  }  

  return (
    
    <div className="container contact" id="form">
      <form onSubmit={sendEmail} >
        <h2>CONTACT</h2>
        <input type="text" id="name" placeholder="Name" name="name" required></input>
        <input type="email" id="email" placeholder="Email Id" email="email" required></input>
        <input type="text" id="phone" placeholder="Phone no." name="number"></input>
          <textarea id="message" rows="4" name="message" placeholder="How can we help you?"></textarea>
          <button type ="submit">Send</button>

      </form>
      
      
    </div>
  
  );
}

export default Contact;

