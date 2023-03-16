import styled from 'styled-components';

export const ContactsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  button {
    margin-left: 15px;
    padding: 3px;
    border: 2px solid black;
    border-radius: 6px;
    background-color: white;
    opacity: 0.8;

    &:hover {
      background-color: whitesmoke;
      opacity: 1;
    }
  }
`;
