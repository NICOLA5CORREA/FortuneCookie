import react, {useState} from 'react'
import phrases from '../assets/phrases.json'
import Phrase2 from './Phrase2'

const CookiesFortune = () =>  {
    const [numberImage, setNumberImage] = useState (Math.floor(Math.random() * (4 - 1) + 1))
    const [numberPhrase, setNumberPhrase] = useState (Math.floor(Math.random() * (phrases.length - 1) + 1))
    
    const numeRandom = () => {
    setNumberImage (Math.floor(Math.random() * (4 - 1) + 1));
    setNumberPhrase (Math.floor(Math.random() * (phrases.length - 1) + 1))
    }

    return (
        
        <article className="cookies">   
            <h1>🤑🥠GALLETAS DE LA FORTUNA🤑🥠</h1>
            <img src={`../../imgs/fondo${numberImage}.png` }alt="fondo" />
            <div>
            <Phrase2 phrases= {phrases} numberPhrase = {numberPhrase}/>
            <button onClick={() => numeRandom()}>PRUEBA TU SUERTE</button>
            </div>

        </article>
    )

}

export default CookiesFortune