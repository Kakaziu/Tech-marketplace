import styled from 'styled-components'

export const Store = styled.section`
  width: 100%;
  background-color: #0b0b0b;
  padding-top: 50px;

  hr{
    width: 50px;
    margin: auto;
    background-color: #baadfc;
    height: 8px;
    border: none;
    border-radius: 20px;
    margin-bottom: 10px;
  }

  h2{
    text-align: center;
    color: white;
    margin-bottom: 30px;
  }
`

export const Products = styled.div`
  width: 90%;
  margin: auto;
  color: white;
  padding-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Product = styled.div`
  display: flex;
  min-height: 180px;
  border-radius: 4px;
  background-color: black;
  width: 48%;
  margin-top: 50px;

  img{
    width: 230px;
    height: 180px;
    border-radius: 4px;
  }
`

export const InfoProducts = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3{
    margin-bottom: 10px;
    font-size: 18px;
  }

  p{
    font-size: 13px;

    span{
      font-size: 14px;
      color: blue;
    }
  }

  span{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 22px;
    color: #baadfc;
    font-weight: bold;

    button{
      padding: 8px 20px;
      font-size: 15px;
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
`

export const DirectButton = styled.a`
  width: 20%;
  display: block;
  margin: auto;
  padding: 10px 0px;
  text-align: center;
  font-size: 19px;
  border-radius: 4px;
  border: none;
  color: #baadfc;
  cursor: pointer;
  
  &:hover{
    color: #a195de;
  }
`