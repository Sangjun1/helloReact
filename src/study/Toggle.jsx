import React, {Component} from 'react';
import {Button} from 'antd';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn : true,
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState(prevState =>({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <Button type="primary" onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</Button>
    );
  }
}

export default Toggle;
