import styled from "styled-components";

export const MainStyled = styled.main`
    .rooms__list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      
      @media screen and (max-width: 576px) {
        grid-template-columns: 1fr;
      }
    }
`
