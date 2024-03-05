import { RowTable } from '../RowTable/RowTable';
import { useLocation } from 'react-router-dom';
import { formatToBRL } from '../../../../utils/formatToBRL';
import { Box, PData, PDescription} from './style'


export const CalculateData = () => {
    let location = useLocation();

    let { 
        userResponse: {
            hasMonetaryAllowance,
            advanceInstallment13,
        },
        calculatedValues: {
            valueHolydays,
            thirdHolydayValue,
            monetaryAllowance,
            thirdAllowance,
            salaryAdvance,
            inss,
            irrf,
            irrfPercent,
            inssPercent,
        },
    } = location.state || {}

    hasMonetaryAllowance = hasMonetaryAllowance === 'Não' ? false : true;
    advanceInstallment13 = advanceInstallment13 === 'Não' ? false : true;

    let inflows = valueHolydays + thirdHolydayValue + (hasMonetaryAllowance && monetaryAllowance) + (advanceInstallment13 && salaryAdvance) 
    let outflows = (inss + irrf)

    let final = inflows - outflows
    return (
        <div>
            <PDescription> Resultado</PDescription>
            <Box>
                <RowTable event={'Evento'} refe={'Ref'} proventos={'Proventos'} descontos={'Descontos'}/>
                <RowTable event={'Valor férias'} refe={'-'} proventos={formatToBRL(valueHolydays)} descontos={''}/>
                <RowTable event={'1/3 férias'} refe={'-'} proventos={formatToBRL(thirdHolydayValue)} descontos={'-'}/>
                <RowTable event={'Abono pecuniário'} refe={'-'} proventos={hasMonetaryAllowance && formatToBRL(monetaryAllowance)} descontos={'-'}/>
                <RowTable event={'1/3 abono pecuniário'} refe={'-'} proventos={hasMonetaryAllowance && formatToBRL(thirdAllowance)} descontos={'-'}/>
                <RowTable event={'Adiantamento 1 parcela 13'} refe={'-'} proventos={advanceInstallment13 && formatToBRL(salaryAdvance)} descontos={'-'}/>
                <RowTable event={'INSS'} refe={`${inssPercent.toFixed(2)} %`} proventos={'-'} descontos={formatToBRL(inss)}/>
                <RowTable event={'IRRF'} refe={`${irrfPercent.toFixed(2)} %`} proventos={'-'} descontos={formatToBRL(irrf)}/>
                <RowTable event={'Totais'} refe={'-'} proventos={formatToBRL(inflows)} descontos={formatToBRL(outflows)}/>
                <div style={{display: 'flex'}}>
                    <PData style={{paddingLeft: '19px',  paddingTop: '6px', width: '50%'}}> Valor líquido de férias</PData>
                    <PData style={{ background: '#FEFFCF', width: '50%', height: '58px', margin: '0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> {formatToBRL(final)} </PData>
                </div>
            </Box>
        </div>    
    )
}