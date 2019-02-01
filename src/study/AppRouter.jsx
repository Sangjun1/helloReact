import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Menu, Icon, Button} from 'antd';
import TodoList from './TodoList';
import Styled from 'styled-components';

const SubMenu = Menu.SubMenu;

const Page = Styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
  min-height : 80vh;
`;

class Index extends React.Component {
  constructor(props) {
    super(props);
    console.log('[Index constructor]');
  }

  render() {
    return (<h2>Home</h2>);
  }

  componentDidMount() {
    console.log('[Index componentDidMount!]');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Index componentDidUpdate!]');
  }

  componentWillUnmount() {
    console.log('[Index componentWillUnmount@@]');
  }

}

class About extends React.Component {

  constructor(props) {
    super(props);
    console.log('[About constructor]', this.props);
  }

  render() {
    return (<h2>About</h2>);
  }

  componentDidMount() {
    console.log('[About componentDidMount!]');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[About componentDidUpdate!]');
  }

  componentWillUnmount() {
    console.log('[About componentWillUnmount@@]');
  }
}


class AppRouter extends React.Component {

  TodoList = () => <TodoList title={'강의목표'}/>;

  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Router>
        <div>
          <Button type="primary" onClick={this.toggleCollapsed} style={{marginBottom: 16}}>
            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}/>
          </Button>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="horizontal"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
          >
            <Menu.Item key="1">
              <Link to='/'>
                <Icon type="pie-chart"/>
                <span>Home</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to='/about'>
                <Icon type="desktop"/>
                <span>About</span></Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to='/todoList'>
                <Icon type="inbox"/>
                <span>TodoList</span>
              </Link>
            </Menu.Item>
          </Menu>

          <div>
            <Page>
              <Route path="/" exact component={Index}/>
              <Route path="/about" exact component={About}/>
            </Page>
            <Route path="/todoList" component={this.TodoList}/>
          </div>
        </div>

      </Router>
    );
  }

}


export default AppRouter;
