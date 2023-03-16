import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormContainer } from './Phonebook.styled';
import PropTypes from 'prop-types';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Please enter name'),
  number: Yup.number().required('Please enter number'),
});
// const Input = styled(Field)`
//   font-size: 14px;
// `;
const initialValues = {
  name: '',
  number: '',
};
const ContactsForm = ({ handleSubmit }) => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        <FormContainer>
          <label htmlFor="name">
            Name
            <Field type="text" name="name" />
          </label>
          <ErrorMessage name="name" component="div" />
          <label htmlFor="number">
            Number
            <Field type="text" name="number" />
          </label>
          <ErrorMessage name="number" component="div" />
          <button type="submit">Add to contacts</button>
        </FormContainer>
      </Formik>
    </div>
  );
};
ContactsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};


export default ContactsForm;
