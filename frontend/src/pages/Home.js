
import Carousel from '../components/Carousel'
import Header from '../components/Header'
import Hero from '../components/Hero'
import CarouselTitle from '../components/CarouselTitle'
import Footer from '../components/Footer'

const Home = ()=>{
    return(
        <>
        <Header/>
        <Hero/>
        <div className="home-carousel">
            <CarouselTitle/>
            <Carousel/>
        </div>
        
        <Footer/>
        </>
    )
}

export default Home