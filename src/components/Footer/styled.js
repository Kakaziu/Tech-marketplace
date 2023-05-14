import styled from 'styled-components'

export const FooterTag = styled.footer`
  background-color: #0b0b0b;
  border-top-right-radius: 100px;
  border-top-left-radius: 100px;
  margin-top: 50px;
  color: white;

  div{
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;

    span{
      font-size: 25px;
      color: white;
      margin-right: 15px;
      font-weight: bold;
    }
  }
`

export const ContainerFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: auto;

  ul{
    list-style: none;
    margin-top: 20px;

    li{
      display: flex;
      align-items: center;
    }
  }

  div{
    display: flex;
    flex-direction: column;
    width: 33%;
  }
`