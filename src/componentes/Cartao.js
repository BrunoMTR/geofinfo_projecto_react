import React from 'react';
import '../style.css'

function Cartao({imagem,pais,continente}){
    return(
        <div className={'cartao'}>
            <img src={imagem} alt={'imagem'}/>
            <p><strong>Nome comum: </strong>{pais}</p>
            <p>{continente}</p>
        </div>
    )

}
export default Cartao;