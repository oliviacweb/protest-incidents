import React, { Component } from "react";
import "./Header.css";
import SelectUSState from '../../Libraries/usStateSelector/index.js';
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import { withRouter } from "react-router-dom";

class HeaderForm extends Component {
  constructor(props) {
    super();
    this.state = {
      stateName: '',
      cityName: '',
    };
    this.setNewValue = this.setNewValue.bind(this);
  }

  handleChange = (event) => {

  };

  handleSubmit = (event) => {
    event.preventDefault();

  };

  setNewValue(newValue) {
    this.setState({
      stateName: newValue,
      cityName: '' })
}

  render() {
    return (
      <section className="header-section">
      <header className="App-header">
          <h1 className="App-title">Incident Reports</h1>
          <p>

Select a state: <SelectUSState id="myId" className="myClassName" onChange={this.setNewValue}/>
          <Link to={`/state/${this.state.stateName}`}>
          <button>Submit</button>
          </Link>
         </p>

      </header>

      </section>
    );
  }
}

export default HeaderForm;
