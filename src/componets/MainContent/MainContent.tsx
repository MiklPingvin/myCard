import React, { FC } from 'react';
import styled from 'styled-components';

const MainContentStyled = styled.div`
  display: flex;
  justify-content: center;
`;

type MainContentProps = {
  children: React.ReactNode;
};

export const MainContent: FC<MainContentProps> = ({ children }) => {
  return <MainContentStyled>{children}</MainContentStyled>;
};
