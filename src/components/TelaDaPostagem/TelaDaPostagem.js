import React from "react";
import { ContainerPostagem, Title, Image, Description } from "./TelaDaPostagem.styled";

const TelaDaPostagem = (props) => {

  /* Essa é uma forma de chamar o ternário no JavaScript. Cada <ContainerPostagem> é uma condição do ternário que criei abaixo (props.imagem.length > 0 && props.descricao.length > 0) ? */

  return (
    (props.imagem.length > 0 && props.descricao.length > 0) ?
      <ContainerPostagem>
        <Title>{props.titulo}</Title>
        <Image src={props.imagem} alt='drone view' />
        <Description>{props.descricao}</Description>
      </ContainerPostagem> :

      <ContainerPostagem>
        <Image src={"https://picsum.photos/536/354"} alt='drone view' />
        <Description>{'Lorem Ipsumr'}</Description>
      </ContainerPostagem>
  );
};

export default TelaDaPostagem;


