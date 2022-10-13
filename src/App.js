import React from 'react'
import './App.css'

class App extends React.Component {
  state = {
    count: 0
  }

  add = () => {
    this.setState(preCount => ({ count: preCount.count + 1 }))
  }

  subtract = () => {
    this.setState(preCount => ({ count: preCount.count - 1 }))
  }

  render() {
    return (
      <div className="counter" >
        <button className="counter--minus" onClick={this.subtract}>–</button>
        <div className="counter--count">
          <h1>{this.state.count}</h1>
        </div>
        <button className="counter--plus" onClick={this.add}>+</button>
      </div>
    )
  }
}

export default App