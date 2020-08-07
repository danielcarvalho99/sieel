import React from 'react';
import './styles.css';


export default function Cadastro(){

    return(

        

        <div className="body">
        <span className="nobreak">
            
            <h1>Bem vindo ao Sistema de Cadastro integrado da SIEEL</h1>
            <h3>Ingressos, compras, presenças e certificados. Tudo isso em um único lugar</h3>            
            
            </span>
           
            <div className="JanelaCadastro">

            <form>
                <div className="nome">
                    <label>Nome</label> <br />
                    <input 
                        type="text"className="input_box"id="nome"name="nome"size={30}
                        maxLength={100}placeholder="Insira seu nome"/>
                    <br />
                </div>

                <div className="sobrenome">
                <label>Sobrenome</label> <br />
                <input 
                    type="text"className="input_box"id="sobrenome"name="sobrenome"
                    size={30}maxLength={100}placeholder="Insira o seu sobrenome"/>
                <br />
                </div>

                <div className="rg">
                <label>Número do RG</label> <br />
                <input
                    type="text"id="rg"name="rg"className="input_box"size={30}
                    maxLength={30}placeholder="Insira o seu número de RG"/>
                <br />
                </div>

                <div className="tel">
                    <label>Telefone de contato</label> <br />
                    <input 
                        type="tel"id="tel"name="tel"size={30}className="input_box"
                        placeholder="Insira o seu telefone para contato"/>
                <br />
                </div>

                <div className="faculdade">
                <label>
                    Qual é a sua universidade? <br />
                </label>
                <br />
                    <input type="radio" name="faculdade" defaultValue="USP" />
                    USP <br/>
                    <input type="radio" name="faculdade" defaultValue="UFSCar" />
                    UFSCar <br />
                    <input type="radio" name="faculdade" defaultValue="outro" />
                    Outro <br />
                </div>

                <div className="matricula">
                    <label>Número da Matrícula</label> <br />
                    <input 
                        type="text"id="matricula"name="matricula"
                        className="input_box"size={30}maxLength={30}placeholder="Insira o seu número de matrícula"/>
                <br />

                </div>
                <div className="email">
                    <label>E-mail</label> <br />
                    <input 
                        type="email"id="email"name="email"
                        className="input_box"size={30}placeholder="Insira um email"/>
                <br />
                </div>

                <div className="criar_senha">
                    <label>Criar senha</label> <br />
                    <input
                         type="password"id="criar_senha" name="criar_senha"className="input_box"
                         size={30}maxLength={50}placeholder="Crie uma senha"/>
                <br />
                </div>

                <div className="confirmarSenha">
                    <label >Confirmar senha</label> <br />
                    <input 
                        type="password"id="criar_senha" name="criar_senha"className="input_box"
                        size={30}maxLength={50}placeholder="Confirme sua senha"/>
                <br />
                </div>

                <div className="cadastrar">
                    <br />
                    <button onclick="cadastrar"id="botao_cadastro"name="Cadastrar">
                    Cadastrar
                    </button>
                </div>
            </form>
            </div>
        </div>
    );


}