
import { useState, useEffect } from "react";
import "./contact.css";
import error from "../../assets/contact/desktop/icon-error.svg";
import { Location } from "../../data";
import bgimg from "../../assets/shared/desktop/bg-pattern-leaf.svg";
import Mini from "../Footer/Footer-mini";
const Contact = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    if (formValues.username&&formValues.email&&formValues.phone&&formValues.message) {
      setFormValues({ username: '', email: '', phone: '', message: '' })
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
    console.log(formValues);
  });

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Can't be empty";
    }
    if (!values.email) {
      errors.email = "Can't be empty";
    }else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email";
    }
    if (!values.phone) {
      errors.phone = "Can't be empty";
    }
    if (!values.message) {
      errors.message = "Can't be empty";
    }
    return errors;
  };
  return (
    <>
      <img src={bgimg} className="bg-img" />
    <div className="contact-page">
      <div className="svg-container">
        <svg width="640" height="640" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a">
              <stop stop-color="#5D0202" stop-opacity="0" offset="0%" />
              <stop stop-color="#5D0202" stop-opacity=".498" offset="100%" />
            </linearGradient>
          </defs>
          <circle
            fill="url(#a)"
            transform="matrix(0 1 1 0 0 0)"
            cx="320"
            cy="320"
            r="320"
            fill-rule="evenodd"
            opacity=".309"
          />
        </svg>
      </div>
      <div className="contact">
        <h1>Contact Us</h1>
        <div className="text">
          Ready to take it to the next level? Let's talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that's relatable to your users,
          drop us a line.
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inp">
          <input
            type="text"
            name="username"
            placeholder="Name"
            value={formValues.username}
            onChange={handleChange}
          />
          <div className="error-message">
            <p className="error-text">
              {formErrors.username}
              <div >

              <img
                className={formErrors.username ? "error-img-show " : "error-img"}
                src={error}
              />
              </div>
            </p>
          </div>
        </div>
        <div className="inp">

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formValues.email}
          onChange={handleChange}
        />
        <div className="error-message">
            <p className="error-text">
              {formErrors.email}
              <div >

              <img
                className={formErrors.email ? "error-img-show" : "error-img"}
                src={error}
              />
              </div>
            </p>
          </div>
        </div>
        <div className="inp">

        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formValues.phone}
          onChange={handleChange}
        />
        <div className="error-message">
            <p className="error-text">
              {formErrors.phone}
              <div >

              <img
                className={formErrors.phone ? "error-img-show" : "error-img"}
                src={error}
              />
              </div>
            </p>
          </div>
        </div>
        <div className="inp">

        <textarea
          type="text"
          name="message"
          placeholder="Your Message"
          value={formValues.message}
          onChange={handleChange}
        />
        <div className="error-message message">
            <p className="error-text">
              {formErrors.message}
              <div >

              <img
                className={formErrors.message ? "error-img-show" : "error-img"}
                src={error}
              />
              </div>
            </p>
          </div>
        </div>


        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>

    <div className="location-page">
      {
        Location.map((place)=>{
          const {img,title,id} = place
          return(
            <div className="location-card">
        <div className={id===1?"location-card-img-container-1":id===2?"location-card-img-container-2":"location-card-img-container-3"}>
          <img className={id===1?"img-svg-1":id===2?"img-svg-2":"img-svg-3"} src={img} alt="" />
        </div>
        <div className="location-card-text-container">
          <h2>{title}</h2>
          <button type="submit" className="locatio-btn">
          Submit
        </button>
        </div>
      </div>
          )
        })
      }
    </div>
    <Mini/>
        </>

  );
};

export default Contact;
