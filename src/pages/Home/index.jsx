import Categorys from '../../components/Categorys'
import DestaquesHome from '../../components/DestaquesHome'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import StoreHome from '../../components/StoreHome'

const Home = () =>{
  return(
    <section id="home">
      <Header/>
      <Hero/>
      <DestaquesHome/>
      <Categorys/>
      <StoreHome/>
    </section>
  )
}

export default Home
