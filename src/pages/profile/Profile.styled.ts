import styled from "styled-components";

export const ProfileStyled = styled.main`

  .select {
    &__head {
      border: none !important;
      padding: 18px !important;
      

      &:after {
        background: url("data:image/svg+xml,%3Csvg viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.99987 5.64258C4.78664 5.64258 4.57331 5.5641 4.41081 5.40716L0.244141 1.3893C-0.0813802 1.0754 -0.0813802 0.566894 0.244141 0.252999C0.569661 -0.0608956 1.09701 -0.0608956 1.42253 0.252999L4.99987 3.70396L8.578 0.253627C8.90352 -0.060268 9.43086 -0.060268 9.75638 0.253627C10.0819 0.567522 10.0819 1.07603 9.75638 1.38993L5.58971 5.40778C5.42695 5.56473 5.21341 5.64258 4.99987 5.64258Z' fill='%2361C8AF'/%3E%3C/svg%3E%0A") center/contain no-repeat
      }

    }

    .select__item {
      color: var(--teal-light);
      font-size: .875rem !important;
      line-height: 100% !important;
      display: flex;
      align-items: center;
      
      svg {
        width: 18px;
        height: 18px;
        path {
          fill: var(--teal-light) !important;
        }
      }
      
      &:hover {
        color: var(--teal-light) !important;
      }
      img,
      svg {
        margin-right: 7px;
      }
    }
  }

`
