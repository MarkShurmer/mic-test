import React from 'react';
import PropTypes from 'prop-types';
import './contact.css';

function Contact(props) {
  const { contact, onSave,  onChangeName } = props;

  return (
    <div className="contact-container">
      <h2>Enter your details here</h2>
      <p>You complete the form. We call you. Good things happen.</p>
      <form>
        <input value={contact.name} className="contact-input" placeholder="Your full name" onChange={onChangeName}/>
        <input value={contact.companyName} className="contact-input" placeholder="Your company name"/>
        <input value={contact.email} className="contact-input" placeholder="Your email address"/>
        <input value={contact.telephone} className="contact-input" placeholder="Your telephone number"/>
        <button onClick={onSave}>Save</button>
      </form>
    </div>
  );
}

Contact.propTypes = {
  onSave: PropTypes.func,
  contact: PropTypes.object,
  onChangeName: PropTypes.func,

};

export default Contact;
