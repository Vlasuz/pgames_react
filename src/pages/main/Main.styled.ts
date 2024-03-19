import styled from "styled-components";

export const MainStyled = styled.main`
    .rooms__list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      
      @media screen and (max-width: 576px) {
        grid-template-columns: 1fr;
      }
    }
  
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .intro__block {
    padding: 0;
  }
  
  .intro__slider,
  .intro .swiper {
    width: 100%;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .intro__slider--list {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70vh;
  }
  
  .intro__decor {
    width: 80%;
  }
  
  .swiper-slide:not(.swiper-slide-active) {
    opacity: 0 !important;
    -webkit-transition: all 1s ease;-moz-transition: all 1s ease;-ms-transition: all 1s ease;-o-transition: all 1s ease;transition: all 1s ease;
  }
  .swiper-slide-active {
    opacity: 1;
  }
`
