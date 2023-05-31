import { useContext, useState } from 'react'
import { DirectButton, InfoProducts, MoveUp, Product, Products, Store } from './styled'
import products from '../../Products'
import formatPrice from '../../utils/formatPrice'
import { ProductsContext } from '../../context/ProductContext'

const StoreHome = () =>{

  const { addProductsInCar } = useContext(ProductsContext)
  const [moveUp, setMoveUp] = useState(false)

  document.addEventListener('scroll', () =>{
    if(window.scrollY > 1850){
      setMoveUp(true)
    }
  })

  return(
    <Store>
      <MoveUp moveUp={moveUp}>
        <hr></hr>
        <h2>Nossa loja</h2>
      
        <Products>
          {products.map((product) =>{
            return(
              <Product key={product.id}>
                <img src={product.urlImg}/>
                <InfoProducts>
                  <div>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                  </div>

                  <span>{formatPrice(product.price)} <button onClick={() => addProductsInCar(product.id)}>Adicionar</button></span>
                </InfoProducts>
              </Product>
            )
          })}
        </Products>

        <DirectButton>Ver mais</DirectButton>
      </MoveUp>
    </Store>
  )
}

export default StoreHome