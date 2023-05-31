import styled from 'styled-components'

export const FooterTag = styled.footer`
  background-color: #0b0b0b;
  border-top-right-radius: 100px;
  border-top-left-radius: 100px;
  margin-top: 50px;
  color: white;

  div{
    padding-top: 30px;
    margin: auto;
  }
`

export const TitleFooter = styled.span`
    font-size: 25px;
    color: white;
    display: flex;
    width: 13%;
    font-weight: bold;
    align-items: center;
    justify-content: space-between;
    margin: auto;
`

export const ContainerFooter = styled.div`
  display: flex;
  width: 90%;
  margin: auto;

  ul{
    list-style: none;
    margin-top: 20px;

    li{
      display: flex;
      align-items: center;
      margin-top: 10px;

      span{
        margin-right: 10px;
        margin-top: 3px;
      }
    }
  }

  div{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 200px;
  }
`

export const Finally = styled.span`
  width: 100%;
  display: block;
  width: 100%;
  background-color: black;
  text-align: center;
  padding: 10px;
  margin-top: 20px;
`