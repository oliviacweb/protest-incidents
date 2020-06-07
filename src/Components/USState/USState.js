import React, { Component } from "react";
import "./USState.css";




class USState extends Component {
    constructor(props) {
        super(props);
        this.state = { stateName: "" };
    }
    componentDidMount() {
      // const {handle} = this.props.match.params;
      console.log(this.props.match.params)
    }

    render() {

       
     
        return (
            <div className="USState">
              <h3>STATE</h3>
            </div>
           
        );
    }
}

export default USState;
