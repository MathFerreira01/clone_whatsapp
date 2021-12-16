import React, {useState} from "react";
import EmojiPicker from 'emoji-picker-react'
import './chatWindow.css'

import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';

function Chatwindow() {

    const[emojiOpen, setEmojiOpen] = useState(false)
    const [text, setText] = useState('')

    const handleEmojiClick = (e, emojiObject) => {
        setText( text + emojiObject.emoji)
    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true);
    }

    const handleCloseEmoji = () => {
        setEmojiOpen(false)
    }

    const handleSendClick = () => {

    }

    const handleMicClick = () => {
        
    }

    return (
        <div className="chatwindow">
            <div className="chatwindow--header">
                <div className="chatwindow--headerinfo">
                    <img className="chatwindow--avatar" src="https://img.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg?size=338&ext=jpg" alt=""/>
                    <div className="chatwindow--name">Matheus Ferreira</div>
                </div>

                <div className="chatwindow--headerbuttons">                  
                    <div className="chatwindow--btn">
                        <SearchIcon style={{color: '#919191'}}/>
                    </div>
                    <div className="chatwindow--btn">
                        <AttachFileIcon style={{color: '#919191'}}/>
                    </div>
                    <div className="chatwindow--btn">
                        <MoreVertIcon style={{color: '#919191'}}/>
                    </div>
                </div>

            </div>
            <div className="chatwindow--body">

            </div>

            <div className="chatwindow--emojiarea" style={{height: emojiOpen ? '200px' : '0px'}}>
                <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar
                    disableSkinTonePicker
                />
            </div>

            <div className="chatwindow--footer">

                <div className="chatwindow--pre">
                    <div 
                        className="chatwindow--btn"
                        onClick={handleCloseEmoji}
                    >
                        <CloseIcon style={{color: '#919191'}}/>
                    </div>

                    <div 
                    className="chatwindow--btn"
                    onClick={handleOpenEmoji}
                    >

                        <EmojiEmotionsIcon style={{color: '#919191'}}/>
                    </div>

                    
                </div>
                <div className="chatwindow--inputarea">
                    <input className="chatwindow--input" type="text"
                    placeholder="Digite uma mensagem"
                    value={text}
                    onChange={e=>setText(e.target.value)}
                    />
                </div>
                <div className="chatwindow--pos">

                    {text === '' &&
                    <div 
                    onClick={handleMicClick}
                    className="chatwindow--btn">
                        <MicIcon style={{color: '#919191'}}/>
                    </div>
                    }
                    {text !== '' &&
                    <div 
                    onClick={handleSendClick}
                    className="chatwindow--btn">
                        <SendIcon style={{color: '#919191'}}/>
                    </div>
                    }

                </div>

            </div>
       </div>
    )
}

export default Chatwindow