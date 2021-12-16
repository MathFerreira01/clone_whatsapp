import React from "react";
import './Chatintro.css'
import Chatintroimg from "./Image/chatintroimg.png"


function Chatintro () {
    return (
        <div className="chatintro">
            <img src={Chatintroimg} alt=""/>
            <h1>Mantenha seu celular conectado</h1>
            <h2>O WhatsApp conecta ao seu telefone para sincronizar suas mensagens.<br/>
                Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.
            </h2>
        </div>
    )
}

export default Chatintro