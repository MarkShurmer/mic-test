import React, { Component } from 'react';
import Contact from './Contact';
import apiSave from '../api/api-proxy';

class ContactContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: {
        name: '',
        companyName: '',
        email: '',
        telephone: '',
      },
      error: '',
      isSavedSuccessfully: false
    };
  }

  async save() {

    const validationResult = this.validate(this.state.contact);

    if(validationResult.length === 0) {
      const apiResult = await apiSave(this.state.contact);
      this.setState({error: apiResult, isSavedSuccessfully: apiResult === ''});
    } else {
      this.setState({error: validationResult});
    }
  };

  validate(contact) {
    const checks = [
      () => !contact.name || contact.name.length === 0,
      () => !contact.companyName || contact.companyName.length === 0,
      () => !contact.telephone || contact.telephone.length === 0,
      () => contact.telephone.length > 13,
      () => !contact.email || contact.email.length === 0,
      () => contact.email.length > 80,
      () => contact.email.indexOf('@') === -1,
      () => contact.email.indexOf('.') === -1,
    ];

    let result = '';
    checks.some((check) => {
      if(check()) {
        result = 'You need to enter details for all fields';
        return true;
      }
      return false;
    });

    return result;
  };

  onChangeElement = (elementName, newValue) => {
    const newContact = {...this.state.contact, [elementName] : newValue};
    this.setState({contact: newContact, error: this.validate(newContact)});
  };

  render() {
    return (
        <Contact contact={this.state.contact} onSave={() => this.save()} error={this.state.error}
                 isSavedSuccessfully={this.state.isSavedSuccessfully}
                 onChangeContact={this.onChangeElement} />
    );
  }
}

ContactContainer.propTypes = {};


export default ContactContainer;






