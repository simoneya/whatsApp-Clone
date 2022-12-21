import React from 'react';
import "./SidebarChat.css";
import { Avatar } from '@mui/material';

function SidebarChat() {
  return (
    <div className="sidebarChat">
        <Avatar src="https://avatars.dicebear.com/api/adventurer/123.svg" />
        <div className="sidebarChat__info">
            <h2>Room name</h2>
            <p>Last message...</p>
        </div>
    </div>
  )
}

export default SidebarChat;