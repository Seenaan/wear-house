import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>If you have any questions or feedback, feel free to reach out to us!</p>
      <Link to="https://mail.google.com/mail/u/0/#compose" target='_blank'><p>Email: senanegesse@gmail.com</p></Link>
      <p>Phone: (251)</p>
      <Link to="https://github.com/Seenaan" target='_blank'><p>Github</p></Link>
    </div>
  );
}

export default Contact;
