import React, {Component} from 'react';
import {Checkbox} from 'antd';
import Button from 'antd/es/button';
import { Icon } from 'antd';

class TodoListItemCheckBox extends Component {
  constructor(props) {
    console.log(props);
    super(props);
  }

  componentDidMount() {
    this.state = {
      completed: this.props.completed,
      name: this.props.name,
    };
  }

  handleInputChange = (e) => {
    console.log(e.target.checked);
  };

  render() {

    const {completed, name} = this.props;
    return (
      <>
        <Checkbox checked={completed} onChange={this.handleInputChange}/>
        <span>{name}</span>
        {/*<Button type='edit'>수정</Button>*/}
        <Icon type="edit" />
        <Button className="btn-delete">삭제</Button>
      </>
    );
  }
}

export default TodoListItemCheckBox;
