import { useContext, useEffect, useState } from "react";
import {
  Container,
  DestaquesArea,
  Product,
  TitleDes,
  InfoProduct,
  Products,
} from "./styled";
import products from "../../Products";
import { ProductsContext } from "../../context/ProductContext";

const FeaturedHome = () => {
  const { addProductsInCar } = useContext(ProductsContext);
  const [moveUp, setMoveUp] = useState(false);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    getFeaturedGames();
  }, []);

  document.addEventListener("scroll", () => {
    if (window.scrollY > 250) {
      setMoveUp(true);
    }
  });

  function getFeaturedGames() {
    const featuredProds = products.filter((product) => product.isFeatured);

    setFeaturedProducts(featuredProds);
  }

  return (
    <DestaquesArea id="featured">
      <Container moveUp={moveUp}>
        <TitleDes>
          <h2>Alguns Destaques do mês</h2>
          <p>
            Confira nos destaques da TechMoos alguma das melhores promoções
            desse mês
          </p>

          <button>Ver mais</button>
        </TitleDes>

        <Products>
          {featuredProducts.map((featuredProduct) => {
            return (
              <Product key={featuredProduct.id}>
                <InfoProduct>
                  <div>
                    <h3>{featuredProduct.name}</h3>
                    <p>{featuredProduct.description}</p>
                  </div>

                  <span>
                    R${featuredProduct.price},00{" "}
                    <button
                      onClick={() => addProductsInCar(featuredProduct.id)}
                    >
                      Adicionar
                    </button>
                  </span>
                </InfoProduct>
                <div>
                  <img src={featuredProduct.urlImg} />
                </div>
              </Product>
            );
          })}
        </Products>
      </Container>
    </DestaquesArea>
  );
};

export default FeaturedHome;
