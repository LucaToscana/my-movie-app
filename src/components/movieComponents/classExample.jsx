import React from "react";

class Car extends React.Component {
    render() {
      return <h2>{this.props.carTitle}</h2>;
    }
  }

  export default Car