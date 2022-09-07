import { Component } from 'react';
import './TrickForm.css';

class TrickForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trickName: "default",
      trickStance: "regular",
      trickObstacle: "flatground",
      trickLink: "http://www.example.com"
    }
    this.saveTrick = props.saveTrick;
  }

  componentDidMount = () => {
  }

  componentDidUpdate = () => {
    console.log("Form updated. State: ", this.state)
  }

  handleChange = ({target}) => {
    const name = target.name;
    const value = target.value;
    
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const trick = {
      name: this.state.trickName,
      stance: this.state.trickStance,
      obstacle: this.state.trickObstacle,
      tutorial: this.state.trickLink,
    }
    this.saveTrick(trick)
  }

  render() {

    return (
      <form className="trick-form" onSubmit={this.handleSubmit}>
        
        <label htmlFor="trickStance" required >Select your stance: </label>
        <select name="trickStance" onChange={this.handleChange}>
          <option value="regular">Regular</option>
          <option value="switch">Switch</option>
        </select>

        <label htmlFor="trickName">
          Name: 
        </label>
        <input name="trickName" value={this.state.trickName} onChange={this.handleChange}>
        </input>
        
        <label htmlFor="trickObstacle" required >Obstacle: </label>
        <select name="trickObstacle" onChange={this.handleChange}>
          <option value="flatground">Flatground</option>
          <option value="ledge">Ledge</option>
          <option value="stairs">Stairs</option>
          <option value="pool">Pool</option>
        </select>

        <label htmlFor="trickLink">
          Link to Tutorial:  
        </label>
        <input name="trickLink" value={this.state.trickLink} onChange={this.handleChange}>
        </input>

        <button>Send it!</button>
      </form>
    );
  }
}

export default TrickForm;