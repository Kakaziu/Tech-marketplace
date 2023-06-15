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
                geração até celulares e tablets de diversas marcas. Oferecemos
                produtos de qualidade a preços justos, e nossa equipe está
                sempre disponível para ajudar a encontrar o equipamento perfeito
                para você. Descubra como a tecnologia pode facilitar sua vida
                navegando em nosso site!
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
                Na TechMoos, você encontrará uma ampla variedade de produtos de
                alta qualidade e desempenho excepcional, além de grandes ofertas
                e promoções mensais. Não perca a oportunidade de conferir as
                ofertas e descontos especiais deste mês, que foram
                cuidadosamente selecionados para atender às suas necessidades
                tecnológicas. Nossa loja online oferece conveniência e
                diversidade, garantindo que você encontre o produto perfeito
                para você.
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
                TechMoos é o destino perfeito para entusiastas de tecnologia em
                busca de produtos de alta qualidade e desempenho excepcional.
                Com uma ampla gama de produtos, incluindo computadores,
                celulares, acessórios e periféricos, nossa loja online oferece a
                conveniência de encontrar tudo o que você precisa em um só
                lugar. Explore as variedades do nosso catálogo e encontre o que
                procura!
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
