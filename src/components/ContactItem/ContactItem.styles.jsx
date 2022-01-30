import styled from "styled-components";

const ContactItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin-left: 20px;
`;

const ContactButtonDeleteStyled = styled.button`
  padding: 2px;
  border-radius: 50px;
  border:0px;
  background: #B7FB49;
  margin-left:5px;
  :hover {
    background: #A388E6
  }
`;

export { ContactItemStyled, ContactButtonDeleteStyled };