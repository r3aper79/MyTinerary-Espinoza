//ContentSlice es el "contenedor" de las cuatro pequeñas imagenes que van dentro del slice
import ImgSlice from './ImgSlice'

const images = ({items}) =>{
    return(
        <div className="carousel">
           {items.map((img)=>{
               const BgImg = require (`../img/${img.src}`)
               return (
                   <ImgSlice key={img.id} titulo={img.titulo} BgImg={BgImg}/>
               )
           })}
        </div>
    )
}

export default images