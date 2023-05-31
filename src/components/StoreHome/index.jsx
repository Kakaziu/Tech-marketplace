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

  document.addEventListener("scroll", () => {
    if (window.scrollY > 1850) {
      setMoveUp(true);
    }
  });

  function moveLine(move) {
    setLinePlace(move);
  }

  return (
    <Store>
      <MoveUp moveUp={moveUp}>
        <MenuProducts>
          <ul>
            <li onClick={() => moveLine("0%")}>Todos</li>
            <li onClick={() => moveLine("20%")}>Computadores</li>
            <li onClick={() => moveLine("41%")}>Celulares</li>
            <li onClick={() => moveLine("61%")}>Notebooks</li>
            <li onClick={() => moveLine("83%")}>Periféricos</li>
          </ul>
          <div>
            <LineOutside id="line-outside" />
            <LineInside id="line-inside" linePlace={linePlace} />
          </div>
        </MenuProducts>

        <Products>
          {products.map((product) => {
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
