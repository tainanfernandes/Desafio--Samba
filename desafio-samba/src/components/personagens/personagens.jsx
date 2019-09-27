//Feito por Tainá Nascimento

import React, { Component } from 'react';
import './personagens.css';

export default class Personagens extends Component {
  constructor(props){
    super(props)

    this.state = {
      statusColorAlive: "#008f1f",
      statusColorDead: "#bd0707"
    }
  }

  render(){
    console.log(this.props.personagens);
    return (
      <div className="conteudo"> 
             
              {this.props.personagens.map(personagem => {
                 return (
                  <div className="card">
                    <div style={{backgroundImage: `url(${personagem.img})` }}>
                      <h4 style={ personagem.status === "Alive" ? {backgroundColor: this.state.statusColorAlive} : {backgroundColor: this.state.statusColorDead}  }>{ personagem.status }</h4>
                      <h2 className="card-conteudo">{personagem.name}</h2>
                      <h5 className="card-conteudo">apelido: {personagem.nickname}</h5>
                      <h3 className="card-conteudo">{personagem.birthday}</h3>
                    </div>
                </div>
                      
                 ); 
              })}
      </div>
    );
  }
}