import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tasks">Tasks</NavLink>
        <NavLink to="/new-task">New Task</NavLink>
      </div>
    );
  }

  export default NavBar