import styled from "styled-components"
import { Select, NumberInput } from '@mantine/core';

export const Box = styled.div`
    width: 426px;
    height: 467px;
    background: white;
    margin-left: 75.5px;
    border-radius: 5px;
`

export const PDescription = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 500; 
    color: #32323E;
    font-size: 17px;
    line-height: 26.18px;
    margin-bottom: 22px;

`

export const MyInputR = styled(NumberInput)<any> `
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


export const MyInput = styled(NumberInput)<any> `
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
export const MySelect = styled(Select)<any>`
    width: 156px;
    margin-top: 1px;

    & > div > input {
        height: 42px;
    }


    & > div > p {
        font-size: 13px;
    
    }
`