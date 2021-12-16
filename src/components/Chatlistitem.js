import React from "react";
import './Chatlistitem.css'

function Chatlistitem ({onClick, active, data}) {
    return (
        <div className={`Chatlistitem ${active?'active':''}`}
        onClick={onClick}
        >
            <img className="chatlistitem--avatar" src={data.image} alt=""/>
            <div className="chatlistitem--lines">
                <div className="chatlistitem--line">
                    <div className="chatlistitem--name">{data.title}</div>
                    <div className="chatlistitem--date">19:00</div>
                </div>
                <div className="chatlistitem--line">
                    <div className="chatlistitem--lastmsg">
                        <p>GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chatlistitem