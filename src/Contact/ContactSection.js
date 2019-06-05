import React from 'react';
import PropTypes from 'prop-types';

const ContactSection = props => {
  const { onChangeSection} = props;

  return (
    <>
      <input value ={value} className="contact-input"  onChange={onChangeSection}/>
    </>
  );
};

ContactSection.propTypes = {
  onChangeSection: PropTypes.func,

};

export default ContactSection;
