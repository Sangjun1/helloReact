import React, {Component} from 'react';

import ControlledCheckBox from './ControlledCheckBox';

class TodoList extends Component{

  constructor(props){
    super(props);

    // this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  handleTitleClick() {
    console.log("handleTitleClick");
    console.log(this);
  }

  handleTitleClick1 = () => {

  }

render(){
  const {title, items} = this.props;

  return (
      <div className="checkBoxText">
        <h2 onClick={() => this.handleTitleClick()}>{title}</h2>
        {
          items.map((item, index) => {
            return (
              <li key={index}><ControlledCheckBox completed={item.completed} name={item.name}/></li>
              );
          })
        }
      </div>
    );
  }
}

export default TodoList;
