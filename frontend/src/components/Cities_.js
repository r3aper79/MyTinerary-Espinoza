import CityCard from './CityCard'
import Ooops from '../components/Ooops'




const Cities_ = ({cities})=>{

    if(cities.length === 0){
        return <Ooops/>
    }
    return(
        <>
        {cities.map((city)=>{
            const bgImg = require(`../img/${city.src}`)
            return(
                <CityCard key={city._id} city={city} bgImg={bgImg}/>
            )
        })}
        </>
    )
}
export default Cities_