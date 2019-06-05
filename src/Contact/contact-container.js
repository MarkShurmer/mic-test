import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';
import apiSave from '../api/api-proxy';

function ContactContainer() {



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






