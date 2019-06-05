import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './contact.css';

function Contact(props) {
  const { onSave, onChangeContact, contact, error, isSavedSuccessfully } = props;

  const [isSaveDisabled, setIsSaveDisabled] = useState(false);

  const save = (e) => {
    e.preventDefault();
    setIsSaveDisabled(true);
    onSave();
  };

  const changeField = (fieldName, e) => {
    setIsSaveDisabled(false);
    onChangeContact(fieldName, e.target.value);
  };

  return (
    <div className="contact-container">
      <h2>Enter your details here</h2>
      <p>You complete the form. We call you. Good things happen.</p>

      <form onSubmit={(e) => save(e)} className="form">
        <input value={contact.name} className="contact-input" onChange={(e) => changeField('name', e)}
               placeholder="Your full name"/>
        <input value={contact.companyName} className="contact-input"
               onChange={(e) => changeField('companyName', e)}
               placeholder="Your company name"/>
        <input value={contact.email} className="contact-input" onChange={(e) => changeField('email', e)}
               placeholder="Your email address"/>
        <input value={contact.telephone} className="contact-input" onChange={(e) => changeField('telephone', e)}
               placeholder="Your telephone number"/>
        <button className="save-button" disabled={isSaveDisabled && error.length === 0}>Save</button>
        {error !== '' ?
          <div className="error">{error}</div> : null}
        {isSavedSuccessfully ?
          <div className="saved-ok">Saved successfully</div> : null
        }
      </form>
    </div>
  );
}

Contact.propTypes = {
  onSave: PropTypes.func,
  contact: PropTypes.object,
  onChangeContact: PropTypes.func,
  onChangeCompanyName: PropTypes.func,
  onChangeEmail: PropTypes.func,
  onChangeTelephone: PropTypes.func,
  error: PropTypes.string,
  isSavedSuccessfully: PropTypes.bool,
};

export default Contact;
