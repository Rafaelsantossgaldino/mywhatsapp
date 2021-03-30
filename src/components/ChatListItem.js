/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './ChatlistItem.css'

export default () =>{
    return (
        <div className="chatListItem">
            <img className="chatListItem--avatar" src="https://www.w3schools.com/howto/img_avatar.png"/>
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">Rafael Galdino</div>
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