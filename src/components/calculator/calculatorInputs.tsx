
import React from 'react';
import styled from 'styled-components';
import { Input, CloseButton, Button, InputProps } from '@mantine/core';

const Box = styled.div`
    width: 426px;
    height: 467px;
    background: white;
    margin-left: 75.5px;
`

const PDescription = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 500; 
    color: #32323E;
    font-size: 17px;
    line-height: 26.18px;
    margin-bottom: 22px;

`

const MyInput = styled(Input)<InputProps> `
    width: 156px;
    margin-top: 1px;
    
    & > input {
        height: 42px;
    }

    & > div {
        background: #EEF2F8;
        width: 39px;
        height: 40px;
    }

    & > div > p {
        font-size: 13px;
       
    }
`

export const CaculatorInputs = () => {
  return (
    <div>
        <Box>
            <div style={{paddingTop: '23.85px', marginLeft: '44px'}}>
                <PDescription> Calculadora de Férias Online</PDescription>
                <div style={{display: 'flex',  }}>
                    <div style={{marginRight: '18px'}}>
                        <div>
                            <p style={{fontFamily: 'Inter, sans-serif', fontWeight: '400', fontSize: '14px', margin: '0', lineHeight: '21.56px'}} >
                                Salário bruto
                            </p> 
                            <MyInput  
                                leftSection={<p>R$</p>}
                            />
                            
                            
                        </div>
                        <div style={{marginTop: '18px'}}>
                            <p style={{fontFamily: 'Inter, sans-serif', fontWeight: '400', fontSize: '14px', margin: '0', lineHeight: '21.56px'}} >
                                Dependentes
                            </p> 
                            <MyInput  />
                        </div>

                        <div style={{marginTop: '18px'}}>
                            <p style={{fontFamily: 'Inter, sans-serif', fontWeight: '400', fontSize: '14px', margin: '0', lineHeight: '21.56px'}} >
                                Abono pecuniário 1/3
                            </p> 
                            <MyInput />
                        </div>
                       
                    </div>

                   
                    <div>
                        {/* <Input.Wrapper style={{fontFamily: 'Inter, sans-serif', fontWeight: '400', fontSize: '14px'}}label="Média de hora" >
                            <Input style={{width: '156px', height: '41.9px'}} leftSection={<p>R$</p>} />
                        </Input.Wrapper> */}
                        {/* <InputMoney leftSection={<div>R$</div>} /> */}
                        <div>
                            <p style={{fontFamily: 'Inter, sans-serif', fontWeight: '400', fontSize: '14px', margin: '0', lineHeight: '21.56px'}} >
                                Média de hora extra
                            </p> 
                            <MyInput leftSection={<p>R$</p>} />
                        </div>
                       


                        <div style={{marginTop: '18px'}}>
                            <p style={{fontFamily: 'Inter, sans-serif', fontWeight: '400', fontSize: '14px', margin: '0', lineHeight: '21.56px'}} >
                                Dias de férias
                            </p> 
                            <MyInput />
                        </div>

                        <div style={{marginTop: '18px'}}>
                            <p style={{fontFamily: 'Inter, sans-serif', fontWeight: '400', fontSize: '14px', margin: '0', lineHeight: '21.56px'}} >
                                Adiantar 13 parcela?
                            </p> 
                            <MyInput />
                        </div>
                    </div>
                </div>

                <Button style={{width: '334px', marginTop: '30px', height: '41.9px'}}>
                    Calcular
                </Button>
                <Button style={{marginTop: '10px', width: '334px', height: '41.9px', background: 'transparent', color: '#5F5F5F'}}>
                    Limpar
                </Button>
            </div>
            

        </Box>
      
    </div>
  );
}


