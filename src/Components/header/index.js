import React from 'react';
import './styles.css';
import logo from '../../Components/images/logo.png';
import {FiUser} from 'react-icons/fi';
import {Link} from 'react-router-dom';

export default function Header(){

    return (
        
        <div>

        <title>Sistema Integrado da SIEEL</title>

        <div className = "header">

        <a href= "/" ><img src = {logo} alt = "logo" /> </a>
        
        <nav>
            <ul className = "navLinks">
                <li>
                <FiUser size = {20} />
                </li>    

                <li>
                    <a href="#">Login</a>
                </li>
                <li>
                    <a href= "/cadastro" >Cadastro </a>
                </li>
            </ul>
        </nav>
  
        </div>

        </div>
  
    );
}