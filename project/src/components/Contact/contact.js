import { useState, useEffect } from 'react';
import './contact.css'
import Button from 'react-bootstrap/Button';


const Contact = () => {
  const initialValues = { username: '', email: '', phone: '', message: '' }
  const [values, setValues] = useState(initialValues)
  const [formErrors,setFormErrors] = useState({})
  const [isSubmit,setIsSubmit] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
      setFormErrors(validate(values))
    setIsSubmit(true)
  }

  

  const validate = (value)=>{
    const errors ={}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i; 
    if(!value.username){
      errors.username="Username is required!"
    }
    if(!value.email){
      errors.email="Email is required!"
    }
    if(!value.phone){
      errors.phone="Phone is required!"
    }
    if(!value.message){
      errors.message="Please provide your message"
    }
      return errors
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
        <input type='text' name="username" placeholder='Name' value={values.username} onChange={handleChange} />
        <p className='error'>{formErrors.username}</p>
        <input type='email' name="email" placeholder='Email Address' value={values.email} onChange={handleChange} />
        <p className='error'>{formErrors.email}</p>

        <input type='tel' name="phone" placeholder='Phone' value={values.phone} onChange={handleChange} />
        <p className='error'>{formErrors.phone}</p>
        
        <textarea type='text' name="message" placeholder='Your Message' value={values.message} onChange={handleChange}/>
        <p className='error'>{formErrors.message}</p>

        <Button type="submit" className='btn'>Submit</Button>

      </form>
    </div>
  );

}

export default Contact