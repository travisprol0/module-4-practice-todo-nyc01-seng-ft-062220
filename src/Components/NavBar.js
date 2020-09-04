import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
      <div>
        <div>
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
        </div>
        <div>
        <NavLink activeClassName="active" to="/new-task">New Task</NavLink>
        </div>
        <div>
        <NavLink activeClassName="active" to="/tasks">Tasks</NavLink>
        </div>
        <div>
        <NavLink activeClassName="active" to="/completed-tasks">Completed Tasks</NavLink>
        </div>
      </div>
    );
  }

  export default NavBar