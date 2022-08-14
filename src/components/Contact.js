import React from 'react';






function Contact() {
  

  async function sendEmail(e){
    console.log(window)
    e.preventDefault()
    
    const name= e.target.name.value;
    const email= e.target.email.value;
    const contact_number=e.target.number.value;
    const message= e.target.message.value;
    
    const template_params= {
      "name": name,
      "email":email,
      "message":message,
      "number":contact_number

  }
    window.emailjs.send("service_8zifnyg", "template_e7hqvog",template_params)
    .then((res)=>{
      alert("mail sent successfully")
    })
    .catch((err)=>{
      console.log(err)
      alert("Mail could not be sent please try again!")
    })
  }



  return (
    
    <div className="container contact" id="form" align="center">
      <form onSubmit={sendEmail} >
        <h2 className='main-title'>CONTACT</h2>
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

