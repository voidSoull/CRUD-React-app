import React from "react";
import Header from "../Header/Header";

//This is Your World ! Get in
export default function Client() {
  const [data, setData] = React.useState("");

  return (
    <div>
      <Header title="List of Clients" />
      <div>
        <ul>{/* <li>Here goes the mapping</li> */}</ul>
      </div>
    </div>
  );
}
