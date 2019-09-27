//Feito por Tainá Nascimento

import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://www.breakingbadapi.com/api/',
});

export default Api;