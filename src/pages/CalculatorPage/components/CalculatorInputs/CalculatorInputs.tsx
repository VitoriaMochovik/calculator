
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Input, CloseButton, Button, InputProps, Select,NumberInput } from '@mantine/core';
import { IMaskInput } from 'react-imask';
import { useForm, Controller } from 'react-hook-form';
import { cashAllowance, inssDiscount, inssPercentage, irrfDiscount, irrfPercentage, oneThirdOfHolidays, oneThirdPecuniaryAllowance, thirteenFirstSalary, valueOfHolidays, workDayValue } from '../../../../utils/calculator';
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Box, PDescription, MyInputR, MyInput, MySelect} from './style';
import { Validation } from './rules';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';

const resolver = classValidatorResolver(Validation)

export const CaculatorInputs = () => {
    const { control, handleSubmit, reset, setValue, watch } = useForm<Validation>({
        defaultValues: {
            hasMonetaryAllowance: 'Não',
            advanceInstallment13: 'Não',
            dependents: 0,
            holidayDays: 0,
            averageOvertime: null,
            grossSalary: null
        },
        resolver,
        
    });
    const navigate = useNavigate();

    const onSubmit = (data: any) => {
        const averageOvertime = data.averageOvertime || 0
        const valueHolydays = valueOfHolidays(workDayValue(data.grossSalary || 0, averageOvertime), data.holidayDays || 0)
        const totalValueVacation = valueHolydays + oneThirdOfHolidays(valueHolydays)

        let result = {
            userResponse: {
                hasMonetaryAllowance: data.hasMonetaryAllowance,
                advanceInstallment13: data.advanceInstallment13,
                dependents: data.dependents || 0,
                holidayDays: data.holidayDays || 0,
                averageOvertime: averageOvertime,
                grossSalary: data.grossSalary || 0,
            },
            calculatedValues: {
                valueHolydays: valueHolydays,
                thirdHolydayValue: oneThirdOfHolidays(valueHolydays),
                monetaryAllowance: cashAllowance(data.grossSalary || 0, averageOvertime),
                thirdAllowance: oneThirdPecuniaryAllowance(cashAllowance(data.grossSalary || 0, averageOvertime)),
                salaryAdvance: thirteenFirstSalary(data.grossSalary || 0, averageOvertime),
                inss: inssDiscount(totalValueVacation),
                irrf: irrfDiscount(data.dependents || 0, totalValueVacation, inssDiscount(totalValueVacation)),
                inssPercent: inssPercentage(totalValueVacation, inssDiscount(totalValueVacation)),
                irrfPercent: irrfPercentage(totalValueVacation, irrfDiscount(data.dependents || 0, totalValueVacation, inssDiscount(totalValueVacation)))
            }
        }

        navigate("/results",  { state:  result })
    };

    const resetForm = () => {
        reset({
            hasMonetaryAllowance: 'Não',
            advanceInstallment13: 'Não',
            dependents: 0,
            holidayDays: 0,
            averageOvertime: 0,
            grossSalary: 0
        });
    }


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
                                        name="grossSalary"
                                        render={({ field }) => (
                                        <MyInputR
                                            {...field}
                                            leftSection={<p>R$</p>}
                                            decimalScale={2}
                                            fixedDecimalScale
                                            decimalSeparator=","
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
                                        name='dependents'
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
                                        name='hasMonetaryAllowance'
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
                                        name='averageOvertime'
                                        render={({field}) => (
                                            <MyInputR {...field} leftSection={<p>R$</p>} decimalScale={2}
                                            fixedDecimalScale
                                            decimalSeparator=","
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
                                        name='holidayDays'
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
                                        name='advanceInstallment13'
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
                        <Button   type='button' onClick={resetForm} style={{ width: '334px', height: '41.9px', background: 'transparent', color: '#5F5F5F', marginTop: '8px', paddingLeft: '15px'}}>
                            Limpar
                        </Button>
                    </form>
                </div>
            </Box>
        </div>
    );
}


