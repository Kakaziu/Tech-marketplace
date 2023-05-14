import Categorys from '../../components/Categorys'
import FeaturedHome from '../../components/FeaturedHome'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import InfoHome from '../../components/InfoHome'
import StoreHome from '../../components/StoreHome'

const Home = () =>{
  return(
    <section id="home">
      <Header/>
      <Hero/>
      <FeaturedHome/>
      <Categorys/>
      <StoreHome/>
      <InfoHome/>
      <Footer/>
    </section>
  )
}

export default Home
