import React from "react";
import './contact.css'



function Contact (){
    return(
        <>
        <div className="contact-div">
            <div className="text-contact">
                <h3 className="font-contact-medium">Contact Us</h3>
                <p className="contact-regular-font">Ready to take it to the next level? Let’s talk
                   about your project or idea and find out how we
                   can help your business grow. If you are looking 
                   for unique digital experiences that’s relatable
                   to your users, drop us a line.</p>
            </div>
            <div className="contact-form">
                <input type="text" className="input-contact"id="name-field" placeholder="Name"/>
                <input className="input-contact"id="name-field" placeholder="Email Address" />
                <input className="input-contact"id="name-field" placeholder="Phone" />
                <input className="input-contact"id="message-field" placeholder="Your Message"/>

            </div>

        </div>
       
        </>
    );
}


export default Contact