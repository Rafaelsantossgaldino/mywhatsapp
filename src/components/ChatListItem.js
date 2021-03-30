/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './ChatlistItem.css'

export default ({onClick, active, data}) =>{
    return (
        <div 
            className={`chatListItem ${active? 'active': ''}`}
            onClick={onClick}
        >
            <img className="chatListItem--avatar" src={data.image} alt=""/>
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">{data.title}</div>
                    <div className="chatListItem--date">20:00</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>Ola, tudo bem?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}