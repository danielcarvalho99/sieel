import React from 'react';
import './styles.css';
import facebook from '../../Components/images/facebook.png';
import instagram from '../../Components/images/instagram.png';

export default function Footer(){

    return(

        <div className="footer">

        Fique por dentro do evento: 

            <div className = "icons">

                <a href = "https://www.instagram.com/sieel.oficial/" target = "_blank"><img class = "insta" src = {instagram} alt = "instagram"/></a>
                <a href = "https://www.facebook.com/SIEELSaoCarlos/" target = "_blank"><img class = "face" src = {facebook} alt = "facebook"/></a>

            </div>

            </div>

    );

}