import React from "react";
import user from "../data/user";
import Links from "./Links";

function About(user) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* <p>{user.bio}</p> */}
      {user.bio && user.bio.length > 1 ? <p> {user.bio} </p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={user.links.github} linkedin={user.links.linkedin}/>
    </div>
  );
}

export default About;
