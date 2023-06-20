import styled from "styled-components";

export const DestaquesArea = styled.section`
  color: white;
  background-color: #0b0b0b;
  padding: 20px;
  position: relative;

  @media (max-width: 420px) {
    padding: 0;
  }
`;

export const TitleDes = styled.div`
  width: 40%;

  h2 {
    color: #baadfc;
    font-size: 21px;

    @media (max-width: 1020px) {
      font-size: 40px;
    }

    @media (max-width: 470px) {
      font-size: 30px;
    }
  }

  p {
    margin-top: 10px;
    font-size: 18px;

    @media (max-width: 1020px) {
      font-size: 30px;
    }

    @media (max-width: 470px) {
      font-size: 23px;
    }
  }

  button {
    padding: 10px 0px;
    width: 30%;
    margin-top: 20px;
    border: none;
    background-color: #baadfc;
    border-radius: 4px;
    font-size: 18px;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      background-color: #9484e0;
    }

    @media (max-width: 470px) {
      width: 90%;
    }
  }

  @media (max-width: 1020px) {
    text-align: center;
    width: 95%;
    margin-bottom: 40px;
  }

  @media (max-width: 400px) {
    margin-top: 40px;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  justify-content: space-between;
  margin-top: 40px;
  transition: 0.5s;
  position: relative;
  opacity: ${(props) => (props.moveUp ? 1 : 0)};
  top: ${(props) => (props.moveUp ? "0px" : "100px")};

  @media (max-width: 1020px) {
    width: 95%;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 660px) {
    width: 95%;
  }
`;

export const Products = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  @media (max-width: 1020px) {
    width: 100%;
  }

  @media (max-width: 660px) {
    align-items: center;
    margin-top: 40px;
  }
`;

export const Product = styled.div`
  margin-bottom: 40px;
  border-radius: 10px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
  display: flex;
  background-color: black;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
      color: #baadfc;
      font-size: 22px;
      width: 95%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        padding: 10px 20px;
        font-size: 17px;
        border-radius: 4px;
        border: none;
        background-color: #baadfc;
        letter-spacing: 1px;
        transition: 0.3s;
        cursor: pointer;

        &:hover {
          transform: scale(1.1);
        }

        @media (max-width: 420px) {
          font-size: 15px;
        }
      }

      @media (max-width: 660px) {
        margin-top: 30px;
        width: 100%;
      }

      @media (max-width: 420px) {
        font-size: 19px;
      }
    }
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 4px;

    @media (max-width: 660px) {
      width: 100%;
      height: 350px;
    }

    @media (max-width: 500px) {
      height: 250px;
    }

    @media (max-width: 400px) {
      height: 200px;
    }
  }

  p {
    margin-top: 10px;
    font-size: 14px;
  }

  @media (max-width: 1020px) {
    justify-content: space-between;
  }

  @media (max-width: 660px) {
    flex-direction: column-reverse;
    width: 100%;
  }

  @media (max-width: 420px) {
    width: 90%;
  }
`;

export const InfoProduct = styled.div`
  padding: 20px;

  @media (max-width: 1020px) {
    width: 100%;
  }
`;
