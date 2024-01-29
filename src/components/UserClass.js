import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 3,
      count1: 2,
    };
  }
  render() {
    return (
      <>
        <h1>I am {this.props.name} class</h1>
        <h2>Engineer class</h2>
        <h3>{this.state.count}</h3>
        <h3>{this.state.count1}</h3>
        <button
          onClick={() => {
            this.setState({ count: 4, count1: 6 });
          }}
        >
          click
        </button>
      </>
    );
  }
}

export default UserClass;
