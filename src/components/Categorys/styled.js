import styled from 'styled-components'

export const CategorysTag = styled.section`
  width: 100%;
  background-color: #0b0a24;
  color: white;
  padding: 30px;
  text-align: center;


  hr{
    width: 50px;
    margin: auto;
    background-color: #baadfc;
    height: 8px;
    border: none;
    border-radius: 20px;
    margin-bottom: 10px;
  }
`

export const CategorysArea  = styled.div`
  margin: auto;
  margin-top: 50px;
  width: 90%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 50px;
`


export const Overlay = styled.div`
  position: absolute;
  z-index: 9997;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  transition: 0.3s;
  cursor: pointer;

  &:hover{
    background-color: rgba(0, 0, 0, 0.7);
  }
`

export const Category  = styled.div`
  width: 250px;
  height: 500px;
  position: relative;
  border-radius: 10px;
  margin-top: 40px;
  transition: 0.3s;

  img{
    object-fit: cover;
    width: 250px;
    height: 100%;
    border-radius: 10px;
  }

  span{
    position: absolute;
    z-index: 9998;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    font-weight: bold;
    font-size: 22px;
    transition: 0.3s;
  }
`