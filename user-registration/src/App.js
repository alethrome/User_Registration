import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import {AddStudent} from './AddStudent';
import {EditStudent} from './EditStudent';
import {Register} from './Register';

function App() {
    return (
        <div>
            <nav className="navbar bg-light navbar-expand-lg navbar-light">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">Student List</Link>
                    </li>
                    <li className="navbar=item">
                        <Link to="/create" className="nav-link">Registration</Link>
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