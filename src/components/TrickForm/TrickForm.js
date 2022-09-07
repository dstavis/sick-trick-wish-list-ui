import { Component } from 'react';
import './TrickForm.css';

class TrickForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trickName: "Default",
      trickStance: "regular",
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
      stance: this.state.trickStance
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
        <input name="trickName" value={this.state.name} onChange={this.handleChange}>
        </input>
        <button>Send it!</button>
      </form>
    );
  }
}

export default TrickForm;