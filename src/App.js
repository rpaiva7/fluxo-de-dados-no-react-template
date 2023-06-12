import styled, { createGlobalStyle } from "styled-components";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

/* 1.Controlando inputs 

No exercício de hoje temos um site que faz postagens, assim como o instagram. Neste site o usuário pode inserir uma imagem através de uma URL e uma descrição para essa imagem.
- Primeiramente, vamos fazer o controle desses inputs dentro do componente FormularioPostagem.js usando os 3 passos padrão 

2.Trocando dados mockados (dados que já existem) por estados.

Você vai perceber que a imagem e descrição estão estáticos no componente TelaDaPostagem.js. Precisamos substituir esses dados fixos pelos dados que o usuário vai inserir nos inputs.

Agora temos nosso primeiro problema: os componentes TelaDaPostagem e FormularioPostagem são irmãos; dessa forma, não é possível passar props de um para o outro. Para resolver este problema precisaremos mover os estados de lugar, encontrando um pai em comum entre esses dois irmãos!

3.Passando props

Agora que encontramos um pai em comum (App), passe os dados via props para seus respectivos componentes

4.Crie mais um input controlado onde o usuário poderá escrever um título para a sua postagem. Passe as informações recebidas nesse input por props até o componente TelaDaPostagem. Depois disso, modifique o JSX do componente TelaDaPostagem para que esse título apareça na tela.
*/

function App() {

  const [imagem, setImagem] = useState("")
  const [descricao, setDescricao] = useState("")
  const [titulo, setTitulo] = useState("")
 /* Obs Eu trouxe esses usestates do FormularioPostagem porque aqui é o componente pai que vai enviar apenas as funções que atualizam o estado para todos os outros componentes filhos via props, e em troca receberá os comandos dos eventos (onClick, onChange, etc) que serão acionados nos componentes filhos, que irão disparar a função que está aqui no componente pai. */

  return (
    <>
      <GlobalStyle />

      <Container>
        
        <FormularioPostagem 
        titulo={titulo} 
        setTitulo={setTitulo} 
        imagem={imagem} 
        setImagem={setImagem} 
        descricao={descricao} 
        setDescricao={setDescricao} />
        
        <TelaDaPostagem titulo={titulo} imagem={imagem} descricao={descricao}/>

      </Container>
    </>
  );
}

export default App;

/* Gerenciando fluxo de dados: boas práticas para compartilhar estados entre componentes

Agora que já sabemos como passar dados entre os componentes, por meio de props, vamos entender qual a melhor forma desse fluxo acontecer!

Quando queremos compartilhar dados entre componentes que não estão diretamente ligados, isso gera um problema!

É importante planejarmos bem onde nossos dados vão ficar guardados para que os componentes tenham acesso quando necessário.

Analogia: React é uma planta de batata

Este trecho é uma adaptação de um texto de [Maggie Appleton](https://github.com/MaggieAppleton/react-metaphors-slides)

- Componentes são batatas conectadas pela rede das props
- Nossos dados são a água fluindo na raiz das plantas, chegando em cada batata

https://labenu.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F70f53d2b-a2d4-4693-9341-43c4e7013b80%2FUntitled.png?id=e1590b9e-5daf-4232-99cf-7a0f4168879a&table=block&spaceId=f97190af-c9c2-4592-9ae2-6311b6b728de&width=770&userId=&cache=v2

Por exemplo, para passar dados do componente 1 para o componente 4 na imagem abaixo, é preciso respeitar sua hierarquia, antes passando pelos componentes superiores.

https://labenu.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ffdfab77a-6a55-4e57-bb12-23771245dc46%2FUntitled.png?id=ddc824c1-55ca-4c33-b51c-f27a290c85f9&table=block&spaceId=f97190af-c9c2-4592-9ae2-6311b6b728de&width=1650&userId=&cache=v2

Se tivermos um estado dentro de um componente que está muito abaixo da árvore, fica inviável compartilhar com o restante da aplicação. Uma possível solução é manter os dados em um componente pai em comum, passando apenas a função de atualizar o estado para os componentes filhos. Não é obrigatório, mas é importante planejar antes para não sofrer depois!

Fluxo: Dados descem, eventos sobem!

https://labenu.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2071a253-ac22-4235-8aae-9254db79e7b2%2FUntitled.png?id=13004c40-2358-4396-9866-3393ab699d0d&table=block&spaceId=f97190af-c9c2-4592-9ae2-6311b6b728de&width=2000&userId=&cache=v2

Se um estado está no componente pai, como alterá-lo dentro do filho?

- Criamos estado e função de alterar estado no pai
- Enviamos a função pro filho
- Usuário interage no componente filho, gerando um evento que dispara a função no pai

No React:

- Guardamos dados em estados
- Alteramos o estado por meio de uma função

A função é executada quando o usuário interage com a aplicação (clique de botão) e isso gera um evento (onClick)

O evento (onClick) executa a função de alterar o estado

Podemos ter componentes chamados um dentro do outro:
https://labenu.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8477766c-0d76-48b8-8f9e-6ee7d43a9168%2FUntitled.png?id=78712cd9-947c-4aea-a3be-aec53c421610&table=block&spaceId=f97190af-c9c2-4592-9ae2-6311b6b728de&width=1420&userId=&cache=v2

Os dados descem pelos componentes:

https://labenu.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7b7d8601-58e1-4845-be4d-cdcac1287412%2FUntitled.png?id=3089bb16-e7b2-46cf-aaf9-324eca7427d1&table=block&spaceId=f97190af-c9c2-4592-9ae2-6311b6b728de&width=1500&userId=&cache=v2

Os eventos sobem

- Eventos são os nutrientes que sobem pela planta
- Eventos vão para cima na árvore de componentes do React (na maior parte do tempo)

https://labenu.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F25d6e71e-420b-4eb0-bf4b-bccdbe28c4ac%2FUntitled.png?id=3362a82e-bd6b-4fbd-94c9-635b9b481a02&table=block&spaceId=f97190af-c9c2-4592-9ae2-6311b6b728de&width=1920&userId=&cache=v2

https://labenu.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fced4102e-b163-446a-bf34-7c40af2cf49c%2FUntitled.png?id=f9b8c59e-19c6-4e03-b13c-4e6b2e31dfff&table=block&spaceId=f97190af-c9c2-4592-9ae2-6311b6b728de&width=2000&userId=&cache=v2

*/


