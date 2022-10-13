import React from 'react'
import './App.css'
import Greeting from './components/Greeting'
import Header from './components/Header'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
      </div>
    )
  }
}

export default App
