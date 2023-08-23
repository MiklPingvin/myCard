import React from 'react';
import styled from 'styled-components';
import my_photo from '../../public/my_photo.jpg';
import { Image } from '../Image';

const HeaderContentStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Header = () => {
  return (
    <HeaderContentStyled>
      <Image src={my_photo} />
      <div>Долгинов Михаил</div>
    </HeaderContentStyled>
  );
};
