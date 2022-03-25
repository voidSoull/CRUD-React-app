import React from "react";
import { Link } from "react-router-dom";
import logo from "./jee.jpeg";

export default function Header(props) {
  return (
    <div>
      <nav>
        <div className="nav-container">
          <img src={logo} className="logo" alt="logo"/>
          <h1 className="title">{props.title}</h1>
          <div className="menu">
            <Link id="menu-1" to="/clients">List of Clients</Link>
            <Link className="menu-2" to="/add-client">Add Client</Link>
            <Link to="/delete-client">Delete Clients</Link>
            <Link to="/update-client">Update Clients</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
