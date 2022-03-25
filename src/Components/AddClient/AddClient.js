import React from "react";
import Header from "../Header/Header";

export default function AddClient() {
  return (
    <div className="AddClient-content">
      <Header title="Add Client" />
      <form className="Form">
        <label className="id" htmlFor="id">
          {" "}
          Id <input type="text"  name="id" value={2} disabled />
        </label>
        
        <label htmlFor="name">
          {" "}
          Name <input placeholder="Here goes your name" type="text" name="name" />
        </label>{" "}
        <label htmlFor="email">
          Email <input placeholder="email" type="text" name="email" />
        </label>{" "}
        <label htmlFor="phone">
          Phone <input placeholder="phone" className="test-1" type="text" name="phone" />
        </label>
        <button>Add</button>
      </form>
    </div>
  );
}
