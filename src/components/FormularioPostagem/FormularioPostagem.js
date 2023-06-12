import { FormContainer, Form, Input, StyledLabel } from "./FormularioPostagem.styled";
import { useState } from "react";

export const FormularioCadastro = (props) => {


  const trocarImagem = (event) => {
    props.setImagem(event.target.value)/*  Posso usar apenas a letra e no lugar da palavra event do set */
  }

  const trocarDescricao = (event) => {
    props.setDescricao(event.target.value)
  }

  const trocarTitulo = (event) => {
    props.setTitulo(event.target.value)
  }

  return (
    <FormContainer>
      <h1>Insira sua postagem abaixo: </h1>

      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" 
          value={props.titulo}
          onChange={trocarTitulo} />
        </StyledLabel>

        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto"
            value={props.imagem}
            onChange={trocarImagem}
          />
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao"
            value={props.descricao}
            onChange={trocarDescricao} />
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
