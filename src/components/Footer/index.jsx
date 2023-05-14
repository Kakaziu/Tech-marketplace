import { FooterTag ,ContainerFooter } from './styled'
import { FaUserFriends } from 'react-icons/fa'

const Footer = () =>{
  return(
    <FooterTag>
      <div>
        <span>TechMoos</span>
        <lord-icon
          src="https://cdn.lordicon.com/fbyjqbak.json"
          trigger="loop"
          delay="2500"
          colors="primary:#30c9e8"
          style={{width:'40px',height:'40px'}}>
        </lord-icon>
      </div>
      <ContainerFooter>
        <div>
          <h3>Institucional</h3>
          <ul>
            <li><FaUserFriends size='22'/> Quem somos</li>
          </ul>
        </div>
        <div>
          <h3>Institucional</h3>
          <ul>
            <li><FaUserFriends/></li>
          </ul>
        </div>
        <div>
          <h3>Institucional</h3>
          <ul>
            <li><FaUserFriends/></li>
          </ul>
        </div>
      </ContainerFooter>
    </FooterTag>
  )
}

export default Footer