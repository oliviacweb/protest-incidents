import React, { Component } from "react";
import "./USState.css";
import { Link, Route } from "react-router-dom";




class USState extends Component {
    constructor(props) {
        super(props);
      this.state = Object.assign({}, this.props.location.state);

    }


    render() {



        return (
           <div>
           <h3>Stories</h3>

            </div>

        );
    }
}

export default;
