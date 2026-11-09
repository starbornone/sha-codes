import ContactForm from "@/forms/ContactForm";
import React from "react";

const backgroundImage = "url(/about-bg.jpg)";

function Contact() {
  return (
    <div
      className="section bg-grey-900 bg-cover bg-center"
      id="contact"
      style={{ backgroundImage }}
    >
      <div>
        <div className="container">
          <div className="w-full">
            <h2>
              <span className="highlight">contact</span>.me
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
