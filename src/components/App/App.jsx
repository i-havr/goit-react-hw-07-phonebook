import { AppStyled } from './App.styled';

import { Header } from 'components/Header/Header';
import Main from 'components/Main/Main';
import { Footer } from 'components/Footer/Footer';

export default function App() {
  return (
    <AppStyled>
      <Header />
      <Main />
      <Footer />
    </AppStyled>
  );
}
