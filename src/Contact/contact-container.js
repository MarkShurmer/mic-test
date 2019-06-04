import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';
import apiSave from '../api/api-proxy';

function ContactContainer(props) {

  const [contact, setContact] = useState({ name: '', companyName: '', email: '', telephone: '' });
  const [error, setError] = useState('');

  const save = async(updatedContact) => {
    if(this.validate(updatedContact).length === 0) {
      setContact(updatedContact);

      const feedback = await apiSave(updatedContact);

    }
  };

  const validate = () => {

  };

  const onChangeName = (newName) => {
    setContact({ ...contact, name: newName });
    validate();
  };

  const onChangeCompanyName = (newName) => {
    setContact({ ...contact, companyName: newName });
    validate();
  };

  const onChangeEmail = (newEmail) => {
    setContact({ ...contact, email: newEmail });
    validate();
  };

  const onChangeTelephone = (newTelephone) => {
    setContact({ ...contact, telephone: newTelephone });
    validate();
  };

  return (
    <Contact contact={contact} onSave={save} error={error} onChangeName={onChangeName}
             onChangeCompanyName={onChangeCompanyName}

    />
  );
}

ContactContainer.propTypes = {
  onSave: PropTypes.func,
};

export default ContactContainer;






