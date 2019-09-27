//Feito por Tainá Nascimento


import React,  { Component } from 'react';
import './App.css';

import Logo from './components/logo/logo';
import Pesquisa from './components/pesquisa/pesquisa';
import Personagens from './components/personagens/personagens';
import Paginacao from './components/paginacao/paginacao';
import Api from './services/service';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      personagens: [{}],
      paginacao: {
        limite: 8,
        pagina: 0
      }
    }

    this.onClickPaginacao = this.onClickPaginacao.bind(this);
    this.buscarPersonagens = this.buscarPersonagens.bind(this);
    this.procurarPersonagens = this.procurarPersonagens.bind(this);
  }

  componentWillMount(){
    this.buscarPersonagens();
  }

  buscarPersonagens(){
    Api.get(`/characters?limit=${this.state.paginacao.limite}&offset=${this.state.paginacao.inicio}`)
    .then(response => {
      this.setState({personagens: response.data });
    });
  }

  procurarPersonagens(event){
      console.log(event);
   let nomeCompleto = event.target.value;
   console.log(nomeCompleto);
    if(nomeCompleto != ""){
      nomeCompleto = nomeCompleto.replace(/\s{2,}/g, ' ');
      let nomeParaPequisa = nomeCompleto.replace(/\s{1,}/g,"+");
     
      Api.get(`/characters?name=${nomeParaPequisa}`)
       .then(response => {
         this.setState({personagens: response.data });
       });
    }else{
      this.buscarPersonagens()
    }
  }

  onClickPaginacao(numeroPagina){
    this.setState({
      paginacao: {
        limite: 8,
        inicio: numeroPagina === 1 ? 0 : this.state.paginacao.limite * numeroPagina,
        pagina: numeroPagina,
      }
    }, () => this.buscarPersonagens());
  }

  render() {
    return (
      <div class="corpo">
        <Logo />
        <Pesquisa procurarPersonagens={this.procurarPersonagens} />
        <Personagens personagens={this.state.personagens} />
        
        <Paginacao onClickPaginacao={this.onClickPaginacao} />
      </div>
    );
  }
}

export default App;
