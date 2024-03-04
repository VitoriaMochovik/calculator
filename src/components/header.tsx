
import React from 'react';
import styled from 'styled-components';
const logo = require('../imgs/logo.png');

const Div = styled.div`
    width: 100%;
    height: 72px;
    display: flex;
    align-items: center;
    margin-left: 26px;
`

export const Header = () => {
  return (
    <Div>
        <img src={logo} alt="Descrição da imagem" />
      
    </Div>
  );
}


