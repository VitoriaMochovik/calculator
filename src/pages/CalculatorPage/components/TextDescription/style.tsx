import styled from 'styled-components';

export const Div = styled.div`
    padding-left: 70px;

    @media (max-width: 1050px) {
        padding-left: 0;

        margin-top: 30px;
    }
`

export const Title = styled.p`
    font-size: 38px;
    text-align: left;
    font-family: 'Inter', sans-serif;
    font-weight: 500; 
    color: #32323E;
    margin-top: 0;
    line-height: 48.7px;
    margin-bottom: 22.6px;
`

export const DivTitle = styled.div`
    max-width: 452px;
    width: 100%;
`

export const DivDescription = styled.div`
    max-width: 435px;
    width: 100%;
`

export const PDescription = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 400; 
    color: #32323E;
    font-size: 16px;
    line-height: 24.64px;

`

export const OlDescription = styled.ol`
    font-family: 'Inter', sans-serif;
    font-weight: 400; 
    color: #32323E;
    font-size: 16px;
    line-height: 24.64px;
    padding-left: 23px;
    margin-top: 26px;

    & > li {
        font-family: 'Inter', sans-serif;
        font-weight: 400; 
        color: #32323E;
        font-size: 16px;
        line-height: 24.64px;
       
    }
   

`