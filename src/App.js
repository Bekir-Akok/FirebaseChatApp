import React from 'react';
import SignIn from './Components/SignIn';
import SignOut from './Components/SignOut';
import ChatRoom from './Components/ChatRoom';
import './App.css';
import { IoRocketSharp } from 'react-icons/io5';


import {auth } from './Components/firebase';

import { useAuthState } from 'react-firebase-hooks/auth';


function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>Kodluyoruz <IoRocketSharp/></h1>
        <SignOut />
      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;
