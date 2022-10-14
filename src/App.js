import React from "react"
import './App.css'

class App extends React.Component {

  state = ({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false
  })

  toggleFavorite = () => {
    this.setState(prevContact => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite
    }))
  }

  render() {
    let starIcon = this.state.isFavorite ? "star-filled.png" : "star-empty.png"
    return (
      <main>
        <article className="card">
          <img src={require('./images/user.png')} alt="" className="card-image" />
          <div className="card-info">
            <img
              src={require(`./images/${starIcon}`)}
              className="card-favorite"
              onClick={this.toggleFavorite}
              alt=""
            />
            <h2 className="card-name">
              {this.state.firstName} {this.state.lastName}
            </h2>
            <p className="card-contact">{this.state.phone}</p>
            <p className="card-contact">{this.state.email}</p>
          </div>
        </article>
      </main>
    )
  }
}

export default App
