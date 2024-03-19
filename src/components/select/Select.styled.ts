import styled from "styled-components";

export const SelectStyled = styled.div`

  width: 100%;
  position: relative;

  .select {

    &__head {
      width: 100%;
      background: #21201e;
      border: 1px solid #393834;
      border-radius: 6px;
      min-height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px;
      transition: all .3s ease;
      cursor: pointer;

      &:after {
        content: "";
        width: 10px;
        height: 20px;
        transition: all .3s ease;
        background: url("data:image/svg+xml,%3Csvg viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.99987 5.64258C4.78664 5.64258 4.57331 5.5641 4.41081 5.40716L0.244141 1.3893C-0.0813802 1.0754 -0.0813802 0.566894 0.244141 0.252999C0.569661 -0.0608956 1.09701 -0.0608956 1.42253 0.252999L4.99987 3.70396L8.578 0.253627C8.90352 -0.060268 9.43086 -0.060268 9.75638 0.253627C10.0819 0.567522 10.0819 1.07603 9.75638 1.38993L5.58971 5.40778C5.42695 5.56473 5.21341 5.64258 4.99987 5.64258Z' fill='%23F9F1DF'/%3E%3C/svg%3E%0A") center/contain no-repeat
      }

      &:hover {
        border-color: #525252;
        background: #292929;
      }

      .select__item {
        font-size: 1rem;
      }
    }

    &__body {
      border: 1px solid #3c3c3c;
      border-radius: 8px;
      box-shadow: 0 3px 3px rgba(0, 0, 0, .2);
      font-size: 13px;
      background: #292929;
      position: absolute;
      z-index: 3;
      width: 100%;
      padding: 8px;
      margin-top: 8px;
      display: none;

      .select__item {
        padding: 10px 20px;
        font-size: .8rem;
        display: flex;
        align-items: center;
        margin: 5px 0;
        border-radius: 6px;
        cursor: pointer;
        transition: all .3s ease;

        &:hover {
          color: #fff;
          background: #353535;
          text-shadow: 0 0 2px rgba(0, 0, 0, .3);
        }

        &._active {
          background: var(--dark-3);
        }
      }
    }
    &._active {
      .select__body {
        display: block;
      }

      .select__head {
        border-color: #525252;
        background: #292929;

        &:after {
          transform: rotate(180deg);
        }
      }
    }

  }
`
