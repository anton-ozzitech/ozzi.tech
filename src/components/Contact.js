import React from 'react';
import phone from "../img/phone-call.svg";
import envelope from "../img/envelope.svg";

const Contact = ({ address, key }) => (
  <div className="column contact" key={key}>
    <h3>{address.title}</h3>
    <pre className="contact-address">{address.text}</pre>
    <div>
      <a href={`tel:${address.phone}`} className="contacts-link">
        <img src={phone} alt="phone" style={{ width: "30px" }} />
        {address.phone}
      </a>
    </div>
    <div>
      <a href={`mailto:${address.email}`} className="contacts-link">
        <img src={envelope} alt="email" style={{ width: "30px" }} />{" "}
        {address.email}
      </a>
    </div>
  </div>
);

export default Contact;