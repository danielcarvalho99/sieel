import React from 'react';
import './styles.css';
import logo from '../../Components/images/logo.png';
import {FiUser} from 'react-icons/fi';
import {BsX} from 'react-icons/bs';
import {AbrirJanela,FecharJanela} from './popup'


function submitHandler(e){

    e.preventDefault()


    window.location.replace('/carrinho');
}

export default function Header(props){

    return (
        
        <div>
        <title>Sistema Integrado da SIEEL</title>
        <div className="header">
            <a href="/" ><img src={logo} alt="logo" /> </a>
            <nav>
                <ul className="navLinks">
                    <li>
                    <FiUser size={20} />
                    </li>    

                    <li>
                        <a onClick={AbrirJanela} >Login</a>
                    </li>

                    <li>
                        <a href="/cadastro" >Cadastro </a>
                    </li>
                </ul>
            </nav>

            <div id="login">
                <form onSubmit={submitHandler}>
                    <div>                    
                        <BsX onClick={FecharJanela} id="BotaoFechar" size={25}/>
                    </div>
                    <div className="loginTexto">
                        Efetue seu login
                    </div>
                    <div className="loginInput">
                        <input placeholder="Login" name="login"/>
                        <input placeholder="Senha" name="password" type='password'/>
                    <br/>
                    </div>    
                    <button id="botaoLogin" type='submit'>
                        Entrar
                    </button> 
                </form>
            </div>
        </div>
                </div>
  
    );
}