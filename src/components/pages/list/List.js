

import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";



function List(){

    const theme = useSelector(state=>state.colorMode)


    return (
        <div className={"list page-wrapper "+theme}>
            <Outlet/>
        </div>
    )
}

export default List;