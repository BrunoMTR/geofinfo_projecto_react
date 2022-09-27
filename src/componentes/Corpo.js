import React, {useEffect} from "react";
import Cartao from "./Cartao";
import Filtro from "./Filtro";
import {useState} from "react";
import '../style.css'

        function Corpo({pesquisaInput}){

        let [cartoesAtuais, definirCartoes] = useState([]);

        async function fetchDadosPaises() {
            const objectoCompleto = await fetch('https://restcountries.com/v3.1/all');
            const corpoObjecto = await objectoCompleto.json();
            const objectoDeconstruido = await corpoObjecto.map(
                ({name,region,languages,capital,flags})=>({name,region,languages,capital,flags}));
            definirCartoes(objectoDeconstruido);
        }

            useEffect(()=>{
                fetchDadosPaises()
            },[]);

            async function fetchDadosRegioes(regiao){
                if(regiao != null){
                    const objectoCompleto = await fetch('https://restcountries.com/v3.1/all');
                    const corpoObjecto = await objectoCompleto.json();
                    const objectoDeconstruido = await corpoObjecto.filter((pais)=>{
                        return pais.region === regiao;
                    }).map(
                        ({name,region,languages,capital,flags})=>({name,region,languages,capital,flags}));
                    definirCartoes(objectoDeconstruido);

                }
                else{
                    fetchDadosPaises();
                }
            }


            useEffect(()=>{
                async function pesquisar(lugar){
                    if((lugar !=='') || (lugar != null)){
                        const objectoCompleto = await fetch('https://restcountries.com/v3.1/all');
                        const corpoObjecto = await objectoCompleto.json();
                        const objectoDeconstruido = await corpoObjecto.filter((pais)=>{
                            return pais.name.common.toLowerCase() === lugar.toLowerCase();
                        }).map(
                            ({name,region,languages,capital,flags})=>({name,region,languages,capital,flags}));
                        definirCartoes(objectoDeconstruido);
                    }
                    if(lugar==="" || lugar == null){
                        fetchDadosPaises();
                    }

                }
                pesquisar(pesquisaInput);
                },[pesquisaInput]);



        return(
        <div id={'corpo'}>
            <Filtro numeroPaises={cartoesAtuais.length} buscarRegiao={fetchDadosRegioes}/>
            <div id={'conteudo'}>
                {cartoesAtuais.map((pais,index)=>{
                    return(
                        <Cartao key={index} imagem={pais.flags.png} pais={pais.name.common} continente={pais.region}/>
                    )
                })}
            </div>






        </div>

    )
}

export default Corpo;































// const resultadoFinal =
// paises.then(resposta=> { return resposta.json();}).then(pais=>{
//     const resultado = pais.map(({name,capital,region,flags,languages})=> ({name,capital,region,flags,languages}));
//     return resultado;
// })
// console.log(resultadoFinal );

// const [cartaoAtual, definirCartao] = useState(
//     paises.then(resposta=> { return resposta.json();}).then(pais=>{
//         const resultado = pais.map(({name,capital,region,flags,languages})=> ({name,capital,region,flags,languages}));
//         return <Cartao imagem={resultado.flags}/>;
//
//     })
// )


// const dado = await paises;
// definirCartoes(dado);
//cria um objecto, adiciona os objsctos num array e depois mapea o resultado a uma tag cartoes;

// dado.map((cartao, index) => {
//    console.log(cartao.flags.png);
//     console.log(cartao.name.common);
//     console.log(cartao.region);
// });


//         const paises =  fetch('https://restcountries.com/v3.1/all')
//                             .then(objectoCompleto=> objectoCompleto.json())
//                             .then(objectoFiltrado=>{
//                                 return objectoFiltrado.map(({name,capital,region,flags,languages})=> ({name,capital,region,flags,languages}));
//   \                          });

// definirCartoes(
//     cartoesAtuais = cartoesAtuais.filter((pais)=>{
//         return pais.region == regiao;
//     })
// )