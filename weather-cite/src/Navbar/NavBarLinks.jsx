import React from "react";
import './NavBar.css'
import {TbMenuDeep}from 'react-icons/tb'

function NavBarLinks() {
  return (
    <div className="NavBarLi">
        <h2><TbMenuDeep/>
        NationalWeather</h2>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/#about">About me</a>
        </li>
        <li>
          <a href="/#skills">Skills</a>
        </li>
        <li>
          <a href="/#youtube">YouTube</a>
        </li>
        <li>
          <a href="/#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBarLinks;
