import React, { FC } from 'react';
import styled from 'styled-components';

const ImgStyled = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10rem;
`;

type ImageProps = {
  src: string | undefined;
};

export const Image: FC<ImageProps> = ({ src }) => {
  return <ImgStyled src={src} alt="Тут картинка" />;
};
