
import {Link} from "react-router-dom";
import React from "react";

function SideMenu(props){


    const checkToggle = () => {
        return (props.toggle ? "-100%" : "0")
    }

    let style = {
        right: checkToggle()
    }

    return(
        <div className="side-bar" style={style}>
            <Link to={"/"} onClick={() => props.setToggle(!props.toggle)}>Home</Link>
            <Link to={"/list"} onClick={() => props.setToggle(!props.toggle)}>List</Link>
            <Link to={"/admin"} onClick={() => props.setToggle(!props.toggle)}>Admin</Link>
        </div>
    )
}

export default SideMenu;