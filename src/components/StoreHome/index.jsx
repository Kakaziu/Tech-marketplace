import { useContext, useEffect, useState } from "react";
import {
  CategorysList,
  FilterButton,
  InfoProducts,
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
  const [chooseCategory, setChooseCategory] = useState(null);
  const [initialProducts, setInitialProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showCategorysList, setShowCategorysList] = useState(false);

  useEffect(() => {
    const initial = products.slice(0, 12);
    setInitialProducts(initial);
  }, []);

  document.addEventListener("scroll", () => {
    if (window.scrollY > 1850) {
      setMoveUp(true);
    }
  });

  function changeCategory(category) {
    const filter = products.filter((product) => product.category === category);

    setChooseCategory(category);
    setFilteredProducts(filter);
    setShowCategorysList(false);
  }

  return (
    <Store id="store">
      <MoveUp moveUp={moveUp}>
        <MenuProducts>
          <div>
            <FilterButton
              onClick={() => setShowCategorysList(!showCategorysList)}
            >
              Filtrar
            </FilterButton>
          </div>
          <CategorysList showCategorysList={showCategorysList}>
            <li onClick={() => changeCategory("computadores")}>Computadores</li>
            <li onClick={() => changeCategory("celulares")}>Celulares</li>
            <li onClick={() => changeCategory("notebooks")}>Notebooks</li>
            <li onClick={() => changeCategory("periféricos")}>Periféricos</li>
          </CategorysList>
        </MenuProducts>

        <Products>
          {!chooseCategory
            ? initialProducts.map((product) => {
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
      </MoveUp>
    </Store>
  );
};

export default StoreHome;
