//ContentSlice es el "contenedor" de las cuatro pequeñas imagenes que van dentro del slice
import ImgSlice from './ImgSlice'

const images = ({item}) =>{
    return(
        <div className="carousel">
           {item.map((img)=>{
               const BgImg = require (`../img/${img.src}`)
               return (
                   <ImgSlice key={img.id} imagen={img} BgImg={BgImg}/>
               )
           })}
        </div>
    )
}

export default images