import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './contact.css';
import apiSave from '../api/api-proxy';

function Contact(props) {
  const {} = props;

  const [contact, setContact] = useState({ name: '', companyName: '', email: '', telephone: '' });
  const [error, setError] = useState('');

  const save = async(e) => {
    e.preventDefault();

    const validation = validate();

    if(validation.length === 0) {
      setError(await apiSave(contact));

    } else {
      setError(validation);
    }
  };

  const validate = () => {
    const checks = [
      () => contact.name.length === 0,
      () => contact.companyName.length === 0,
      () => contact.telephone.length === 0,
      () => contact.email.length === 0];

    let result = '';
    checks.forEach((check) => {
      if(check()) result = 'You need to enter details for all fields';
    });

    return result;
  };

  const onChangeName = (newName) => {
    setContact({ ...contact, name: newName });
    setError(validate());
  };

  const onChangeCompanyName = (newName) => {
    setContact({ ...contact, companyName: newName });
    setError(validate());
  };

  const onChangeEmail = (newEmail) => {
    setContact({ ...contact, email: newEmail });
    setError(validate());
  };

  const onChangeTelephone = (newTelephone) => {
    setContact({ ...contact, telephone: newTelephone });
    setError(validate());
  };

  return (
    <div className="contact-container">
      <h2>Enter your details here</h2>
      <p>You complete the form. We call you. Good things happen.</p>
      <form onSubmit={save} className="form">

        <input value={contact.name} className="contact-input" onChange={(e) => onChangeName(e.target.value)}
               placeholder="Your full name"/>
        <input value={contact.companyName} className="contact-input"
               onChange={(e) => onChangeCompanyName(e.target.value)}
               placeholder="Your company name"/>
        <input value={contact.email} className="contact-input" onChange={(e) => onChangeEmail(e.target.value)}
               placeholder="Your email address"/>
        <input value={contact.telephone} className="contact-input" onChange={(e) => onChangeTelephone(e.target.value)}
               placeholder="Your telephone number"/>
        <button className="save-button">Save</button>
        {error !== '' ?
          <div className="error">{error}</div> : null}
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
