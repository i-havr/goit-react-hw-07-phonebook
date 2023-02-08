import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { notifyError } from 'components/Notify/NotifyError';
import { Loader } from 'components/Loader/Loader';

import { getLoadingStatus, getError } from 'redux/contacts/contactsSlice';
import { MainStyled } from './Main.styled';
import { FormWrapperStyled } from 'components/FormWrapper/FormWrapper.styled';
import { ImageWrapper } from 'components/ImageWrapper/ImageWrapper';
import ContactForm from 'components/ContactForm.jsx/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

export default function Main() {
  const isLoading = useSelector(getLoadingStatus);
  const error = useSelector(getError);
  useEffect(() => {
    error && notifyError(error);
  }, [error]);

  return (
    <MainStyled>
      <FormWrapperStyled>
        <ContactForm />
        <Filter />
        <ContactsList />
        {isLoading && <Loader />}
      </FormWrapperStyled>
      <ImageWrapper />
      <Toaster />
    </MainStyled>
  );
}
