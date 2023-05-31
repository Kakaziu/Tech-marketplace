import { useContext, useEffect, useState } from 'react'
import { Container, HeaderTag } from './styled'
import Cart from '../Cart'
import { ProductsContext } from '../../context/ProductContext'
import { toast } from 'react-toastify'

const Header = () =>{

  const { totalCar } = useContext(ProductsContext)
  const [showCart, setShowCart] = useState(false)
  const [headerColor, setHeaderColor] = useState(false)

  window.addEventListener('scroll', () =>{
    if(scrollY > 0){
      setHeaderColor(true)
    }else{
      setHeaderColor(false)
    }
  })

  useEffect(() =>{
    if(totalCar() === 0) setShowCart(false)
  }, [totalCar()])

  function onShowCart(){
    if(totalCar() === 0) return toast.warn('Não tem produtos no carrinho.')
    setShowCart(!showCart)
  }

  return(
    <HeaderTag headerColor={headerColor}>
      <Container>
        <h2>
          <lord-icon
            src="https://cdn.lordicon.com/fbyjqbak.json"
            trigger="loop"
            delay="2500"
            colors="primary:#30c9e8"
            style={{width:'40px',height:'40px'}}>
          </lord-icon>
          <span>TechMoos</span>
        </h2>

        <nav>
          <ul>
            <li>Home</li>
            <li>Destaques</li>
            <li>Loja</li>
            <li>Contato</li>
            <li onClick={onShowCart}>
              { totalCar() > 0 ? <span>{totalCar()}</span> : ''}
              <lord-icon
                src="https://cdn.lordicon.com/wbtzvepm.json"
                trigger="click"
                colors="primary:#66d7ee,secondary:#66d7ee"
                style={{width:'45px', height:'45px', cursor: 'pointer'}}>
              </lord-icon>
            </li>
          </ul>
        </nav>
      </Container>
      <Cart showCart={showCart}/>
    </HeaderTag>
  )
}

export default Header