import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const AppRouter2 = () => (
  <Router>
    <div>

      <nav>
        <ui>
          <li>
            <Link to='/'>Home</Link>
          </li>
        </ui>
        <ui>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ui>
        <ui>
          <li>
            <Link to='/todoList'>TodoList</Link>
          </li>
        </ui>
      </nav>

      <Route path="/" component={Index}/>
      <Route path="/about" component={About}/>
      <Route path="/todoList" component={Users}/>
    </div>
  </Router>
);

export default AppRouter2;
