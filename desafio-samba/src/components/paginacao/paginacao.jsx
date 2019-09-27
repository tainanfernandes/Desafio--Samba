//Feito por Tainá Nascimento

import React from 'react';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import './paginacao.css';

export default function paginacao(props) {
  return (
    <div className="paginacao">
        <ButtonGroup color="secundary" variant="contained" className="pagina" size="small" aria-label="small outlined button group">
              <Button onClick={() => props.onClickPaginacao(1)} >1</Button>
              <Button onClick={() => props.onClickPaginacao(2)}>2</Button>
              <Button onClick={() => props.onClickPaginacao(3)}>3</Button>
              <Button onClick={() => props.onClickPaginacao(4)}>4</Button>
              <Button onClick={() => props.onClickPaginacao(5)}>5</Button>
        </ButtonGroup>
    </div>
      
    );
  }