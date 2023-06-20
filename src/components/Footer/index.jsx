import { FooterTag, ContainerFooter, TitleFooter } from "./styled";
import { FaUserFriends } from "react-icons/fa";
import { AiFillCar, AiFillMail, AiFillCreditCard } from "react-icons/ai";
import { MdPrivacyTip } from "react-icons/md";
import { BsTelephoneFill, BsFillTicketFill, BsPhoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <FooterTag>
      <div>
        <TitleFooter>
          TechMoos
          <lord-icon
            src="https://cdn.lordicon.com/fbyjqbak.json"
            trigger="loop"
            delay="2500"
            colors="primary:#30c9e8"
            style={{ width: "40px", height: "40px" }}
          ></lord-icon>
        </TitleFooter>
      </div>
      <ContainerFooter>
        <div>
          <h3>Institucional</h3>
          <ul>
            <li>
              <span>
                <FaUserFriends size="22" />
              </span>{" "}
              Quem somos
            </li>
            <li>
              <span>
                <AiFillCar size="22" />
              </span>
              Entregas e prazos
            </li>
            <li>
              <span>
                <MdPrivacyTip size="22" />
              </span>
              Política de privacidade
            </li>
          </ul>
        </div>
        <div>
          <h3>Contato</h3>
          <ul>
            <li>
              <span>
                <BsTelephoneFill size="22" />
              </span>
              (21) 99992-8635
            </li>
            <li>
              <span>
                <AiFillMail size="22" />
              </span>
              techmoos@suporte.com
            </li>
          </ul>
        </div>
        <div>
          <h3>Pagamento</h3>
          <ul>
            <li>
              <span>
                <AiFillCreditCard size="22" />
              </span>
              Cartão de crédito e débito
            </li>
            <li>
              <span>
                <BsFillTicketFill size="22" />
              </span>
              Boleto
            </li>
            <li>
              <span>
                <BsPhoneFill size="22" />
              </span>
              Pix
            </li>
          </ul>
        </div>
      </ContainerFooter>
    </FooterTag>
  );
};

export default Footer;
