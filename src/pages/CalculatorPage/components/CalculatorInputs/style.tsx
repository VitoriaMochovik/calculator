import styled from "styled-components"
import { Select, NumberInput, Button } from '@mantine/core';

export const Box = styled.div`
    max-width: 426px;
    width: 100%;
    height: 467px;
    background: white;
    margin-left: 75.5px;
    border-radius: 5px;

    @media (max-width: 1050px) {
        margin-left: 0;
        padding-top: 22px;
        height: 400px;
    }
`

export const PDescription = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 500; 
    color: #32323E;
    font-size: 17px;
    line-height: 26.18px;
    margin-bottom: 22px;

    @media (max-width: 1050px) {
        margin-left: 50px;
        margin-bottom: 20px;
        font-size: 15px;
        line-height: 23px;
    }
`

export const MyInputR = styled(NumberInput)<any> `
    max-width: 156px;
    width: 100%;
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

    @media (max-width: 1050px) {
        max-width: 142px;
    }
`


export const MyInput = styled(NumberInput)<any> `
    max-width: 156px;
    width: 100%;
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

    @media (max-width: 1050px) {
        max-width: 142px;
    }
`
export const MySelect = styled(Select)<any>`
    max-width: 156px;
    width: 100%;
    margin-top: 1px;

    & > div > input {
        height: 42px;
    }


    & > div > p {
        font-size: 13px;
    
    }

    @media (max-width: 1050px) {
        max-width: 142px;
    }
`

export const Content = styled.div`
    padding-top: 24px;
    margin-left: 44px;

    @media (max-width: 1050px) {
        padding-top: 0;
        margin-left: 0;
        display: flex;
        flex-direction: column;
    }
`

export const Form = styled.form`
    @media (max-width: 1050px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 40px;
    }
`

export const Label = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 14px;
    margin: 0;
    line-height: 21.56px;

    @media (max-width: 1050px) {
        font-size: 13px;
        line-height: 19px;
    }
`

export const ContainerInput = styled.div`
    margin-top: 18px;

    @media (max-width: 1050px) {
        margin-top: 12px;
    }
`

export const ButtonCalculate = styled(Button)<any>`
    width: 334px;
    margin-top: 30px;
    height: 41.9px;
    background: #3133FF;
    borderRadius: 5px;

    @media (max-width: 1050px) {
        height: 38px;
        margin-top: 25px;
        width: 305px;
    }
`