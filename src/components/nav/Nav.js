import React from "react";

import {Link, NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SideMenu from "./SideMenu";

function Nav() {

    const [toggle, setToggle] = React.useState(true);

    return (
        <>
            <nav>
                <Link className={"logo"} to={"/"}>Logo</Link>

                <div className="link-wrapper">
                    <NavLink to={"/"} activeclassname={"active"}>Home</NavLink>
                    <NavLink to={"/list"} activeclassname={"active"}>List</NavLink>
                    <NavLink to={"/admin"} activeclassname={"active"}>Admin</NavLink>
                </div>
                <div className={"drop-down"} onClick={() => setToggle(!toggle)}>
                    <FontAwesomeIcon icon={"bars"} size={"2x"}/>
                </div>


            </nav>
            <SideMenu toggle={toggle} setToggle={setToggle}/>
        </>
    )
}

export default Nav;