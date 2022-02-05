import {Link, Outlet, useParams} from "react-router-dom";
import {useSelector} from "react-redux";

function ItemPage(){

    const list = useSelector(state=>state.list);
    const params =  useParams();
    const itm = list.find(obj => obj.name.replace(/\s/g, '').toLowerCase()===params.itemId);

    return(
        <div className="item-page">

            <h1>{itm===undefined&& "The Item you are looking for does not exist"}</h1>

            {itm!==undefined && <div className="item-wrapper">
                <h1>{itm!==undefined&&itm.name}</h1>
                <div className="item-navigation">
                    <Link to={"/list/"+params.itemId}>Main</Link>
                    <Link to={"/list/"+params.itemId+"/descr"}>Description</Link>
                </div>
                <div className="item-content">
                    <Outlet/>
                </div>
            </div>}



        </div>
    )
}

export default ItemPage;