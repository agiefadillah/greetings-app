import React from 'react';

import Login from './Login';

var isLoggedIn = false;

const currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">
      {
        // Ternary
        // isLoggedIn === true ? <h1>Hello</h1> : <Login />

        // AND Operator
        // currentTime > 12 ? <h1>Why Are You Still Working?</h1> : null
        // Bisa Juga Kek Gini
        currentTime > 12 && <h1>Why Are You Still Working?</h1>
      }
    </div>
  );
}

export default App;
