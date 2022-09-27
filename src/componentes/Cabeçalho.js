import React from 'react';
import '../style.css'



function Cabeçalho({pesquisar}){
    return(
        <div id={'cabeçalho'}>
            <h1 id={'slogan'}>Encontre informação sobre países num só lugar</h1>
            <div id={'lupa-pesquisa'}>
                <input id={'pesquisa'} placeholder={'Pesquisar país...'} onInput={()=>{pesquisar(document.getElementById('pesquisa'))}}/>
            </div>

        </div>
    )
}
export default Cabeçalho;