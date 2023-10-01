import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
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
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Recents</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Page content */}
      <div className="container mt-5">
        <h1>Hello, I am a Chatbot. How can I help you today?</h1>
          <input type="text" className="form-control" placeholder="Ask Here!" />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">Send</button>
          </div>

      </div>
    </div>
  );
}

export default App;