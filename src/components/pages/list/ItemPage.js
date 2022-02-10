import {NavLink, Outlet, useParams} from "react-router-dom";
import {useSelector} from "react-redux";


function ItemPage() {

    const list = useSelector(state => state.list);
    const params = useParams();
    const itm = list.find(obj => obj.name.replace(/\s/g, '').toLowerCase() === params.itemId);

    return (
        <div className="item-page">

            {itm === undefined && <h1>The Item you are looking for does not exist</h1>}

            {itm !== undefined && <div className="item-wrapper">
                <div className={"item-splash"}>
                    <h1>{itm !== undefined && itm.name}</h1>
                </div>

                <div className="item-navigation">

                    <NavLink activeClassName={"active"} to={"/list/" + params.itemId} end>Main</NavLink>
                    <NavLink activeClassName={"active"} to={"/list/" + params.itemId + "/descr"}>Description</NavLink>


                </div>
                <div className="item-content">
                    <div className="content-wrapper">
                        <Outlet/>
                    </div>
                </div>
            </div>}


        </div>
    )
}

export default ItemPage;