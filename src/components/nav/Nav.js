import React from "react";

import {Link, NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useSelector} from "react-redux";

function Nav(){

    const [toggle, setToggle]=React.useState(true);
    const theme = useSelector(state=>state.colorMode)

    const checkToggle = ()=>{
        return (toggle ? "-100%":"0")
    }

    let style = {
        right: checkToggle()
    }

    return(
        <nav className={theme}>
            <Link className={"logo"} to={"/"}>Logo</Link>

            <div className="link-wrapper">
                <NavLink to={"/"} activeclassname={"active"}>Home</NavLink>
                <NavLink to={"/list"} activeclassname={"active"}>List</NavLink>
                <NavLink to={"/admin"} activeclassname={"active"}>Admin</NavLink>
            </div>
            <div className={"drop-down"} onClick={()=>setToggle(!toggle)}>
                <FontAwesomeIcon icon={"bars"} size={"2x"}/>
            </div>
            <div className="side-bar" style={style}>
                <Link to={"/"} onClick={()=>setToggle(!toggle)}>Home</Link>
                <Link to={"/list"} onClick={()=>setToggle(!toggle)}>List</Link>
                <Link to={"/admin"} onClick={()=>setToggle(!toggle)}>Admin</Link>
            </div>

        </nav>
    )
}

export default Nav;