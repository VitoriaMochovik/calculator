import React, { useState } from 'react';
import styled from 'styled-components';
import { RowTable } from './rowTable';
import { useLocation } from 'react-router-dom';
import { formatarParaReais } from '../../utils/formateNumbers';


const Box = styled.div`
    width: 950px;
    height: 521px;
    background: white;
    border-radius: 6px;
    
`

const PDescription = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 500; 
    color: #32323E;
    font-size: 22px;
    line-height: 27.83px;
    margin-top: 33px;

`

const PData = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 400; 
    color: #32323E;
    font-size: 14px;
    line-height: 21.56px;
    margin: 10px 0px 0px 0px;

`


export const CalculateData = () => {
    let location = useLocation();

    let { 
        abonoPecuniario,
        adiantar13Parcela,
        diasDeFerias,
        mediaHoraExtra,
        salarioBruto,
        valorFerias,
        umTercoFerias,
        abonoPec,
        umTercoAbono,
        adiantSala,
        inss,
        irrf,
        irrfPercent,
        inssPercent,
    } = location.state || {}

    abonoPecuniario = abonoPecuniario === 'Não' ? false : true;
    adiantar13Parcela = adiantar13Parcela === 'Não' ? false : true;

    let inflows = valorFerias + umTercoFerias + (abonoPecuniario && abonoPec) + (adiantar13Parcela && adiantSala) 
    let outflows = (inss + irrf)

    let final = inflows - outflows
    return (
        <div>
            <PDescription> Resultado</PDescription>
            <Box>

                <RowTable event={'Evento'} refe={'Ref'} proventos={'Proventos'} descontos={'Descontos'}/>
                <RowTable event={'Valor férias'} refe={'-'} proventos={formatarParaReais(valorFerias)} descontos={''}/>
                <RowTable event={'1/3 férias'} refe={'-'} proventos={formatarParaReais(umTercoFerias)} descontos={'-'}/>
                <RowTable event={'Abono pecuniário'} refe={'-'} proventos={abonoPecuniario && formatarParaReais(abonoPec)} descontos={'-'}/>
                <RowTable event={'1/3 abono pecuniário'} refe={'-'} proventos={abonoPecuniario && formatarParaReais(umTercoAbono)} descontos={'-'}/>
                <RowTable event={'Adiantamento 1 parcela 13'} refe={'-'} proventos={adiantar13Parcela && formatarParaReais(adiantSala)} descontos={'-'}/>
                <RowTable event={'INSS'} refe={`${inssPercent.toFixed(2)} %`} proventos={'-'} descontos={formatarParaReais(inss)}/>
                <RowTable event={'IRRF'} refe={`${irrfPercent.toFixed(2)} %`} proventos={'-'} descontos={formatarParaReais(irrf)}/>
                <RowTable event={'Totais'} refe={'-'} proventos={formatarParaReais(inflows)} descontos={formatarParaReais(outflows)}/>

                <div style={{display: 'flex'}}>
                    <PData style={{paddingLeft: '19px',  paddingTop: '6px', width: '50%'}}> Valor líquido de férias</PData>
                    <PData style={{ background: '#FEFFCF', width: '50%', height: '58px', margin: '0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> {formatarParaReais(final)} </PData>
                </div>
            </Box>
        </div>    
    )
}