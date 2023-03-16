import styled from 'styled-components';
import { Form } from 'formik';
export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
  gap: 15px;
  outline: 1px solid black;
  padding: 15px 0;

  button {
    display: inline-block;
    margin-left: 15px;
    margin-bottom: 5px;
    padding: 3px;
    border: 2px solid black;
    border-radius: 6px;
    background-color: white;
    opacity: 0.8;
    width: 140px;
    &:hover {
      background-color: whitesmoke;
      opacity: 1;
    }
  }

  label {
    color: #b4886b;
    font-weight: bold;
    display: block;
  }

  input {
    padding: 3px;
    box-shadow: 3px 3px 5px grey;
    font-size: 14px;
    font-weight: 600;
    display: block;
    outline: none;
    &:hover,
    :active,
    :focus {
      border: 2px solid blue;
      border-radius: 6px;
    }
  }
`;
