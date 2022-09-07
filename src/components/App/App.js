import { Component } from 'react';
import './App.css';
import getTricks from "../../ApiCalls"
import Trick from '../Trick/Trick';
import TrickForm from "../TrickForm/TrickForm"

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: []
    }
  }

  componentDidUpdate = () => {
    console.log("App updated. App state: " + this.state)
  }

  componentDidMount = () => {
    getTricks().then( (data) => {
      this.updateTricks(data)
    })
  }

  updateTricks = (tricksData) => {
    this.setState({tricks: tricksData})
    console.log(tricksData)
  }

  saveTrick = (trickData) => {
    this.setState({
      tricks: [...this.state.tricks, trickData]
    })
  }

  render() {

    let tricks = this.state.tricks.map( (trick) => {
      const {id, name, tutorial, obstacle, stance} = trick
      return <Trick id={id} key={id} name={name} obstacle = {obstacle} tutorial = {tutorial} stance = {stance}  />
    })

    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <main>
          <TrickForm saveTrick={this.saveTrick} />
          <div className="trick-container">
          { tricks }
          </div>
        </main>
      </div>
    );
  }
}

export default App;