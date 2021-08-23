import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import {AddStudent} from './AddStudent';
import {EditStudent} from './EditStudent';
import {Register} from './Register';
import './App.css';

function App() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/" style={{ color: 'black'}} className="nav-link">Student List</Link>
                    </li>
                    <li className="navbar-item nav2">
                        <Link to="/create" style={{ color: 'black'}} className="nav-link">Registration</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/" component={Register}/>
                <Route path="/edit/:id" component={EditStudent}/>
                <Route path="/create" component={AddStudent}/>
            </Switch>
        </div>
    );
}

export default App;