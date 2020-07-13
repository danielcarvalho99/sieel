import React from 'react';
import './styles.css';
import logo from '../../Components/images/logo.png';
import {FiUser} from 'react-icons/fi';
import {BsX} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import {AbrirJanela,FecharJanela} from '../functions/functions'

export default function Header(){

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
                        <a onClick={AbrirJanela} href="#">Login</a>
                    </li>

                    <li>
                        <a href="/cadastro" >Cadastro </a>
                    </li>
                </ul>
            </nav>

            <div id = "login">
                <form>
                    <div>                    
                        <BsX onClick={FecharJanela} id="BotaoFechar" size={25}/>
                    </div>
                    <div className="loginTexto">
                        Efetue seu login
                    </div>
                    <div className="loginInput">
                        <input placeholder = "Login"/>
                        <input placeholder = "Senha"/>
                    <br/>
                    </div>    
                    <button >Entrar</button> 
                </form>
            </div>
        </div>

                </div>
  
    );
}