import React, { useState, useEffect }  from 'react';
import "./SidebarChat.css";
import { Avatar } from '@mui/material';

function SidebarChat({ addNewChat }) {
    const [seed, setSeed] = useState ('');


    useEffect(() => {
      setSeed(Math.floor(Math.random() * 5000 ));
    }, []);

    const createChat = () => {};


  return  !addNewChat ? (
    <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/micah/${seed}.svg`} />
        <div className="sidebarChat__info">
            <h2>Room name</h2>
            <p>Last message...</p>
        </div>
    </div>
  ) : (
      <div onClick={createChat}
      className="sidebarChat">
          <h2>Add New Chat</h2>
      </div>
  );
}

export default SidebarChat;