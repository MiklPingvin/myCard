import React from 'react';
import './App.css';
import { MainContent } from './componets/MainContent';
import { Content } from './componets/Content';
import { Header } from './componets/Header';

function App() {
  return (
    <MainContent>
      <Header />
      <Content />
    </MainContent>
  );
}

export default App;
