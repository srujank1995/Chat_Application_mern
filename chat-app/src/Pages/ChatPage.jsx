import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {

  const [chats, setChats] = useState([]);
 
  const fetchData = async () => {
    const { data } = await axios.get("/api/chats");
    setChats(data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
