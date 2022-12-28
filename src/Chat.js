
import React, { useState, useEffect } from 'react';
import { Avatar,  IconButton } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import { useParams } from "react-router-dom";
import "./Chat.css";
import db from './firebase';
import firebase from "firebase";
import { useStateValue } from "./StateProvider";


function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState ("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);
    const [{ user }, dispatch] = useStateValue();

    useEffect (() => {
      if(roomId) {
        db.collection('rooms')
        .doc(roomId)
        .onSnapshot(snapshot => (
          setRoomName(snapshot.data().name)
        ));

        db.collection('rooms').doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')   /* asc= ascending order = from oldest to newest message column wise. */
        .onSnapshot(snapshot => (
          setMessages(snapshot.docs.map(doc => doc.data()))
        ));
      }
    }, [roomId]);


    useEffect(() => {
      setSeed(Math.floor(Math.random() * 5000 ));
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("You typed >>>" , input);

        db.collection('rooms').doc(roomId).collection('messages').add({
          message: input,
          name: user.displayName, /*user displayName comming from google authentication */
          timestamp: firebase.firestore.FieldValue.serverTimestamp(), /* to show real time depend on area you live. */
        });

        setInput(""); /* clear input after press enter */
    };

  return (
    <div className="chat">
        <div className="chat__header">
            <Avatar  src={`https://avatars.dicebear.com/api/micah/${seed}.svg`} />
          <div className="chat__headerInfo">
              <h3>{ roomName }</h3>
              <p>
               last seen{ " " }
               {new Date(
                messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()}
              </p>
          </div>
          <div className="chat__headerRight">
                <IconButton>
                  <SearchOutlinedIcon />
               </IconButton>
               <IconButton>
                  <AttachFileIcon />
                </IconButton>
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
          </div>
        </div>
        <div className="chat__body">
           {messages.map(message => (
            <p className={`chat__message ${message.name === user.displayName && `chat__reciever`}`}>
              <span className="chat__name"> 
                {message.name}
              </span>
                {message.message}
              <span className="chat__timestamp">
                {new Date(message.timestamp?.toDate()).toUTCString()}
              </span>
            </p>
           ))}
            
        </div>
        <div className="chat__footer">
            <InsertEmoticonIcon />
            <form>
                <input 
                value = {input}
                onChange = {(e) => setInput(e.target.value)}
                placeholder="Type a message" 
                type="text" /> 
                <button onClick={sendMessage} type="submit">Send a message</button>
            </form>
            <MicIcon />
        </div>
    </div>
  );
}

export default Chat;