import styled from "styled-components";

export const FooterTag = styled.footer`
  background-color: #0b0b0b;
  border-top-right-radius: 100px;
  border-top-left-radius: 100px;
  margin-top: 50px;
  color: white;
  padding: 30px;

  div {
    padding-top: 30px;
    margin: auto;
  }
`;

export const TitleFooter = styled.span`
  font-size: 25px;
  color: white;
  display: flex;
  width: 13%;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

export const ContainerFooter = styled.div`
  display: flex;
  width: 90%;
  margin: auto;

  ul {
    list-style: none;
    margin-top: 20px;

    li {
      display: flex;
      align-items: center;
      margin-top: 10px;

      span {
        margin-right: 10px;
        margin-top: 3px;
      }

      @media (max-width: 850px) {
        justify-content: center;
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 200px;

    @media (max-width: 850px) {
      width: 100%;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;
