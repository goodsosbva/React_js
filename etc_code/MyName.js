import React, { Component } from "react";

class MyName extends Component {
  static defaultProps = {
    name: "기본"
  };

  render() {
    return (
      <div>
        안냥! 내 이름은 <b>{this.props.name}</b> 임!
      </div>
    );
  }
}

MyName.defaultProps = {
  name: "기본"
};

export default MyName;
