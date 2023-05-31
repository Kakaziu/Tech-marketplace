import styled from 'styled-components'

export const HeaderCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  width: 95%;

   h3{
    font-size: 20px;
    color: #baadfc;
  }

  button{
    background-color: transparent;
    border: none;
    font-size: 20px;
    color: red;
    cursor: pointer;
  }
`

export const CartTag = styled.div`
  position: absolute;
  right: 8%;
  display: ${(props) => props.showCart ? 'block' : 'none'};
  top: ${(props) => props.showCart ? '110%' : '100%'};
  opacity: ${(props) => props.showCart ? '1' : '0'};
  background-color: #0b0b0b;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 0px 10px  rgba(255, 255, 255, 0.2);
  width: 450px;
  transition: 0.3s;
  max-height: 350px;
`

export const ProductsCar = styled.div`
  margin-top: 20px;
  overflow-y: scroll;
  max-height: 200px;
  padding: 0px 10px;

  &::-webkit-scrollbar{
    width: 5px;
  }  

  &::-webkit-scrollbar-thumb{
    background-color: #baadfc;
    width: 5px;
    border-radius: 10px
  }
`

export const ProductCar = styled.div`
  display: flex;
  margin-top: 10px;
  background-color: black;
  border-radius: 4px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);

  img{
    width: 120px;
    height: 120px;
    border-radius: 4px;
  }

  
`

export const InfoProductCar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 15px;
`

export const ProductCarDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #baadfc;

  span{
    font-size: 15px;
    font-weight: lighter;
    color: white;
  }
`

export const ProductCarActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  span{
    display: block;
    background-color: #baadfc;
    color: black;
    width:30px;
    height: 30px;
    border-radius: 20px;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
`

export const CartInfos = styled.div`
  font-size: 21px;
  margin-top: 25px;
  color: #baadfc;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Btn = styled.button`
    padding: 8px 0px;
    width: 170px;
    font-size: 18px;
    background-color: ${(props) => props.color};
    border: none;
    border-radius: 4px;
    transition: 0.3s;
    cursor: pointer;
    color: ${(props) => props.textColor};

    &:hover{
      background-color: ${(props) => props.hoverColor}
    }
`