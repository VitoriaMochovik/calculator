import React from 'react';
import { Header } from '../../components/Header/Header';
import { Answers } from './components/Answers/Answers';
import { CalculateData } from './components/CalculateData/CalculateData';
import { Container } from '../../components/Container/Container';
import { SubContainer } from '../../components/SubContainer/SubContainer';

export const Results = () => {
  return (
    <Container>
      <SubContainer>
        <Header />
        <div style={{background: '#EEF2F8', paddingTop: '48px',  paddingLeft: '70px', minHeight: '100vh'}}>
          <Answers />
          <CalculateData />
        </div>
      </SubContainer>
    </Container>
  );
}


