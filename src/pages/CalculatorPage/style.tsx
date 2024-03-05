import styled from 'styled-components';

export const Content = styled.div`
  background: #EEF2F8;
  display: flex;
  padding-top: 66px;
  min-height: 100vh;

  @media (max-width: 1050px) {
    flex-direction: column-reverse;
    align-items: center;
    padding-top: 3px;
  }
`