import React, { Component } from 'react';
import { FormContainer } from './Phonebook.styled';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  };
  formReset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.createUser({
      name: this.state.name,
      number: this.state.number,
    });
    this.formReset();
  };
  // handleTagChange = evt => {
  //   this.setState({
  //     tag: evt.target.value,
  //   });
  // };

  render() {
    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
          />
        </label>
        <label htmlFor="number">
          Number
          <input
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
          />
        </label>
        <button type="submit">Add contact</button>
      </FormContainer>
    );
  }
}
ContactForm.propTypes = {
  createUser: PropTypes.func.isRequired,
};

export default ContactForm;
