import {Link} from 'react-router-dom'

const CityCard =({city:{titulo,_id},bgImg})=>{

    return(
        <Link to={`/city/${_id}`}>
            <h1 id="titulo-cards">{titulo}</h1>
            <div className="img-cards" style={{
                backgroundImage: `url(${bgImg.default})`,
                backgroundSize: 'cover'
            }}>   
            </div>
        </Link>
    )
}
export default CityCard