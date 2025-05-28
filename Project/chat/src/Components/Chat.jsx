import React, { useState } from 'react';
import './Chat.css';
import respostas from '../Json/awsers.json';
import userImage from '../assets/user.jpg'; // Imagem do usuário
import botImage from '../assets/bot.jpeg';   // Imagem do bot

function Chat() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    const userMessage = { sender: 'user', text: userInput };
    const botResponse = respostas[userInput.toLowerCase()] || "Desculpe, não entendi. Pode perguntar de outra forma?";
    const botMessage = { sender: 'bot', text: botResponse };

    setMessages([...messages, userMessage, botMessage]);
    setUserInput('');
  };

  return (
    <>
      <div id="header">
        <h3 className='contact-name'>Baymax</h3>
        <img src="https://i.pinimg.com/736x/4c/56/e4/4c56e49abe6c0cfd8f7b2df87c2608e5.jpg" id='profile-image' alt="Perfil"></img>
      </div>

      {/* Histórico de mensagens */}
      <div id="historic">
        {messages.map((msg, index) => (
          <div key={index} className={`message-container ${msg.sender}`}>
            <img src={msg.sender === 'user' ? userImage : botImage} alt="Avatar" className="message-avatar" />
            <p className="message-text">{msg.text}</p>
          </div>
        ))}
      </div>

      {/* Campo de entrada */}
      <div id="footer">
        <input 
          type='text' 
          placeholder='Escreva sua mensagem...' 
          id='input-mensage-text'
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button id='submit-btn' onClick={handleSendMessage}>Enviar</button>
      </div>
    </>
  );
}

export default Chat;
