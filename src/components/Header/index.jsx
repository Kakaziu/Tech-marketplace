import { useContext, useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Container, HeaderTag, List, MobileMenu } from "./styled";
import Cart from "../Cart";
import { ProductsContext } from "../../context/ProductContext";
import { toast } from "react-toastify";
import { Link } from "react-scroll";

const Header = () => {
  const { totalCar } = useContext(ProductsContext);
  const [showCart, setShowCart] = useState(false);
  const [headerColor, setHeaderColor] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  window.addEventListener("scroll", () => {
    if (scrollY > 0) {
      setHeaderColor(true);
    } else {
      setHeaderColor(false);
    }
  });
  useEffect(() => {
    if (totalCar() === 0) setShowCart(false);
  }, [totalCar()]);

  function onShowCart() {
    if (totalCar() === 0) return toast.warn("Não tem produtos no carrinho.");

    setShowCart(!showCart);
    setShowMobileMenu(false);
  }
  return (
    <HeaderTag headerColor={headerColor}>
      <Container>
        <h2>
          <lord-icon
            src="https://cdn.lordicon.com/fbyjqbak.json"
            trigger="loop"
            delay="2500"
            colors="primary:#30c9e8"
            style={{ width: "40px", height: "40px" }}
          ></lord-icon>
          <span>TechMoos</span>
        </h2>

        <nav>
          <List showMobileMenu={showMobileMenu}>
            <Link to="home" spy={true} smooth={true} duration={500} offset={0}>
              <li>Home</li>
            </Link>
            <Link
              to="featured"
              spy={true}
              smooth={true}
              duration={500}
              offset={0}
            >
              <li>Destaques</li>
            </Link>
            <Link
              to="categorys"
              spy={true}
              smooth={true}
              duration={500}
              offset={0}
            >
              <li>Categorias</li>
            </Link>
            <Link to="store" spy={true} smooth={true} duration={500} offset={0}>
              <li>Loja</li>
            </Link>
            <li onClick={onShowCart}>
              {totalCar() > 0 ? <span>{totalCar()}</span> : ""}
              <lord-icon
                src="https://cdn.lordicon.com/wbtzvepm.json"
                trigger="click"
                colors="primary:#66d7ee,secondary:#66d7ee"
                style={{ width: "45px", height: "45px", cursor: "pointer" }}
              ></lord-icon>
            </li>
          </List>
          <MobileMenu
            onClick={
              !showCart
                ? () => setShowMobileMenu(!showMobileMenu)
                : () => setShowCart(false)
            }
          >
            {!showCart ? (
              <AiOutlineMenu size="40" />
            ) : (
              <AiOutlineClose size="40" />
            )}
          </MobileMenu>
        </nav>
      </Container>
      <Cart showCart={showCart} />
    </HeaderTag>
  );
};

export default Header;
