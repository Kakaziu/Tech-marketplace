import { DirectButton, InfoProducts, Product, Products, Store } from './styled'

const product = {
  name: 'Lenovo Notebook',
  price: 2.199,
  description: 'O IdeaPad 3i Geração 6 (Intel 15″) torna ficar em ambientes fechados e trabalhar ou aprender de casa ainda mais prazeroso.',
  urlImg: 'https://m.media-amazon.com/images/I/71h5bQzXMmL._AC_SL1500_.jpg'
}

const StoreHome = () =>{

  return(
    <Store>
      <hr></hr>
      <h2>Nossa loja</h2>

      <Products>
        <Product>
          <img src={product.urlImg}/>
          <InfoProducts>
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>

            <span>R${product.price},00 <button>Adicionar</button></span>
          </InfoProducts>
        </Product>
        <Product>
          <img src={product.urlImg}/>
          <InfoProducts>
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>

            <span>R${product.price},00 <button>Adicionar</button></span>
          </InfoProducts>
        </Product>
        <Product>
          <img src={product.urlImg}/>
          <InfoProducts>
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>

            <span>R${product.price},00 <button>Adicionar</button></span>
          </InfoProducts>
        </Product>
        <Product>
          <img src={product.urlImg}/>
          <InfoProducts>
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>

            <span>R${product.price},00 <button>Adicionar</button></span>
          </InfoProducts>
        </Product>
        <Product>
          <img src={product.urlImg}/>
          <InfoProducts>
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>

            <span>R${product.price},00 <button>Adicionar</button></span>
          </InfoProducts>
        </Product>
        <Product>
          <img src={product.urlImg}/>
          <InfoProducts>
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>

            <span>R${product.price},00 <button>Adicionar</button></span>
          </InfoProducts>
        </Product>
        <Product>
          <img src={product.urlImg}/>
          <InfoProducts>
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>

            <span>R${product.price},00 <button>Adicionar</button></span>
          </InfoProducts>
        </Product>
        <Product>
          <img src={product.urlImg}/>
          <InfoProducts>
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>

            <span>R${product.price},00 <button>Adicionar</button></span>
          </InfoProducts>
        </Product>
      </Products>

      <DirectButton>Ver mais</DirectButton>
    </Store>
  )
}

export default StoreHome