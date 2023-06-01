import styled from "styled-components";

export const HeroTag = styled.div`
  margin: auto;
  width: 100%;
  height: 100vh;
  background-color: #0b0a24;
  color: white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 450px;
    height: 400px;
    position: relative;
  }

  h1 {
    font-size: 30px;
    color: #baadfc;
  }

  p {
    font-size: 18px;
    width: 80%;
    margin-top: 20px;
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
  }
`;
