import { Button } from '@mantine/core';
import { useForm, Controller } from 'react-hook-form';
import { cashAllowance, inssDiscount, inssPercentage, irrfDiscount, irrfPercentage, oneThirdOfHolidays, oneThirdPecuniaryAllowance, thirteenFirstSalary, valueOfHolidays, workDayValue } from '../../../../utils/calculator';
import { useNavigate } from "react-router-dom";
import { Box, PDescription, MyInputR, MyInput, MySelect, Content, Form, Label, ContainerInput, ButtonCalculate} from './style';
import { Validation } from './rules';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';

const resolver = classValidatorResolver(Validation)

export const CaculatorInputs = () => {
    const { control, handleSubmit, reset } = useForm<Validation>({
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
                <Content>
                    <PDescription> Calculadora de Férias Online</PDescription>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <div style={{display: 'flex',  }}>
                            <div style={{marginRight: '18px'}}>
                                <div>
                                    <Label>
                                        Salário bruto
                                    </Label> 
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
                                <ContainerInput>
                                    <Label>
                                        Dependentes
                                    </Label> 
                                    <Controller
                                        control={control}
                                        name='dependents'
                                        render={({field}) => 
                                        <MyInput {...field} 
                                        hideControls/>  
                                        }
                                    />   
                                </ContainerInput>
                                <ContainerInput>
                                    <Label>
                                        Abono pecuniário 1/3
                                    </Label> 
                                    <Controller
                                        control={control}
                                        name='hasMonetaryAllowance'
                                        render={({field}) => (
                                            <MySelect  {...field} data={['Sim', 'Não', ]}/>
                                            
                                        
                                        )}
                                    />   
                                </ContainerInput>
                            </div>
                            <div>
                                <div>
                                    <Label>
                                        Média de hora extra
                                    </Label> 
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
                                <ContainerInput>
                                    <Label>
                                        Dias de férias
                                    </Label> 


                                    <Controller
                                        control={control}
                                        name='holidayDays'
                                        render={({field}) => (
                                            <MyInput {...field}  
                                            hideControls/>
                                        )}
                                    />   
                                </ContainerInput>
                                <ContainerInput>
                                    <Label>
                                        Adiantar 13 parcela?
                                    </Label> 
                                    <Controller
                                        control={control}
                                        name='advanceInstallment13'
                                        render={({field}) => (
                                            <MySelect  {...field} data={['Sim', 'Não', ]}/>
                                            
                                        
                                        )}
                                    />   
                                </ContainerInput>
                            </div>
                        </div>
                        <ButtonCalculate type="submit">
                            Calcular
                        </ButtonCalculate>
                        <Button   type='button' onClick={resetForm} style={{ width: '334px', height: '41.9px', background: 'transparent', color: '#5F5F5F', marginTop: '8px', paddingLeft: '15px'}}>
                            Limpar
                        </Button>
                    </Form>
                </Content>
            </Box>
        </div>
    );
}


