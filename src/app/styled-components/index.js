import styled from 'styled-components';

const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
`
const Error = styled(Text)`
  font-size: 12px;
  color: red;
`
const StyledInput = styled.input`
  width: 100%;
  max-width: 500px;
  border-width: 2px;
  outline: none;
  font-size: 14px;
  padding: 6px 8px;
  border-width: 1px;
  border-style: solid;
  margin: 0;
`

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
`;
export {
  Title,
  Error,
  StyledInput,
  Button
};