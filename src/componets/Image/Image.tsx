import React, { FC } from 'react';
import styled from 'styled-components';
import old from '../../public/old.jpg';
import new_photo from '../../public/new_photo.jpg';
const ImgStyled = styled.img`
  border-radius: 10rem;
  width: 300px;
  height: 300px;
  background: url(${old});
  background-size: cover;
  &:hover {
    background: url(${new_photo});
    background-size: cover;
  }
`;
const ImageSmallStyled = styled.img`
  width: 30px;
  height: 30px;
`;

type ImageProps = {
  src?: string | undefined;
  isSmall?: boolean;
  onClick?: (e: any) => void;
};

export const Image: FC<ImageProps> = ({ src, isSmall, onClick }) => {
  return isSmall ? (
    <ImageSmallStyled src={src} />
  ) : (
    <ImgStyled src={src} onClick={onClick} />
  );
};
