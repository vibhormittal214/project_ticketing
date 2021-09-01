import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';
import { GetAllProject } from '../HuddleComponents/GetAllProjects.js';
export default function Header(props) {
  const [searchAreaInputVal, setSearchAreaInputVal] = useState("");
  // Input Field handler
  const handlesearchInputVal = (e) => {
    setSearchAreaInputVal(e.target.value);
  };
  // Reset Input Field handler
  const resetserachAreaInput = () => {
    setSearchAreaInputVal("");
  };
  return (
    <nav style={{ backgroundImage: 'url("https://images.pexels.com/photos/132197/pexels-photo-132197.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")' }} className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <h6> Welcome <br />{props.loggedInDevName}</h6>
        <div style={{ marginLeft: "20px" }} className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div style={{ cursor: "pointer" }} className="nav-link active" aria-current="page" onClick={() => { props.showLeftNav() }}>Home</div>
            </li>
            <GetAllProject bucketNameDropdown={"true"} showAllTicketOfBucket={props.showAllTicketOfBucket} />
            <button style={{ marginLeft: "5px" }} className="btn btn-outline-logout" type="submit" onClick={() => { if (window.confirm("Are you sure you want to log out ?")) { props.triggerLogOut(); } }}>Logout</button>
          </ul>
          <div style={{ marginRight: "auto" }} className="navbar-brand" >{props.title}</div>
          {props.searchBar ? <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Ticket id / Desc / Title" aria-label="Search" value={searchAreaInputVal} onChange={handlesearchInputVal} />
            <button className="btn btn-outline-success" type="submit" onClick={() => { let ticketId = searchAreaInputVal; resetserachAreaInput(); if (ticketId === "" || ticketId <= 0 || ticketId === null || ticketId === undefined) { alert("Please enter valid input for search") } else { props.showSearchResult(ticketId) } }}>Search</button>
          </form> : ""}
        </div>
      </div>
    </nav>
  )
}
Header.defaultProps = {
  title: "The Huddle",
  searchBar: true
}
Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool
}