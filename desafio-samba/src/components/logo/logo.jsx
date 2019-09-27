//Feito por Tainá Nascimento

import React from 'react';

import './logo.css';
import pngLogo from '../../images/logo-reto.png';

export default function logo(props) {

 return (
    <div class="logo">
        <img src={pngLogo} alt="Logo breaking bad"/>
    </div>
  );
}
