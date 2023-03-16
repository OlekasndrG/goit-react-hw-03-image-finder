import styled from 'styled-components';
export const FilterLabel = styled.label`
  display: block;
  margin: 10px;
  font-size: large;
  font-weight: bold;
`;

export const FilterInput = styled.input`
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
`;
