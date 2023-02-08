import {
  ImageWrapperStyled,
  TextStyled,
  ImageHeroStyled,
} from './ImageWrapper.styled';

import hero_img from '../../images/hero_img.png';

export const ImageWrapper = () => {
  return (
    <ImageWrapperStyled>
      <ImageHeroStyled>
        <img src={hero_img} alt="People with phones" />
      </ImageHeroStyled>
      <TextStyled>
        Store all your contacts in one <br />
        convenient place!
      </TextStyled>
    </ImageWrapperStyled>
  );
};
