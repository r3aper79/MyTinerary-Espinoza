
const ImgSlice = ({imagen,BgImg})=>{
    const {titulo} = imagen
    return(
        <>
        <div className="img-carousel"  style={{
            backgroundImage: `url(${BgImg.default})`,
            width: '25vw',
            height: '30vh',
            margin: '1vh 2vw 3vh 0',
            backgroundSize: 'cover'
        }} >
            <h3 className="titlePhoto">{titulo}</h3>
        </div>
        </>
    )
}

export default ImgSlice