import styled from "styled-components"
import { Select, NumberInput } from '@mantine/core';

export const Box = styled.div`
    max-width: 426px;
    width: 100%;
    height: 467px;
    background: white;
    margin-left: 75.5px;
    border-radius: 5px;

    @media (max-width: 1050px) {
        margin-left: 0;
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
        margin-left: 40px;
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
        padding: 40px;
    }
`