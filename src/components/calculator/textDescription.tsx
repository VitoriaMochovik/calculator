
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    padding-left: 70px;
`

const Title = styled.p`
    font-size: 38px;
    text-align: left;
    font-family: 'Inter', sans-serif;
    font-weight: 500; 
    color: #32323E;
    margin-top: 0;
    line-height: 48.7px;
    margin-bottom: 22.6px;
`

const DivTitle = styled.div`
    width: 452px;
`

const DivDescription = styled.div`
    width: 435px;
`

const PDescription = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 400; 
    color: #32323E;
    font-size: 16px;
    line-height: 24.64px;

`

const OlDescription = styled.ol`

    font-family: 'Inter', sans-serif;
    font-weight: 400; 
    color: #32323E;
    font-size: 16px;
    line-height: 24.64px;
    padding-left: 23px;
    margin-top: 26px;

    & > li {
        font-family: 'Inter', sans-serif;
        font-weight: 400; 
        color: #32323E;
        font-size: 16px;
        line-height: 24.64px;
       
    }
   

`

export const TextDescription = () => {
  return (
    <Div>
        <DivTitle>
            <Title> Como utilizar a calculadora de férias</Title>
        </DivTitle>
        <DivDescription>
            <PDescription>
            Para ficar tranquilo no seu descanso e com dinheiro no bolso, veja como fazer o cálculo de férias:


            </PDescription>
            {/* <PDescription>
                Preencha o valor do seu salário bruto;
                Preencha o valor médio da sua hora extra (Opcional);
                Informe o número de dependentes, caso tenha;
                Preencha a quantidade de dias de férias requisitados;
                Informe se vai ter abono pecuniário de 1/3;
                Marque se irá adiantar a 1ª parcela do 13º salário.

                
            </PDescription> */}
            
            <OlDescription>
                <li>Preencha o valor do seu salário bruto;</li>
                <li>Preencha o valor médio da sua hora extra (Opcional);</li>
                <li>Informe o número de dependentes, caso tenha;</li>
                <li>Preencha a quantidade de dias de férias requisitados;</li>
                <li>Informe se vai ter abono pecuniário de 1/3;</li>
                <li>Marque se irá adiantar a 1ª parcela do 13º salário.</li>
            </OlDescription>
            <PDescription style={{margin: '28px 0 0 0',}}>
                É previsto por lei que um funcionário CLT pode tirar férias após trabalhar um período de 12 meses (1 ano). Porém, é possível que dúvidas existam em relação ao cálculo de férias remuneradas.
                
            </PDescription>
            <PDescription style={{margin: '0px'}}>
                Dessa forma, confira um exemplo de como ele é realizado no caso de um trabalhador que recebe um salário de R$2400/mês.
            </PDescription>
        </DivDescription>
      
    </Div>
  );
}


