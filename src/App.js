import React, {useState, useEffect} from "react";
import "./App.css";
import Chatlistitem from "./components/Chatlistitem";
import Chatintro from "./components/Chatintro";
import Chatwindow from "./components/chatWindow";

import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from '@mui/icons-material/Search';



function App() {

  const [Chatlist, setChatList] = useState([
    {chatId: 1, title: 'Matheus', image:'https://img.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg?size=338&ext=jpg'},
    {chatId: 2, title: 'João', image:'https://img.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg?size=338&ext=jpg'},
    {chatId: 3, title: 'Lucas', image:'https://img.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg?size=338&ext=jpg'},
    {chatId: 4, title: 'Alex', image:'https://img.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg?size=338&ext=jpg'}
  ]);
  const [activeChat, setActiveChat] = useState({});
    return (
      <section>
        <div className="app-window">
          <div className="sidebar">
            <header>
                <img
                  className="header--avatar"
                  src="https://img.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg?size=338&ext=jpg"
                  alt=""
                ></img>
                <div className="header--buttons">
                  <div className="header--btn">
                    <DonutLargeIcon style={{ color: "#919191" }} />
                  </div>
                  <div className="header--btn">
                    <ChatIcon style={{ color: "#919191" }} />
                  </div>
                  <div className="header--btn">
                    <MoreVertIcon style={{ color: "#919191" }} />
                  </div>
                </div>
            </header>

            <div className="search">
                <div className="search--input">
                    <SearchIcon fontSize="small" style={{ color: "#919191" }}/>
                    <input type="search" placeholder="Procurar ou começar uma nova conversa"/>
                </div>
            </div>
            
            <div className="chatlist">
              {Chatlist.map((item, key)=> (
                <Chatlistitem
                  key={key}
                  data={item}
                  active={activeChat.chatId === Chatlist[key].chatId}
                  onClick={()=> setActiveChat(Chatlist[key])}
                />
              ))}
            </div>
            </div>
           
            <div className="contentarea">
                {activeChat.chatId !== undefined && 
                <Chatwindow />}
                {activeChat.chatId === undefined &&
                <Chatintro/>}             
            </div>
        </div>
      </section>
    )
}

export default App;
