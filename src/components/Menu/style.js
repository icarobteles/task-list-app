import styled from "styled-components";

export const MenuContainer = styled.header`
  width: 100%;
  height: 70px;
  padding: 0px 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--terciary-color-100);
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);

  position: fixed;
  top: 0;
  left: 0;

  @media (min-width: 1440px) {
    padding: 0px 100px;
  }

  .logoContainer {
    height: 100%;
    padding: 10px 0px;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .menuContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  button {
    width: 40px;
    height: 40px;
    background: none;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;

    .ico {
      color: var(--primary-color-900);
    }

    a {
      width: 2rem;
      height: 2rem;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:hover {
      cursor: pointer;
      .ico {
        color: var(--primary-color-100);
      }
    }
  }
`;
