import { Component } from 'react';
import './TrickForm.css';

class TrickForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
  }

  componentDidMount = () => {
  }

  submitTrick = () => {

  }

  updateTrick = (name) => {
    this.setState({name: name})
    console.log(this.state)
  }

  render() {

    return (
      <form className="trick-form">
        <label htmlFor="trick-name">
          Name: 
        </label>
        <input name="trick-name" value={this.state.name} onChange={ (e) => {  this.updateTrick(e.target.value)}}>
        </input>
        <label htmlFor="trick-stance" required >Select your stance: </label>
        <select name="trick-stance">
          <option>Regular</option>
          <option>Switch</option>
        </select>
      </form>
    );
  }
}

export default TrickForm;