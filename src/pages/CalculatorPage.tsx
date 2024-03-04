
import React from 'react';
import { Header } from '../components/header';
import { CaculatorInputs } from '../components/calculator/calculatorInputs';
import { TextDescription } from '../components/calculator/textDescription';

export const CalculatorPage = () => {
  return (
    <div style={{width: '100vw', display: 'flex', justifyContent: 'center'}}>
      <div style={{width: '1089px'}}>

      
        <Header />
        <div style={{background: '#EEF2F8', display: 'flex', paddingTop: '66px',  }}>
          
          <TextDescription />
          <CaculatorInputs />

        </div>
      </div>
    </div>
  );
}


