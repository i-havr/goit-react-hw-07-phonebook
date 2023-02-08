import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getContacts } from 'redux/contacts/contactsSlice';
import { getFilter } from 'redux/filter/filterSlice';
import { ContactsListStyled } from './ContactsList.styled';
import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
import {
  fetchContacts,
  deleteContact,
} from 'redux/contacts/contactsOperations';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  if (visibleContacts.length > 0) {
    return (
      <>
        <ContactsListStyled>
          {visibleContacts.map(({ id, name, phone }) => {
            return (
              <ContactsListItem
                key={id}
                id={id}
                name={name}
                phone={phone}
                onDeleteButton={id => dispatch(deleteContact(id))}
              />
            );
          })}
        </ContactsListStyled>
      </>
    );
  }
};
