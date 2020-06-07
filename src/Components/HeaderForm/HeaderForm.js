import React, { Component } from "react";
import "./HeaderForm.css";
import SelectUSState from '../../Libraries/usStateSelector/index.js';
// import PropTypes from "prop-types";
import USState from "../USState/USState"

import { Link, Route } from "react-router-dom"

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
    console.log('this is the State code: ' + newValue);
    this.setState({ stateName: newValue })
  }

  render() {
    return (
      <section className="header-section">
        <header className="App-header">
          <h1 className="App-title">Incident Reports</h1>
          <p>
            Select a state: <SelectUSState id="myId" className="myClassName" onChange={this.setNewValue} />
          </p>
          <Link id="stateButton" to={{
            pathname: `/state-selected/${this.state.stateName}`
          }} >Go</Link>
          <Route exact path="/state-selected/:stateName" component={USState}>

          </Route>
        </header>
        {/* <Switch>
          <Route path="/city-selected">
            "city"
          </Route>

          <Route path="/">
            "home"
          </Route>
        </Switch> */}
      </section>
    );
  }
}

export default HeaderForm;
