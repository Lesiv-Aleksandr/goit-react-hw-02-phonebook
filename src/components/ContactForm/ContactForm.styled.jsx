import styled from "styled-components";


const ContactFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  padding: 0;
  
`;

const ContactLabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;

const ContactInputStyled = styled.input`
  padding: 5px;
  align-items: center;
  width: 160px;
  border: solid 2px #B7FB49;
  border-radius: 50px;
  margin-top: 5px;
`;

const ContactButtonStyled = styled.button`
 
  
  justify-content: center;
  padding: 5px;
  font-size: 16px;
  margin-top: 20px;
  border-radius: 50px;
  width: 120px;
  background: #B7FB49;
  border: 0;
  margin-left: 20px;
  
  :hover {
    background: #A388E6;
    border: 0;
   
  }
`;

export {
  ContactFormStyled,
  ContactLabelStyled,
  ContactInputStyled,
  ContactButtonStyled,
};