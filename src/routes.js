import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Principal from './pages/principal';
import Cadastro from './pages/cadastro';
import Carrinho from './pages/carrinho';

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact component = {Principal}/>
                <Route path = "/cadastro" exact component = {Cadastro}/>
                <Route path = "/carrinho" exact component = {Carrinho}/>
            </Switch>
        </BrowserRouter>
    );


}

