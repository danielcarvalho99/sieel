import React,{useState} from 'react';
import './styles.css';
import api from '../../services/api';


export default function Cadastro(){

   const [name,setName] = useState('');
   const [surname,setSurname] = useState('');
   const [rg,setRg] = useState('');
   const [tel,setTel] = useState('');
   const [university,setUniversity] = useState('');
   const [matricula,setMatricula] = useState('');
   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');

   async function handleAddUser(e) {
    e.preventDefault();

        const response = await api.post("/auth/cadastro",{
                name,surname,rg,tel,matricula,
                email,password,university,
        });

        console.log(response.data);
        
        window.location.replace('/carrinho');
      
    }

   
    return(

        <div className="body">
        <span className="nobreak">
            
            <h1>Bem vindo ao Sistema de Cadastro integrado da SIEEL</h1>
            <h3>Ingressos, compras, presenças e certificados. Tudo isso em um único lugar</h3>            
            
            </span>
           
            <div className="JanelaCadastro">

            <form onSubmit={handleAddUser}>
                <div className="nome">
                    <label>Nome</label> <br />
                    <input 
                        className="input_box"
                        id="nome"
                        name="nome"
                        size={30}maxLength={100}
                        placeholder="Insira seu nome"
                        value={name}
                        onChange={e=>setName(e.target.value)}
                        required/>
                    <br />
                </div>

                <div className="sobrenome">
                <label>Sobrenome</label> <br />
                <input
                    className="input_box"
                    id="sobrenome"
                    name="sobrenome"
                    size={30}maxLength={100}
                    placeholder="Insira o seu sobrenome"
                    value={surname}
                    onChange={e=>setSurname(e.target.value)}
                    required/>
                <br />
                </div>

                <div className="rg">
                <label>Número do RG</label> <br />
                <input
                    id="rg"
                    name="rg"
                    className="input_box"
                    size={30}maxLength={30}
                    placeholder="Insira o seu número de RG"
                    value={rg}
                    onChange={e=>setRg(e.target.value)}
                    required/>
                <br />
                </div>

                <div className="tel">
                    <label>Telefone de contato</label> <br />
                    <input 
                        type="tel"
                        id="tel"
                        name="tel"size={30}
                        className="input_box"
                        placeholder="Insira o seu telefone para contato"
                        value={tel}
                        onChange={e=>setTel(e.target.value)}
                        required/>
                <br />
                </div>

                <div className="faculdade">
                <label>
                    Qual é a sua universidade? <br />
                </label>
                <br />
                    <input type="radio" name="faculdade" value={university} onChange={e=>setUniversity("USP")}/>
                    USP <br/>
                    <input type="radio" name="faculdade" value={university} onChange={e=>setUniversity("UFSCar")}/>
                    UFSCar <br />
                    <input type="radio" name="faculdade" value={university} onChange={e=>setUniversity("Outro")}/>
                    Outro <br />
                </div>

                <div className="matricula">
                    <label>Número da Matrícula</label> <br />
                    <input tid="matricula"name="matricula"
                        className="input_box"size={30}maxLength={30}
                        placeholder="Insira o seu número de matrícula"
                        value={matricula}
                        onChange={e=>setMatricula(e.target.value)}
                        required/>
                <br />

                </div>
                <div className="email">
                    <label>E-mail</label> <br />
                    <input 
                        type="email"id="email"name="email"
                        className="input_box"size={30}
                        placeholder="Insira um email"
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                        required/>
                <br />
                </div>

                <div className="criar_senha">
                    <label>Criar senha</label> <br />
                    <input
                         type="password"id="criar_senha" name="criar_senha"className="input_box"
                         size={30}
                         maxLength={50}
                         placeholder="Crie uma senha"
                         value={password}
                         onChange={e=>setPassword(e.target.value)}
                         required/>
                <br />
                </div>

                <div className="confirmarSenha">
                    <label >Confirmar senha</label> <br />
                    <input 
                        type="password"id="criar_senha" name="criar_senha"
                        className="input_box"
                        size={30}maxLength={50}
                        placeholder="Confirme sua senha"
                        required/>
                <br />
                </div>

                <div className="cadastrar">
                    <br />
                    <button type="submit"
                    id="botao_cadastro"
                    name="Cadastrar">
                    Cadastrar
                    </button>
                </div>
            </form>
            </div>
        </div>
    );


}