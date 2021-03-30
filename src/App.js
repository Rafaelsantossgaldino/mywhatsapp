/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect }from "react";
import './App.css'

import ChatListItem from './components/ChatListItem'

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

export default () => {

  const [chatlist, setChatlList] = useState([{},{},{},{}])

  return ( 
    <div className="app-window">
      <div className="part-esquerda">
        
      <header>
        <img className="avatar--header" src="https://www.w3schools.com/howto/img_avatar.png"/>
        <div className="header--buttons">
          <div className="header--btn">
            <DonutLargeIcon style={{color: '#919191'}} />
          </div>
          <div className="header--btn">
            <ChatIcon style={{color: '#919191'}} />
          </div>
          <div className="header--btn">
            <MoreVertIcon style={{color: '#919191'}} />
          </div>
        </div>
      </header>

      <div className="search">
        <div className="search--input">
          <SearchIcon fontSize="small" style={{color: '#919191'}} />
          <input type="search" placeholder="Procurar o começar uma nova conversa" />
        </div>
      </div>

      <div className="chatlist">
        {chatlist.map((item, key) =>(
          <ChatListItem 
            key={key} 
          />
        ))}
      </div>

      </div>
      <div className="contentarea">
       
      </div>
    </div>
  );
};
