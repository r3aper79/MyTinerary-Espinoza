
const ImgSlice = ({titulo,BgImg})=>{
    return(
        <>
        <div className="img-carousel"  style={{
            backgroundImage: `url(${BgImg.default})`,
            backgroundSize: 'cover'
        }} >
            <h3 className="titlePhoto">{titulo}</h3>
        </div>
        </>
    )
}

export default ImgSlice