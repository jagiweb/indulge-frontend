import React from "react"

const NavBar = ({ username, signOut }) => {
  return(
    <nav>                  
        <button className="float-right btn btn-danger"  onClick={signOut}>Sign Out</button> 
        <span className="float-right p-10" > {username && localStorage.token ? username : "User" }</span>
    </nav>
  )
}

export default NavBar