
import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, CloseButton, Button, InputProps, Select,NumberInput } from '@mantine/core';
import { IMaskInput } from 'react-imask';
import { useForm, Controller } from 'react-hook-form';
import { cashAllowance, inssDiscount, inssPercentage, irrfDiscount, irrfPercentage, oneThirdOfHolidays, oneThirdPecuniaryAllowance, thirteenFirstSalary, valueOfHolidays, workDayValue } from '../../utils/calculator';
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Box = styled.div`
    width: 426px;
    height: 467px;
    background: white;
    margin-left: 75.5px;
    border-radius: 5px;
`

const PDescription = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 500; 
    color: #32323E;
    font-size: 17px;
    line-height: 26.18px;
    margin-bottom: 22px;

`

const MyInputR = styled(NumberInput)<any> `
    width: 156px;
    margin-top: 1px;
    
    & > div > input {
        height: 42px;
        padding-left: 45px;
    }

    & > div > div {
        background: #EEF2F8;
        width: 39px;
        height: 40px;
    }

    & > div > div > p {
        font-size: 13px;
       
    }
`


const MyInput = styled(NumberInput)<any> `
    width: 156px;
    margin-top: 1px;
    
    & > div>  input {
        height: 42px;
    }

    & > div > div {
        background: #EEF2F8;
        width: 39px;
        height: 40px;
    }

    & > div > div > p {
        font-size: 13px;
       
    }
`
const MySelect = styled(Select)<any>`
    width: 156px;
    margin-top: 1px;

    & > div > input {
        height: 42px;
    }


    & > div > p {
        font-size: 13px;
    
    }
`

export const CaculatorInputs = () => {
    const { control, handleSubmit, setValue, reset } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data: any) => {
        const mediaHoraExtra = data.mediaHoraExtra || 0
        const valueHolydays = valueOfHolidays(workDayValue(data.salarioBruto, mediaHoraExtra), data.diasDeFerias)
        const totalValueVacation = valueHolydays + oneThirdOfHolidays(valueHolydays)
 
        
          
          const validator = {
            'Não': false,
            'Sim': true
          };

        
        let result = {
            'abonoPecuniario': data.abonoPecuniario,
            'adiantar13Parcela': data.adiantar13Parcela,
            'dependentes': data.dependentes,
            'diasDeFerias': data.diasDeFerias,
            'mediaHoraExtra': mediaHoraExtra,
            'salarioBruto': data.salarioBruto,

            'valorFerias': valueHolydays,
            'umTercoFerias': oneThirdOfHolidays(valueHolydays),
            'abonoPec': cashAllowance(data.salarioBruto, mediaHoraExtra),
            'umTercoAbono': oneThirdPecuniaryAllowance(cashAllowance(data.salarioBruto, mediaHoraExtra)),
            'adiantSala': thirteenFirstSalary(data.salarioBruto, mediaHoraExtra),
            'inss': inssDiscount(totalValueVacation),
            'irrf': irrfDiscount(data.dependentes, totalValueVacation, inssDiscount(totalValueVacation)),
            'inssPercent': inssPercentage(totalValueVacation, inssDiscount(totalValueVacation)),
            'irrfPercent': irrfPercentage(totalValueVacation, irrfDiscount(data.dependentes, totalValueVacation, inssDiscount(totalValueVacation)))
            // 'valorLiquidoFerias': totalValueVacation +

        }

        navigate("/results",  { state:  result })
    };

    

  return (
    <div>
        <Box>
            <div style={{paddingTop: '23.85px', marginLeft: '44px'}}>
                <PDescription> Calculadora de Férias Online</PDescription>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div style={{display: 'flex',  }}>
                        <div style={{marginRight: '18px'}}>
                            <div>
                                <p style={{fontFamily: 'Inter, sans-serif', fontWeight: '400', fontSize: '14px', margin: '0', lineHeight: '21.56px'}} >
                                    Salário bruto
                                </p> 
                               
                                <Controller
                                    control={control}
                                    name="salarioBruto"
                                    render={({ field }) => (
                                    <MyInputR
                                        {...field}
                                        leftSection={<p>R$</p>}
                                        decimalScale={2}
                                        fixedDecimalScale
                                        decimalSeparator=","
                                        defaultValue={0.00}
                                        hideControls
                                    />
                                    )}
                                />
                                
                            </div>
                            <div style={{marginTop: '18px'}}>
                                <p style={{fontFamily: 'Inter, sans-serif', fontWeight: '400', fontSize: '14px', margin: '0', lineHeight: '21.56px'}} >
                                    Dependentes
                                </p> 
                                <Controller
                                    control={control}
                                    name='dependentes'
                                    render={({field}) => 
                                       <MyInput {...field} 
                                       hideControls/>  
                                    }
                                />   
                            </div>

                            <div style={{marginTop: '18px'}}>
                                <p style={{fontFamily: 'Inter, sans-serif', fontWeight: '400', fontSize: '14px', margin: '0', lineHeight: '21.56px'}} >
                                    Abono pecuniário 1/3
                                </p> 
                                <Controller
                                    control={control}
                                    name='abonoPecuniario'
                                    render={({field}) => (
                                        <MySelect  {...field} data={['Sim', 'Não', ]}/>
                                           
                                     
                                    )}
                                />   
                                
                            </div>
                        
                        </div>

                    
                        <div>
                            
                            <div>
                                <p style={{fontFamily: 'Inter, sans-serif', fontWeight: '400', fontSize: '14px', margin: '0', lineHeight: '21.56px'}} >
                                    Média de hora extra
                                </p> 
                                <Controller
                                    control={control}
                                    name='mediaHoraExtra'
                                    render={({field}) => (
                                        <MyInputR {...field} leftSection={<p>R$</p>} decimalScale={2}
                                        fixedDecimalScale
                                        decimalSeparator=","
                                        defaultValue={0.00}
                                        hideControls/>
                                    )}
                                />   
                               
                            </div>
                        


                            <div style={{marginTop: '18px'}}>
                                <p style={{fontFamily: 'Inter, sans-serif', fontWeight: '400', fontSize: '14px', margin: '0', lineHeight: '21.56px'}} >
                                    Dias de férias
                                </p> 


                                <Controller
                                    control={control}
                                    name='diasDeFerias'
                                    render={({field}) => (
                                        <MyInput {...field}  
                                        hideControls/>
                                    )}
                                />   
                            </div>

                            <div style={{marginTop: '18px'}}>
                                <p style={{fontFamily: 'Inter, sans-serif', fontWeight: '400', fontSize: '14px', margin: '0', lineHeight: '21.56px'}} >
                                    Adiantar 13 parcela?
                                </p> 
                                <Controller
                                    control={control}
                                    name='adiantar13Parcela'
                                    render={({field}) => (
                                        <MySelect  {...field} data={['Sim', 'Não', ]}/>
                                           
                                     
                                    )}
                                />   
                            </div>
                        </div>
                        
                    </div>
                    

                    <Button type="submit" style={{width: '334px', marginTop: '30px', height: '41.9px', background: '#3133FF', borderRadius: '5px'}}>
                        Calcular
                    </Button>
                    <Button   type='button' onClick={reset} style={{ width: '334px', height: '41.9px', background: 'transparent', color: '#5F5F5F', marginTop: '8px', paddingLeft: '15px'}}>
                        Limpar
                    </Button>
                </form>
            </div>
            

        </Box>
      
    </div>
  );
}


