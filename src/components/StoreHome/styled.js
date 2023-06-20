import styled from "styled-components";

export const Store = styled.section`
  width: 100%;
  background-color: #0b0b0b;
  padding-top: 50px;
`;

export const MoveUp = styled.div`
  transition: 0.5s;
  position: relative;
  opacity: ${(props) => (props.moveUp ? 1 : 0)};
  top: ${(props) => (props.moveUp ? "0px" : "100px")};
`;

export const Products = styled.div`
  width: 90%;
  margin: auto;
  color: white;
  padding-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 8px 0px;
  width: 100%;
  font-size: 20px;
  background-color: transparent;
  border: 2px solid #baadfc;
  color: #baadfc;
  cursor: pointer;
`;

export const MenuProducts = styled.div`
  width: 90%;
  margin: auto;
  color: white;
  display: flex;

  div {
    width: 13%;
    display: flex;
    justify-content: left;
  }
`;

export const CategorysList = styled.ul`
  list-style: none;
  justify-content: space-around;
  font-size: 20px;
  width: ${(props) => (props.showCategorysList ? "87%" : "0%")};
  overflow: hidden;
  display: flex;
  transition: 0.3s;
  align-items: center;
  background-color: black;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;

  li {
    transition: 0.3s;
    padding: 0px 50px;
    cursor: pointer;

    &:hover {
      color: #a493fa;
    }
  }
`;

export const Product = styled.div`
  display: flex;
  min-height: 180px;
  border-radius: 4px;
  background-color: black;
  width: 48%;
  margin-top: 50px;

  img {
    min-width: 230px;
    height: 180px;
    border-radius: 4px;
  }
`;

export const InfoProducts = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    margin-bottom: 10px;
    font-size: 18px;
  }

  p {
    font-size: 13px;

    span {
      font-size: 14px;
      color: blue;
    }
  }

  span {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 22px;
    color: #baadfc;
    font-weight: bold;

    button {
      padding: 8px 20px;
      font-size: 15px;
      border-radius: 4px;
      border: none;
      background-color: #baadfc;
      letter-spacing: 1px;
      transition: 0.3s;
      cursor: pointer;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
