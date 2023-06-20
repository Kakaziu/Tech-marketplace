import styled from "styled-components";

export const InfoHomeTag = styled.section`
  color: white;
  margin: auto;
  margin-top: 60px;
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s;
  position: relative;
  opacity: ${(props) => (props.moveUp ? 1 : 0)};
  top: ${(props) => (props.moveUp ? "0px" : "100px")};

  div {
    width: 55%;

    h2 {
      margin-bottom: 20px;
      font-size: 60px;

      @media (max-width: 500px) {
        font-size: 40px;
      }
    }

    p {
      font-size: 19px;

      @media (max-width: 500px) {
        font-size: 17px;
      }
    }

    @media (max-width: 1100px) {
      text-align: center;
    }

    @media (max-width: 1100px) {
      width: 80%;
    }

    @media (max-width: 700px) {
      width: 95%;
    }
  }

  img {
    width: 700px;
  }

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;
