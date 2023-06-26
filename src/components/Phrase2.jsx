import React from "react"

const Phrase2 = ({phrases,numberPhrase}) => {
    
    return (
        <span><i className = 'bx-bx-envelope'>{phrases[numberPhrase].phrase} <br />Autor:{phrases[numberPhrase].author}</i></span>
    )
    
}
export default Phrase2