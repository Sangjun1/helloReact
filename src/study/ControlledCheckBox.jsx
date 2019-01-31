import React, {Component} from 'react';

class ControlledCheckBox extends Component {
  constructor(props) {
    console.log(props);
    super(props);
  }

  componentDidMount() {
    this.state = {
      completed : this.props.completed,
      name : this.props.name,
    };
  }

  handleInputChange = (e) =>{
    console.log(e.target.checked);
  }

  render() {

    const {completed, name} = this.props;

    return (
      <>
      <input type="checkbox" checked={completed} onChange={this.handleInputChange} />{name}
      </>
    )
  }
}

export default ControlledCheckBox;
