import React from "react"
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import GoOut from "./components/GoOut"
import Users from "./components/Users"
import Counter from "./components/Counter"
import Login from "./components/Login"

class App extends React.Component {

  state = ({
    darkMoe: true,
  })

  toggleDarkMode = () => {
    this.setState({
      darkMode: !this.state.darkMode
    })
  }

  render() {
    return (
      <main>
        <Navbar
          darkMode={this.state.darkMode}
          toggleDarkMode={this.toggleDarkMode}
        />
        <Routes >
          <Route path="/" element={<GoOut />} />
          <Route path="users" element={<Users />} />
          <Route path="counter" element={<Counter />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </main>
    )
  }
}

export default App
