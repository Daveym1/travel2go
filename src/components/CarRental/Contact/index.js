import { useState } from "react";
import "./style.css"

function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Sending email", values)
    setValues({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2><span>Get in Touch</span> with us</h2>
          <p>We are looking forward to making your trip amazing!</p>
        </div>
      </div>

      <div className="container info" data-aos="fade-up">

        <div className="info-wrap">
          <div className="row">
            <div className="col-lg-3 col-md-6 info">
              <i className="bi bi-geo-alt"></i>
              <h4>Location:</h4>
              <p>Travel2Go Street<br />London, UK MH05Z2</p>
            </div>

            <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
              <i className="bi bi-clock"></i>
              <h4>Open Hours:</h4>
              <p>Monday-Saturday:<br />11:00 AM - 2300 PM</p>
            </div>

            <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
              <i className="bi bi-envelope"></i>
              <h4>Email:</h4>
              <p>info@travel2go.com<br />contact@travel2go.com</p>
            </div>

            <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
              <i className="bi bi-phone"></i>
              <h4>Call:</h4>
              <p>+1 2345 67890 51<br />+1 2345 67890 14</p>
            </div>
          </div>
        </div>

        <form action="" role="form" className="contact-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
                value={values.name}
                onChange={handleChange}
                required />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Your Email"
                values={values.email}
                onChange={handleChange}
                required />
            </div>
          </div>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control"
              name="subject"
              placeholder="Subject"
              value={values.subject}
              onChange={handleChange}
              required />
          </div>
          <div className="form-group mt-3">
            <textarea
              className="form-control"
              name="message"
              rows="5"
              placeholder="Message"
              value={values.message}
              onChange={handleChange}
              required></textarea>
          </div>
          <div className="text-center"><button type="submit">Send Message</button></div>
        </form>

      </div>
      <section>
        <div className="text-center">
          <p>Project by: David Marsh, Rui Belo, Mandip Nijor and Billy Golooba</p>
        </div>
      </section>
    </section>
    
  );
}

export default Contact;
