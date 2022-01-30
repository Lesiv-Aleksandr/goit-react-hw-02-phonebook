import React from "react";
import PropTypes from "prop-types";
import { ContactItemStyled, ContactButtonDeleteStyled } from "./ContactItem.styles";

export const ContactItem = ({ id, name, number }, onDeleteContact) => {
  return (
    <ContactItemStyled key={id}>
      <span>{name}</span>&nbsp;<span>{number}</span>
      <ContactButtonDeleteStyled onClick={() => onDeleteContact(id)}>
        Delete
      </ContactButtonDeleteStyled>
    </ContactItemStyled>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};