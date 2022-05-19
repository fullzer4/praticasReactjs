import React from 'react';
import './index.css';

const Titulo = () => {
  return(
    <div>
      <h1>CalculateAll</h1>
    </div>
    ); 
}

const Descricao = (props) => {
  return(
    <div>
      <h2>{props.genero}, {props.nome}, espero que goste desse projeto unitário e que facilite o seu dia a dia com matemática, aceito qualquer tipo de sujestão se houver mandar no meu Instagram ou no meu Linkedin.</h2>
    </div>
    ); 
}

export default function App(){
  return(
    <div>
      <Titulo></Titulo>
      <Descricao nome="Gabriel" genero="Bem vindo"></Descricao>
    </div>
  );
}