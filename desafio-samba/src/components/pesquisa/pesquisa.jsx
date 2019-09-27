//Feito por Tainá Nascimento

import React from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from "@material-ui/core/styles";

import './pesquisa.css';

const styles = {
        iconButton: {
            color:"#c0c0c0",
            marginTop:"20px"
        }
    };

 function pesquisa(props) {
    const { classes } = props;
    
  return (
    <div class="pesquisa">
        <div>
            <TextField
                color="danger"
                id="pesquisa"
                label="Pesquisar personagem"
                className=""
                margin="normal"
                fullWidth={true}
                onChange={(e) => props.procurarPersonagens(e)}
                />
            <IconButton className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
        </div>
    </div>
  );
}


export default withStyles(styles)(pesquisa);