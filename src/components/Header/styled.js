import styled from "styled-components";

export const HeaderTag = styled.header`
  font-size: 22px;
  color: white;
  position: fixed;
  box-shadow: ${(props) =>
    props.headerColor ? "2px 2px 10px rgba(0, 0, 0, 0.5)" : "none"};
  background-color: ${(props) => (props.headerColor ? "black" : "transparent")};
  z-index: 9998;
  width: 100%;
  transition: 0.3s;
  padding: 20px;

  @media (max-width: 880px) {
    background-color: black;
  }
`;

export const Container = styled.div`
  margin: auto;
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    display: flex;
    align-items: center;
    font-size: 24px;

    span {
      margin-left: 15px;
    }

    @media (max-width: 400px) {
      font-size: 21px;
    }
  }

  @media (max-width: 470px) {
    width: 95%;
  }
`;

export const List = styled.ul`
  list-style: none;
  font-size: 17px;
  display: flex;
  align-items: center;

  li {
    margin-left: 25px;
    position: relative;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      color: #baadfc;
    }

    span {
      position: absolute;
      right: -10px;
      top: 0;
      background-color: #baadfc;
      width: 25px;
      height: 25px;
      border-radius: 12.5px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: black;
      z-index: 9999;
      font-weight: bold;
    }
  }

  @media (max-width: 880px) {
    height: ${(props) => (props.showMobileMenu ? "300px" : "0px")};
    transition: 0.3s;
    overflow: hidden;
    position: absolute;
    width: 100%;
    left: 0;
    top: 80px;
    background-color: black;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    li {
      margin-top: 25px;
      margin-left: 0px;
    }
  }
`;

export const MobileMenu = styled.span`
  display: none;
  position: absolute;
  top: 20px;
  right: 60px;
  cursor: pointer;

  @media (max-width: 880px) {
    display: block;
  }

  @media (max-width: 470px) {
    right: 30px;
  }
`;
