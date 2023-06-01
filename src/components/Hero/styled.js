import styled from "styled-components";

export const HeroTag = styled.div`
  margin: auto;
  width: 100%;
  height: 100vh;
  background-color: #0b0a24;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 40%;
    height: 400px;

    @media (max-width: 1060px) {
      height: 300px;
    }

    @media (max-width: 880px) {
      width: 70%;
      height: 400px;
    }

    @media (max-width: 600px) {
      width: 90%;
      height: 400px;
    }

    @media (max-width: 420px) {
      width: 95%;
      height: 300px;
    }
  }

  h1 {
    font-size: 30px;
    color: #baadfc;

    @media (max-width: 880px) {
      margin-top: 40px;
    }
  }

  p {
    font-size: 18px;
    width: 80%;
    margin-top: 20px;

    @media (max-width: 1060px) {
      width: 95%;
    }
  }

  .swiper {
    width: 80%;
    opacity: ${(props) => (props.smooth ? 1 : 0)};
    transition: 2s;
    padding: 50px 0px;
    margin-top: 50px;
    border-radius: 10px;
  }

  .swiper-slides {
    display: flex;
    align-items: center;
    height: 80%;

    @media (max-width: 880px) {
      flex-direction: column-reverse;
      text-align: center;
    }
  }

  a {
    text-decoration: none;
    color: #0b0a24;
    background-color: #baadfc;
    padding: 15px;
    display: block;
    margin-top: 20px;
    width: 40%;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    border-radius: 4px;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      background-color: black;
      color: #baadfc;
    }

    @media (max-width: 1060px) {
      width: 60%;
    }

    @media (max-width: 880px) {
      margin: auto;
      margin-top: 20px;
    }
  }

  @media (max-width: 880px) {
    height: 150vh;
  }

  @media (max-width: 600px) {
    height: 160vh;
  }

  @media (max-width: 500px) {
    height: 180vh;
  }
`;
