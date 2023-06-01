import { HeroTag } from "./styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Hero = () => {
  const [smoothMoveHero, setSmoothMoveHero] = useState(false);

  useEffect(() => {
    setSmoothMoveHero(true);
  }, []);

  return (
    <div>
      <HeroTag smooth={smoothMoveHero} id="home">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="swiper"
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide className="swiper-slides">
            <div>
              <h1>TechMoos: Tech para todos.</h1>
              <p>
                Bem-vindo ao nosso site de tecnologia de ponta! Aqui você
                encontra os melhores equipamentos, desde computadores de última
                geração até celulares e tablets dos mais diversos modelos e
                marcas. Oferecemos produtos de qualidade a preços justos e nossa
                equipe está sempre disponível para ajudar a encontrar o
                equipamento perfeito para você. Navegue pelo nosso site e
                descubra como a tecnologia pode facilitar a sua vida!
              </p>
              <Link to="store" spy={true} smooth={true} offset={0}>
                Conferir nossa loja
              </Link>
            </div>

            <img src="./public/assets/images/desktop.png" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slides">
            <div>
              <h1>TechMoos: Tech para todos.</h1>
              <p>
                Na TechMoos se encontra grandes ofertas e promoções todos os
                meses. Não perca a oportunidade de conferir as ofertas e
                descontos especiais deste mês e encontrar o produto de
                tecnologia que atenda às suas necessidades.
              </p>
              <Link to="featured" spy={true} smooth={true} offset={0}>
                Destaques do mês
              </Link>
            </div>

            <img src="./public/assets/images/phone.png" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slides">
            <div>
              <h1>TechMoos: Tech para todos.</h1>
              <p>
                TechMoos é um destino único para todos os entusiastas de
                tecnologia que buscam produtos de alta qualidade e desempenho
                excepcional. Com uma vasta gama de produtos que incluem
                computadores, celulares, acessórios e periféricos, a loja online
                oferece aos seus clientes a conveniência de encontrar tudo o que
                precisam em um só lugar. Confira as variedades do nosso catálogo
              </p>
              <Link to="categorys" spy={true} smooth={true} offset={0}>
                Conferir categorias
              </Link>
            </div>

            <img src="./public/assets/images/notebook.png" />
          </SwiperSlide>
        </Swiper>
      </HeroTag>
    </div>
  );
};

export default Hero;
