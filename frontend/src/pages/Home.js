
import Carousel from '../components/Carousel'
import Hero from '../components/Hero'
import CarouselTitle from '../components/CarouselTitle'
import {useEffect} from 'react'


const Home = ()=>{
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    return(
        <>
        <Hero/>
        <div className="home-carousel">
            <CarouselTitle/>
            <Carousel/>
        </div>
        </>
    )
}

export default Home