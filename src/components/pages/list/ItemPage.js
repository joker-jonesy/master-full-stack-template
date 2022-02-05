import {useParams, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

function ItemPage(){

    const list = useSelector(state=>state.list);
    const params =  useParams();
    let navigate = useNavigate();
    const itm = list.find(obj => obj.id===params.itemId);

    return(
        <div className="item-page">
            <h1>{itm!==undefined&&itm.name}</h1>
            <h1>{itm===undefined&& "The Item you are looking for does not exist"}</h1>
            <p>{itm!==undefined&&itm.descr}</p>
        </div>
    )
}

export default ItemPage;