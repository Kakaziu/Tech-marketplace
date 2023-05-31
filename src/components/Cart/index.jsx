import { useContext } from 'react'
import PropTypes from 'prop-types'
import { Btn, CartInfos, CartTag, HeaderCart, InfoProductCar, ProductCar, ProductCarActions, ProductCarDetails, ProductsCar } from './styled'
import { ProductsContext } from '../../context/ProductContext'
import formatPrice from '../../utils/formatPrice'
import { AiFillDelete } from 'react-icons/ai'

const Cart = ({ showCart }) =>{

  const { productsCar, removeProduct, totalValueCar, clearCar } = useContext(ProductsContext)

  return(
    <CartTag showCart={showCart}>
      <HeaderCart>
        <h3>Carrinho</h3>
        <button onClick={() => clearCar()}>Limpar carrinho</button>
      </HeaderCart>

      <ProductsCar>
        { productsCar.map((product, index) =>{
          return (
            <ProductCar key={index}>
              <img src={product.urlImg}/>

              <InfoProductCar>

                <ProductCarDetails>
                  <span>{product.name}</span>
                  {formatPrice(product.price)}
                </ProductCarDetails>

                <ProductCarActions>
                  <AiFillDelete size='22' color='red' cursor='pointer' onClick={() => removeProduct(index)}/>
                  <span>{product.amount}</span>
                </ProductCarActions>
              </InfoProductCar>
            </ProductCar>
          )
        }) }
      </ProductsCar>

      <CartInfos>
        <span>Total: {formatPrice(totalValueCar())}</span>
        <Btn color={'#baadfc'} hoverColor={'#9484e0'} textColor={'#000000'}>Finalizar compra</Btn>
      </CartInfos>
    </CartTag>
  )
}

Cart.propTypes = {
  showCart: PropTypes.bool
}

export default Cart