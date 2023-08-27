import React from 'react';
import styled from 'styled-components';
import gitHub from '../../public/gitHub.png';
import { Image } from '../Image';
import { TextStyled } from '../common/commonType';

const HeaderContentStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const HeaderTextGroupStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const HTextStyled = styled.div`
  font-size: 2.2rem;
`;

export const Header = () => {
  return (
    <HeaderContentStyled>
      <Image />
      <HeaderTextGroupStyled>
        <HTextStyled>Долгинов Михаил</HTextStyled>
        <TextStyled>Front-End разрабатчик</TextStyled>
        <TextStyled>Ссылка на репозиторий проекта: </TextStyled>
        <a href="https://github.com/MiklPingvin/my_card">
          <Image src={gitHub} isSmall />
        </a>
      </HeaderTextGroupStyled>
    </HeaderContentStyled>
  );
};
