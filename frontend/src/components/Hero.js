import ButtonHero from './ButtonOfHero'
const heroImg = require('../img/slice4.jpg')
const logo = require('../img/descarga.png')



const Hero = ()=>{
    return (
        <div className="Hero-container" style={{backgroundImage: `url(${heroImg.default})`,
        width: '100%',
        height: '100vh',
        margin: '0',
        padding: '0',
        backgroundSize: 'cover'}}>
            <div className="text-hero" style={{width:'80%'}}>
                <div className="logo-hero" style={{backgroundImage: `url(${logo.default})`, 
                width: '35%',
                height:'65%', 
                backgroundSize:'cover'}}></div>
                <h2 id={"titleMytinerary"} style={{fontSize:'45px', fontWeight: 'bold' , paddingTop: '6vh'}}>MyTinerary</h2>
                <p id={"Find"} style={{fontSize: '22px' , 
                fontWeight: '600'}}>Find your perfect trip, designed by insiders who know and love their cities</p>
            </div>
            <ButtonHero/>
        </div>
    )
}

export default Hero