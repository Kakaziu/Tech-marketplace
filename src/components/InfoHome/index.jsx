import { useState } from 'react'
import { InfoHomeTag } from './styled'

const InfoHome = () =>{

  const [moveUp, setMoveUp] = useState(false)

  document.addEventListener('scroll', () =>{
    if(window.scrollY > 2900){
      setMoveUp(true)
    }
  })

  return(
    <InfoHomeTag moveUp={moveUp}>
      <div>
        <h2>Uma das entregas mais rápidas do país</h2>
        <p>Oferecemos um serviço de entrega de alta qualidade, garantindo que nossos clientes recebam seus 
        produtos com rapidez e segurança. Trabalhamos com as melhores transportadoras do mercado para 
        garantir que seu produto chegue até você em perfeitas condições e dentro do prazo estabelecido. 
        Nosso processo de envio é simples e eficiente, com atualizações regulares de status para que você 
        possa acompanhar o progresso da entrega em tempo real.</p>
      </div>

      <lord-icon
        src="https://cdn.lordicon.com/qmuwmmnl.json"
        trigger="loop"
        delay="2500"
        colors="primary:#30c9e8"
        style={{width:'450px',height:'450px'}}>
      </lord-icon>
    </InfoHomeTag>
  )
}

export default InfoHome