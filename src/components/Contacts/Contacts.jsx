import React from 'react';
// import { nanoid } from 'nanoid';
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"
import PropTypes from 'prop-types';
import { ContactsContainer } from './Contacts.styled';

const ContactList = ({ contacts, onDeleteClick }) => {
  return (
    <ContactsContainer>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name} : {contact.number}
            <button type="button" onClick={() => onDeleteClick(contact.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ContactsContainer>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDeleteClick: PropTypes.func.isRequired,
};

export default ContactList;
