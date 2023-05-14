import { Container, DestaquesArea, Product, TitleDes,InfoProduct, Products } from './styled'

const FeaturedHome = () =>{
  return(
    <DestaquesArea>
      <Container>
        <TitleDes>
          <h2>Alguns Destaques do mês</h2>
          <p>Confira nos destaques da TechMoos alguma das melhores promoções desse mês</p>

          <button>Ver mais</button>
        </TitleDes>

        <Products>
          <Product>
            <InfoProduct>
              <div>
                <h3>Notebook Acer</h3>
                <p>Acer Aspire 5 A515-56-72JY. Este laptop apresenta uma tela Full HD de 15,6 polegadas, processador 
            Intel Core i7-1165G7, 8GB de memória RAM e um SSD de 256GB.</p>
              </div>

              <span>R$3.199,00 <button>Adicionar</button></span>
            </InfoProduct>
            <div>
              <img src='./public/assets/images/acer.webp'/>
            </div>
          </Product>
          <Product>
            <InfoProduct>
              <div>
                <h3>Notebook Acer</h3>
                <p>Acer Aspire 5 A515-56-72JY. Este laptop apresenta uma tela Full HD de 15,6 polegadas, processador 
            Intel Core i7-1165G7, 8GB de memória RAM e um SSD de 256GB.</p>
              </div>

              <span>R$3.199,00 <button>Adicionar</button></span>
            </InfoProduct>
            <div>
              <img src='./public/assets/images/acer.webp'/>
            </div>
          </Product>
          <Product>
            <InfoProduct>
              <div>
                <h3>Notebook Acer</h3>
                <p>Acer Aspire 5 A515-56-72JY. Este laptop apresenta uma tela Full HD de 15,6 polegadas, processador 
            Intel Core i7-1165G7, 8GB de memória RAM e um SSD de 256GB.</p>
              </div>

              <span>R$3.199,00 <button>Adicionar</button></span>
            </InfoProduct>
            <div>
              <img src='./public/assets/images/acer.webp'/>
            </div>
          </Product>
        </Products>
      </Container>
    </DestaquesArea>
  )
}

export default FeaturedHome