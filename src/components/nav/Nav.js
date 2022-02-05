import {Link, NavLink} from "react-router-dom";

function Nav(){
    return(
        <nav>
            <Link to={"/"}>Logo</Link>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/list"}>List</NavLink>
            <NavLink to={"/admin"}>Admin</NavLink>
        </nav>
    )
}

export default Nav;