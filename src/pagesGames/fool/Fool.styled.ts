import styled from "styled-components";

export const FoolStyled = styled.section`

  .game__user {
    position: static;
  }
  
  .game__main--grid {
    position: relative;
  }

  .game-my-cards {
    margin-bottom: -49px;
    width: 780px;

    &__list {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      margin-left: -5%;
    }

    &__item {
      max-width: 100px;
      min-width: 100px;
      margin-right: -5%;
      transition: all .3s ease;

      img {
        width: 100%;
        height: 100%;
        max-height: 100px;
        object-fit: cover;
        object-position: top;
        transition: all .3s ease;
        box-shadow: 0 8.93px 8.93px 0 rgba(0, 0, 0, .2509803922);
      }

      &.can-drop:hover {
        cursor: pointer;
        img {
          max-height: 120px;
        }
      }

      &.can-drop._active {
        img {
          max-height: 140px;
        }
      }
      //
      //&.can-drop._active,
      //&.can-drop:hover {
      //  img {
      //    max-height: 100px;
      //  }
      //  cursor: default;
      //}
    }
  }

`
