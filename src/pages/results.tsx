import React from 'react';
import { Header } from '../components/header';
import { Answers } from '../components/result/answers';
import { CalculateData } from '../components/result/calculateData';

export const Results = () => {
  return (
    <div style={{width: '100vw', display: 'flex', justifyContent: 'center'}}>
      <div style={{width: '1089px'}}>

      
        <Header />
        <div style={{background: '#EEF2F8', paddingTop: '48px',  paddingLeft: '70px', height: '100vh'}}>
          
          <Answers />
          <CalculateData />
        </div>

        
      </div>
    </div>
  );
}


