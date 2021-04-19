import bgPhoto from '../img/oops.jpg'
const Ooops = ()=>{
    return(
        <>
        <div className="oops" style={{
            backgroundImage: `url(/img/oops.jpg)`
        }}>
            <h3 className="title-oops">Oops!</h3>
            <p className="p-ops">
                We don't have any city that matches your search! Try another one!
            </p>
        </div>
        </>
    )
}

export default Ooops