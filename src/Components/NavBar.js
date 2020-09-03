import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
      <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
        <NavLink
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          to="/tasks"
        >
          Tasks
        </NavLink>
        <NavLink
          to="/new-task"
        >
          New Task
        </NavLink>
      </div>
    );
  }

  export default NavBar