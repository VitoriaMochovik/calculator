
import React from 'react';
import { Header } from '../../components/Header/Header';
import { CaculatorInputs } from './components/CalculatorInputs/CalculatorInputs';
import { TextDescription } from './components/TextDescription/TextDescription';
import { Content} from './style';
import { Container } from '../../components/Container/Container';
import { SubContainer } from '../../components/SubContainer/SubContainer';


export const CalculatorPage = () => {
  return (
    <Container >
      <SubContainer >
        <Header />
        <Content>
          <TextDescription />
          <CaculatorInputs />
        </Content>
      </SubContainer>
    </Container>
  );
}


