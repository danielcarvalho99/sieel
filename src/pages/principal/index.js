import React from 'react';
import './styles.css';

function abrir()  {

        document.getElementById('popup').style.display = screen ;

}


export default function Principal(){

    return(

        <div>
        <title>Sistema Integrado da SIEEL</title>
        <div className="body">
        <h1>Página principal da SIEEL</h1>

        <div className="popup">

            <form>

                <input placeholder = "login"/>

                <input placeholder = "senha"/>    
            
            
            </form>

        </div>

        </div>

        </div>
    

    );

}