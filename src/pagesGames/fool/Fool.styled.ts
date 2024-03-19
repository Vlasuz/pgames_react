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
  
  .game-my-cards__item {
    transition: max-height .3s ease;
  }
  
  .game__player--progress,
  .game__user--progress {
    transition: all 1s linear;
  }
  
  .game__table-cards--card,
  .game__table-cards--card img {
    transition: all .3s ease;
  }
  
  .game__table-cards--item_placeholder {
    transition: all .3s ease;
    padding: 0;
    max-width: 0;
    min-width: 0;
    
    img {
      width: 0;
      height: 100%;
      transition: all .3s ease;
      display: block;
    }
    
    &._active {
      padding: 0 40px;
      max-width: 23.7%;
      min-width: 17%;
      
      img {
        width: 100%;
      }
    }
  }
  

`
