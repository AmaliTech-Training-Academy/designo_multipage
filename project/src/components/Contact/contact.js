import { useState, useEffect } from 'react';
import './contact.css'
import Button from 'react-bootstrap/Button';


const Contact = () => {
  // const initialValues = 
  const [values, setValues] = useState({ username: '', email: '', phone: '', message: '' })
  const [isSubmit,setIsSubmit] = useState(false)

  const handleChange = (e) => {
    const name = e.target.name
    const value  = e.target.value
    setValues({ ...values, [name]: value })
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
       setIsSubmit(true)
      if (values.username&&values.email&&values.phone&&values.message) {
        setValues({ username: '', email: '', phone: '', message: '' })
      }
        
  }

  return (

    <div className='contact-page'>
      
      <div className='svg-container'>

      <svg width="640" height="640" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a"><stop stop-color="#5D0202" stop-opacity="0" offset="0%"/><stop stop-color="#5D0202" stop-opacity=".498" offset="100%"/></linearGradient></defs><circle fill="url(#a)" transform="matrix(0 1 1 0 0 0)" cx="320" cy="320" r="320" fill-rule="evenodd" opacity=".309"/></svg>
      </div>
      <div className='contact'>
        <h1>Contact Us</h1>
        <div className='text'>
        Ready to take it to the next level? Let's talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that's relatable to your users, drop us a line. 
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input type='text' name="username" placeholder='Name' required value={values.username} onChange={handleChange} />
        <input type='email' name="email" placeholder='Email Address' required value={values.email} onChange={handleChange} />
        <input type='text' name="phone" placeholder='Phone'required value={values.phone} onChange={handleChange} />
        <textarea type='text' name="message" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" placeholder='Your Message' required value={values.message} onChange={handleChange}/>
        <Button type="submit" className='btn' >Submit</Button>

      </form>
    </div>
  );

}

export default Contact