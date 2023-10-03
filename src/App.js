import './App.css';
import React, { useState } from 'react';
import Blogs from './components/Blogs';
import Createblog from './components/Createblog';
import Navbar from './components/Navbar';
import Alert from './components/Alertmessage';


function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const postElements = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = (localStorage.getItem(key));
    postElements.push(
      <Blogs key={key} titleprop={key} contentprop={value} showAlert={showAlert} />
    );
  }

  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Alert alert={alert} />
        <main>
          <section>
            <h2>All Posts</h2>
            <ul id="post-list"></ul>
            {postElements}

          </section>
        </main>
        <div className="container mains">
          <Createblog showAlert={showAlert} />
        </div>
      </div>
      <footer>
        <p>&copy; 2023 My Blog</p>
      </footer>






    </div>
  );
}

export default App;
