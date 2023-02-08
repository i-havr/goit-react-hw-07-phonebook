import {
  HeaderStyled,
  HeaderContentStyled,
  HeaderLogoStyled,
} from './Header.styled';

import { IconContext } from 'react-icons';
import { TiContacts } from 'react-icons/ti';

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderContentStyled>
        <HeaderLogoStyled>
          <IconContext.Provider value={{ color: '#252F38' }}>
            <TiContacts size={32} />
          </IconContext.Provider>
          <b>YourPhonebook</b>
        </HeaderLogoStyled>
      </HeaderContentStyled>
    </HeaderStyled>
  );
};
