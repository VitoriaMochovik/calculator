
import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { formatarParaReais } from '../../utils/formateNumbers';



const Box = styled.div`
    width: 950px;
    height: 134px;
    background: white;
    border-radius: 6px;
    
`

const PDescription = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 500; 
    color: #32323E;
    font-size: 22px;
    line-height: 27.83px;
    margin-top: 0px;

`

const PData = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 400; 
    color: #32323E;
    font-size: 15px;
    line-height: 23.1px;
    margin: 10px 0px 0px 0px;

`

const PDataBold = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 600; 
    color: #32323E;
    font-size: 15px;
    line-height: 23.1px;
    margin: 10px 0px 0px 10px;

`


export const Answers = () => {
    let location = useLocation();

    const { 
        abonoPecuniario,
        adiantar13Parcela,
        dependentes,
        diasDeFerias,
        mediaHoraExtra,
        salarioBruto,

    } = location.state || {}

    console.log(location.state)

    console.log("teste")


    return (
        <div>
            <PDescription> Cálculo</PDescription>
            <Box>
                <div style={{display: 'flex', paddingLeft: '30px', paddingTop: '10px', }}>
                    <div>
                        <div style={{display: 'flex',width: '450px'}}>
                            <PData> Salário bruto: </PData>
                            <PDataBold>{formatarParaReais(salarioBruto)} </PDataBold>
                        </div>

                        <div style={{display: 'flex'}}>
                            <PData> Dependentes: </PData>
                            <PDataBold>{dependentes} </PDataBold>
                        </div>

                        <div style={{display: 'flex'}}>
                            <PData> Abono pecuniário: </PData>
                            <PDataBold>{abonoPecuniario} </PDataBold>
                        </div>
                        
                        
                    </div>
                    <div style={{}}>

                        <div style={{display: 'flex'}}>
                            <PData> Salário bruto: </PData>
                            <PDataBold>{formatarParaReais(salarioBruto)} </PDataBold>
                        </div>

                        <div style={{display: 'flex'}}>
                            <PData> Dias de férias: </PData>
                            <PDataBold>{diasDeFerias} </PDataBold>
                        </div>
                        
                        <div style={{display: 'flex'}}>
                            <PData>  Adiantar 1ª parcela 13º: </PData>
                            <PDataBold>{adiantar13Parcela} </PDataBold>
                        </div>
                        

                    </div>
                </div>
            </Box>
        </div>    
    )
}