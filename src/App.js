import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Title from './components/title';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';


class App extends Component {
  
  render() {
    return (
      <div className="app">
        <Title />
        <MessageList />
        <SendMessageForm />
     </div>
    )
  }
}

export default App;
