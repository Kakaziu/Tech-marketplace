import { useContext, useState } from "react";
import {
  DirectButton,
  InfoProducts,
  LineInside,
  LineOutside,
  MenuProducts,
  MoveUp,
  Product,
  Products,
  Store,
} from "./styled";
import products from "../../Products";
import formatPrice from "../../utils/formatPrice";
import { ProductsContext } from "../../context/ProductContext";

const StoreHome = () => {
  const { addProductsInCar } = useContext(ProductsContext);
  const [moveUp, setMoveUp] = useState(false);
  const [linePlace, setLinePlace] = useState("0%");
  const [chooseCategory, setChooseCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  document.addEventListener("scroll", () => {
    if (window.scrollY > 1850) {
      setMoveUp(true);
    }
  });

  function changeCategory(move, category) {
    const filter = products.filter((product) => product.category === category);

    setChooseCategory(category);
    setFilteredProducts(filter);
    setLinePlace(move);
  }

  return (
    <Store>
      <MoveUp moveUp={moveUp}>
        <MenuProducts>
          <ul>
            <li onClick={() => changeCategory("0%", null)}>Todos</li>
            <li onClick={() => changeCategory("20%", "computadores")}>
              Computadores
            </li>
            <li onClick={() => changeCategory("41%", "celulares")}>
              Celulares
            </li>
            <li onClick={() => changeCategory("61%", "notebooks")}>
              Notebooks
            </li>
            <li onClick={() => changeCategory("83%", "periféricos")}>
              Periféricos
            </li>
          </ul>
          <div>
            <LineOutside id="line-outside" />
            <LineInside id="line-inside" linePlace={linePlace} />
          </div>
        </MenuProducts>

        <Products>
          {!chooseCategory
            ? products.map((product) => {
                return (
                  <Product key={product.id}>
                    <img src={product.urlImg} />
                    <InfoProducts>
                      <div>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                      </div>

                      <span>
                        {formatPrice(product.price)}{" "}
                        <button onClick={() => addProductsInCar(product.id)}>
                          Adicionar
                        </button>
                      </span>
                    </InfoProducts>
                  </Product>
                );
              })
            : filteredProducts.map((product) => {
                return (
                  <Product key={product.id}>
                    <img src={product.urlImg} />
                    <InfoProducts>
                      <div>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                      </div>

                      <span>
                        {formatPrice(product.price)}{" "}
                        <button onClick={() => addProductsInCar(product.id)}>
                          Adicionar
                        </button>
                      </span>
                    </InfoProducts>
                  </Product>
                );
              })}
        </Products>

        <DirectButton>Ver mais</DirectButton>
      </MoveUp>
    </Store>
  );
};

export default StoreHome;
