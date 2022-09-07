import { Component } from 'react';
import './TrickForm.css';

class TrickForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trickName: "",
      trickStance: "",
    }
  }

  componentDidMount = () => {
  }

  submitTrick = () => {

  }

  componentDidUpdate = () => {
    console.log(this.state)
  }

  handleChange = ({target}) => {
    const name = target.name;
    const value = target.value;
    
    this.setState({
      [name]: value,
    })
  }

  render() {

    return (
      <form className="trick-form">
        <select name="trickStance" onChange={this.handleChange}>
          <option value="regular">Regular</option>
          <option value="switch">Switch</option>
        </select>

        <label htmlFor="trickName">
          Name: 
        </label>
        <input name="trickName" value={this.state.name} onChange={this.handleChange}>
        </input>
        <label htmlFor="trickStance" required >Select your stance: </label>
      </form>
    );
  }
}

export default TrickForm;