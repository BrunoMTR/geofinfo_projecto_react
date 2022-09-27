import React, {useState} from 'react';
import Cabeçalho from "./componentes/Cabeçalho";
import Rodape from "./componentes/Rodape";
import Corpo from './componentes/Corpo'



function App(){

    const [pesquisa, definirPesquisa] = useState('');
    function recebeBusca(busca){
        definirPesquisa(busca.value);
    }


    return(
        <>
            <Cabeçalho pesquisar={recebeBusca}/>
            <Corpo pesquisaInput={pesquisa}/>
            <Rodape/>
        </>
    )
}
export default App;
