import React, { useEffect, useState } from "react";
import "../assets/css/chat.css";
import Annonce from "./Annonce";
import token from "../token";
function ChatBox() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messageContent, setMessageContent] = useState('');
  const [conversation, setConversation] = useState(null);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
		const response = await fetch('https://okazcar.up.railway.app/contacts', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result);
      } catch (error) { 
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchConversation = async () => {
      try {
        if (selectedUser) {
          const response = await fetch('https://okazcar.up.railway.app/conversations/nliQyG2ux0WukrWuDa0o0H7FzG42', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const result = await response.json();
          setConversation(result);
        }
      } catch (error) {
        console.error('Error fetching conversation:', error.message);
      }
    };

    fetchConversation();
  }, [selectedUser]);

  const handleUserClick = async (user) => {
    setSelectedUser(user);
    try {
  
        // If the message is sent successfully, fetch the updated conversation data
        alert("https://okazcar.up.railway.app/conversations/"+selectedUser.utilisateur.utilisateurId);
        const fetchConversationResponse = await fetch("https://okazcar.up.railway.app/conversations/"+selectedUser.utilisateur.utilisateurId, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });
        
  
        if (!fetchConversationResponse.ok) {
          throw new Error('Network response was not ok while fetching conversation');
        }
  
        const updatedConversation = await fetchConversationResponse.json();
        setConversation(updatedConversation);
    } catch (error) {
      console.error('Error sending message:', error.message);
    } finally {
      setIsSending(false);
      setMessageContent('');
    }
  };


  const handleMessageSend = async () => {
    try {
      if (selectedUser && messageContent.trim() !== '' && !isSending) {
        setIsSending(true);
        const sendMessageResponse = await fetch('https://okazcar.up.railway.app/conversation', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
          body: new URLSearchParams({
            personId1: data.moi.utilisateur.utilisateurId,
            username1: data.moi.utilisateur.username,
            personId2: selectedUser.utilisateur.utilisateurId,
            username2: selectedUser.utilisateur.username,
            content: messageContent,
          }),
        });
  
        if (!sendMessageResponse.ok) {
          throw new Error('Network response was not ok while sending the message');
        }
  
        // If the message is sent successfully, fetch the updated conversation data
        const fetchConversationResponse = await fetch("https://okazcar.up.railway.app/conversations/"+selectedUser.utilisateur.utilisateurId, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });
  
        if (!fetchConversationResponse.ok) {
          throw new Error('Network response was not ok while fetching conversation');
        }
  
        const updatedConversation = await fetchConversationResponse.json();
        setConversation(updatedConversation);
      }
    } catch (error) {
      console.error('Error sending message:', error.message);
    } finally {
      setIsSending(false);
      setMessageContent('');
      console.log('Message sent successfully');
    }
  };
  

  return (
    <div id="container">
      <aside>
        <header>
          <input type="text" placeholder="search" />
        </header>
        {!data && <p>loading...</p>}
        {data && (
			<>
			{/* <div>
			<pre>{JSON.stringify(data, null, 2)}</pre>
			</div> */}
          <ul>
            {data.contacts.map((contact) => (
              <li
                key={contact.utilisateur.utilisateurId}
                onClick={() => handleUserClick(contact)}
                className={selectedUser && selectedUser.utilisateurId === contact.utilisateur.utilisateurId ? "selected" : ""}
              >
                <img src={`data:image/png;base64,${contact.userMongoDb.image}`} alt="xxx" width={"50px"} />
                <div>
                  <h2>{contact.utilisateur.username} <span className="status green"></span></h2>
                </div>
              </li>
            ))}
          </ul>
		  </>
        )}
        {error && <div><p>Error: {error}</p></div>}
      </aside>
      {/* main content */}
      <main>
        {selectedUser && (
          <>
            <header>
              <img src={`data:image/png;base64,${selectedUser.userMongoDb.image}`} alt="xxx" width={"50px"}/>
              <div>
                <h2>Discussion avec {selectedUser.utilisateur.username}</h2>
                {/* <h3>already 1902 messages</h3> */}
              </div>
              {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_star.png" alt="" /> */}
            </header>
            <ul id="chat">
              {conversation && conversation.messages.map((message, index) => (
                <>
                <li key={index} className={message.senderId === data.moi.utilisateur.utilisateurId ? 'me' :'you'}>
                  <div className="entete">
                    <span className={`status ${message.senderId === data.moi.utilisateur.utilisateurId ? 'blue' : 'green'}`}></span>
                    <h2>{message.senderId === data.moi.utilisateur.utilisateurId ? 'moi' : selectedUser.utilisateur.username }</h2>
                    <h3>{message.dateTimeSend}</h3>
                  </div>
                  <div className="triangle"></div>
                  <div className="message">
                    {message.content}
                  </div>
                </li>
                </>
              ))}
            </ul>
            <footer>
              <textarea
                placeholder="Type your message..."
                value={messageContent}
                onChange={(e) => setMessageContent(e.target.value)}
              ></textarea>
              {isSending && (
                <button onClick={handleMessageSend} style={{backgroundColor:"lightgray"}} disabled>Sending...</button>
              )}
              {!isSending && (
                <button onClick={handleMessageSend} >Send</button>
              )}
            </footer>
				</>
			)}
			{!selectedUser && (
				<>
					<header>
					{/* <img src={`data:image/png;base64,${selectedUser.userMongoDb.image}`} alt="" /> */}
					<div>
						{/* <h2>Chat with {selectedUser.utilisateur.username}</h2> */}
						<h3>Inbox</h3>
					</div>
					{/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_star.png" alt="" /> */}
					</header>
					<h1 style={{textAlign:"center",marginTop:"30%",color:"lightgray"}}>Choisissez un contact.</h1>
				</>
			)}
			</main>
			{/* end main content */}
			<main style={{ width: "21%" }}>
				<header>
					{/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt="" /> */}
					<div>
						<h2>Current Annonce</h2>
						<h3>very active</h3>
					</div>
				</header>
				<div style={{
					display: "grid",
					gridTemplateColumns: "repeat(1, minmax(20px, 1fr))", // Adjust the number of columns and minmax values as needed
					gridGap: "16px", // Adjust the gap between grid items as needed
					width: "100%",
					height: "60vh",
					bottom: "16px",
					zIndex: "1000",
					position: "",
					borderRadius: "10px",
					overflowY: "scroll",
				}}>
					<Annonce />
					<Annonce />
					<Annonce />
				</div>
			</main>
		</div>
    )
}

export default ChatBox;