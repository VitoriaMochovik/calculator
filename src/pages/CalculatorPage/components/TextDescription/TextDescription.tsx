
import React from 'react';
import { Div, DivDescription, DivTitle, OlDescription, PDescription, Title, } from './style'


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


