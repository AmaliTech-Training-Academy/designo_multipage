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
      <div className='contact'>
        <h1>Contact Us</h1>
        <p className='text'>bhbhjbjhbhbkbkjbkjbbjkbjb,b,mbnbbbbbkjbjbjbjbkjbjbm, m,nmnn,nnjnjkbjkbkjbjbjklkbjbhbhbbhjb bbjbhbhbhjbjhbjbhjbhjbhjbjhvgvgvgvb bbjbhbhbhjbjhbjbhjbhjbhjbjhvgvgvgvhgvjhg</p>
      </div>
      <form onSubmit={handleSubmit}>
        <input type='text' name="username" placeholder='Name' value={values.username} onChange={handleChange} />
        <p className='error'>{formErrors.username}</p>
        <hr></hr>
        <input type='email' name="email" placeholder='Email Address' value={values.email} onChange={handleChange} />
        <p className='error'>{formErrors.email}</p>

        <hr></hr>
        <input type='tel' name="phone" placeholder='Phone' value={values.phone} onChange={handleChange} />
        <p className='error'>{formErrors.phone}</p>
        
        <hr></hr>
        <textarea type='text' name="message" placeholder='Your Message' value={values.message} onChange={handleChange}/>
        <p className='error'>{formErrors.message}</p>

        <hr></hr>
        <Button type="submit" className='btn'>Submit</Button>

      </form>
    </div>
  );

}

export default Contact