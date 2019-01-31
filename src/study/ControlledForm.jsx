import React, {Component} from 'react';

class ControlledForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : '',
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    alert('입력값을 서버로 전송합니다.' + this.state.value);
    e.preventDefault();
  }

  handleInputChange = (e) =>{
    this.state.value = e.target.value;
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input type="" onChange={this.handleInputChange}/>
      </label>
      <input type='submit' value="submit"/>
    </form>
    )
  }
}

export default ControlledForm;
