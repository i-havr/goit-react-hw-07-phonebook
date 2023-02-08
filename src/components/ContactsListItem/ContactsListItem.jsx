import PropTypes from 'prop-types';
import { IoIosContact } from 'react-icons/io';
import { ButtonDelete } from 'components/Button/ButtonDelete';
import {
  ContactsListItemStyled,
  InnerElementStyled,
} from 'components/ContactsListItem/ContactsListItem.styled';

export const ContactsListItem = ({ id, name, phone, onDeleteButton }) => {
  return (
    <ContactsListItemStyled>
      <IoIosContact size={32} />
      <InnerElementStyled>
        <b>{`${name}`}</b>
        {`${phone}`}
      </InnerElementStyled>
      <ButtonDelete actionHandler={() => onDeleteButton(id)}>X</ButtonDelete>
    </ContactsListItemStyled>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.node.isRequired,
  onDeleteButton: PropTypes.func.isRequired,
};
