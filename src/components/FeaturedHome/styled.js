import styled from 'styled-components'

export const DestaquesArea = styled.section`
  color: white;
  background-color: #0b0b0b;
  padding: 20px;
  position: relative;
`

export const TitleDes = styled.div`
  width: 40%;

  h2{
    color: #baadfc;
    font-size: 21px;
  }

  p{
    width: 90%;
    margin-top: 10px;
    font-size: 18px;
  }

  button{
    padding: 10px 0px;
    width: 30%;
    margin-top: 20px;
    border: none;
    background-color: #baadfc;
    border-radius: 4px;
    font-size: 18px;
    transition: 0.2s;
    cursor: pointer;

    &:hover{
      background-color: #a195de;
    }
  }
`

export const Container = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  justify-content: space-between;
  margin-top: 40px;
  transition: 0.5s;
  position: relative;
  opacity: ${(props) => props.moveUp ? 1 : 0};
  top: ${(props) => props.moveUp ? '0px' : '100px'};
`

export const Products = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`

export const Product = styled.div`
  margin-bottom: 40px;
  border-radius: 10px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
  display: flex;
  background-color: black;

  div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span{
      color: #a0a0a0;
      font-size: 22px;
      width: 95%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      button{
        padding: 10px 20px;
        font-size: 17px;
        border-radius: 4px;
        border: none;
        background-color: #baadfc;
        letter-spacing: 1px;
        transition: 0.3s;
        cursor: pointer;
        
        &:hover{
          transform: scale(1.1);
        }
      }
    }
  }

  img{
    width: 200px;
    height: 100%;
    border-radius: 4px;
  }

  p{
    margin-top: 10px;
    font-size: 14px;
  }
`

export const InfoProduct = styled.div`
  padding: 20px;
`