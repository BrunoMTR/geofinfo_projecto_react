import React from "react";
import '../style.css'
import globo from '../imagens/globo.jpg'
import filtroicon from '../imagens/filtro-icon.jpg'

function Filtro({numeroPaises, buscarRegiao}){
    return(
        <div id={'filtro'}>
            <div id={'primeira-parte'}>
               <div id={'icon-titulo'}>
                   <img src={filtroicon} alt={'filtro icon'}/>
                   <h2>Filtrar por regiao</h2>
               </div>
                <div id={'botoes'}>
                    <button className={'botao'} onClick={()=>buscarRegiao(null)}>Todas</button>
                    <button className={'botao'} onClick={()=>buscarRegiao('Africa')}>África</button>
                    <button className={'botao'} onClick={()=>buscarRegiao('Americas')}>América</button>
                    <button className={'botao'} onClick={()=>buscarRegiao('Asia')}>Ásia</button>
                    <button className={'botao'} onClick={()=>buscarRegiao('Europe')}>Europa</button>
                    <button className={'botao'} onClick={()=>buscarRegiao('Oceania')}>Oceânea</button>
                </div>
            </div>
            <div id={'segunda-parte'}>
                <div id={'globo-paragrafo'}>
                    <img src={globo} alt={'globo'}/>
                    <h2>Número de países</h2>
                </div>
                <p> <strong>{numeroPaises}</strong> países pertencentes a categoria</p>
            </div>
        </div>
    )
}
export default Filtro;