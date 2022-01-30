import React from "react";
import PropTypes from "prop-types";
import {ContactListStyled, ContactListBoxStyled} from "./ContactList.styled";
import { ContactItem } from "../ContactItem/ContactItem";

export  const ContactList = ({ contacts, onDeleteContact }) => (
    <ContactListBoxStyled>
      <ContactListStyled>
        {contacts.map((contact) => ContactItem(contact, onDeleteContact))}
      </ContactListStyled>
    </ContactListBoxStyled>
  );
  
  ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired).isRequired)
      .isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };