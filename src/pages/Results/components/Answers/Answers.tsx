
import React from 'react';
import { useLocation } from 'react-router-dom';
import { formatToBRL } from '../../../../utils/formatToBRL';
import { Box, PData, PDataBold, PDescription} from './style'

export const Answers = () => {
    let location = useLocation();

    const { 
        userResponse: {
            hasMonetaryAllowance,
            advanceInstallment13,
            dependents,
            holidayDays,
            grossSalary,
            averageOvertime
        }
    } = location.state || {}

    return (
        <div>
            <PDescription> Cálculo</PDescription>
            <Box>
                <div style={{display: 'flex', paddingLeft: '30px', paddingTop: '10px', }}>
                    <div>
                        <div style={{display: 'flex',width: '450px'}}>
                            <PData> Salário bruto: </PData>
                            <PDataBold>{formatToBRL(grossSalary)} </PDataBold>
                        </div>

                        <div style={{display: 'flex'}}>
                            <PData> Dependentes: </PData>
                            <PDataBold>{dependents} </PDataBold>
                        </div>

                        <div style={{display: 'flex'}}>
                            <PData> Abono pecuniário: </PData>
                            <PDataBold>{hasMonetaryAllowance} </PDataBold>
                        </div>
                    </div>
                    <div >
                        <div style={{display: 'flex'}}>
                            <PData> Média hora extra: </PData>
                            <PDataBold>{formatToBRL(averageOvertime)} </PDataBold>
                        </div>
                        <div style={{display: 'flex'}}>
                            <PData> Dias de férias: </PData>
                            <PDataBold>{holidayDays} </PDataBold>
                        </div>
                        <div style={{display: 'flex'}}>
                            <PData>  Adiantar 1ª parcela 13º: </PData>
                            <PDataBold>{advanceInstallment13} </PDataBold>
                        </div>
                    </div>
                </div>
            </Box>
        </div>    
    )
}