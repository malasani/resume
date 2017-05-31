import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter as Router, NavLink, Link, Route } from 'react-router-dom';
import * as hello from './components/hello';
import { UserCard, User } from './components/card';
import { Pie } from './components/Pie';
import { Skills } from './components/Skills';
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Profile } from './Resume'



ReactDOM.render(
    <Router>
        <div className="wid100">
            <nav>
                <ul>
                    <li><NavLink activeClassName="active" to="/"><i className="fa fa-home">
                        <span className="tooltiptext">Home</span>
                    </i></NavLink></li>
                    <li><NavLink activeClassName="active" to="/skills"><i className="fa fa-laptop">
                        <span className="tooltiptext">Skills</span>
                    </i></NavLink></li>
                    <li><NavLink activeClassName="active" to="/education"><i className="fa fa-book">
                        <span className="tooltiptext">Education</span>
                    </i></NavLink></li>
                    <li><NavLink activeClassName="active" to="/experience"><i className="fa fa-tasks">
                        <span className="tooltiptext">Experience</span>
                    </i></NavLink></li>
                </ul>
            </nav>


            <Route exact path='/' render={(props) => (
                <UserCard {...Profile.UserCard} ></UserCard>
            )} />
            <Route path='/skills' render={(props) => (
                <Skills {...Profile.skills}></Skills>
            )} />
            <Route path='/education' render={(props) => (
                <Education {...Profile.edu}></Education>
            )} />
            <Route path='/experience' render={(props) => (
                <Experience {...Profile.exp}></Experience>
            )} />
        </div>
    </Router>

    , document.getElementById('app'));