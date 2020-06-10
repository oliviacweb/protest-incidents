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
      stateIncidents: [],
      savedStories: {},
      buttonStatus: 'disabled',
      appInitial: true,
      // showSaved: false
    };
    this.setNewValue = this.setNewValue.bind(this);
  }

  handleChange = (event) => {

  };

  handleSubmit = (event) => {
    event.preventDefault();

  };

  // toggleShowSaved = () => {
  //   this.setState({showSaved: !this.state.showSaved})
  // }

  setNewValue(newValue) {
    this.setState({ stateName: newValue,
                    stateIncidents: this.props.stateIncidents[newValue]
     })
     if(newValue !== '---') {
         this.setState({ buttonStatus: 'enabled' })
     }
     console.log('newww', newValue)
     console.log('uuhhgdg', this.props.stateIncidents[newValue])
  }
// showSaved={this.state.showSaved}
  render() {
    console.log('is this?', this.state.stateIncidents)
    return (

      <section className="header-section">
        <header className="App-header">
          <h1 className="App-title">Incidents of Police Brutality Against Protesters</h1>
          <p>
          <label for="us-state-select">
            Select a state: <SelectUSState id="us-state-select" className="state-select" onChange={this.setNewValue} />
          </label>
          </p>

          <Link id="stateButton" to={{
            pathname: `/state-selected`,

          }} >{this.state.buttonStatus !== 'disabled' && this.state.appInitial ?
          <button
          id='start-button'
          title='go-button'
          className='go-button'
          onClick={() => {this.setState({ appInitial: false })}}
          >Go
          </button> : null}
          </Link>
          <Route exact path="/state-selected"
          component={() =>
            <USState
            stateName={this.state.stateName}
            stateIncidents={this.state.stateIncidents}
            savedStories={this.state.savedStories}
            />
          }>
          </Route>
        </header>
      </section>
    );
  }
}

export default HeaderForm;
