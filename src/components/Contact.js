import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Header from "./Header";
import Footer from "./Footer";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nqfu6vj",
        "template_6xe37aq",
        form.current,
        "nMAEWyJ8xHsmgeh0P"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <header className="header">
        <Header />
      </header>

      <main className="contact-sec">
      <form className="EmailForm form" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" placeholder="Enter Your Name"/>
        <label>Email</label>
        <input type="email" name="user_email"  placeholder="Enter Your Email"/>
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      </main>

      <footer className="footer"> 
      <Footer />
      </footer>
    </div>
  );
};

export default Contact;
