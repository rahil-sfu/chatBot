import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import jsPDF from "jspdf";

function App() {
  const [message, setMessage] = useState("");
  const [chatList, setChatList] = useState([]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  }

  const handleSend = () => {
    setChatList([...chatList, message]);
    setMessage("");
  }

  const handleSaveText = () => {
    const blob = new Blob([chatList.join('\n')], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "message.txt");
  }

  const handleSavePdf = () => {
    const doc = new jsPDF();
    doc.text(chatList.join('\n'), 10, 10);
    doc.save("message.pdf");
  }
  const readText = () => {
    // read the text 
  }

  return (
        <div>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">ChatBot</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Recents</a>
            </li>
          </ul>
        </div>
      </nav>
          
      {/* Your JSX structure */}
      <div className="container mt-5">
        <h1>Hello, I am a Chatbot. How can I help you today?</h1>
       
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Ask Here!"
          value={message}
          onChange={handleInputChange}
        />
        <div className="input-group-append">
          <button className="btn btn-secondary" type="button">
            <i className="fas fa-microphone"></i>
          </button>
          <button className="btn btn-primary" type="button" onClick={handleSend}>
            Send
          </button>
        </div>
      </div>

          {chatList.length > 0 && (
            <>
              <button className="btn btn-primary" onClick={readText}>Read</button>
              <button className="btn btn-primary" type="button" onClick={handleSaveText}>Save Text</button>
              <button className="btn btn-primary" type="button" onClick={handleSavePdf}>Save PDF</button>
            </>
          )}
          {chatList.map((chat, index) => (
            <p key={index}>{chat}</p>
          ))}
      </div>
     
    </div>
  );
}

export default App;
