import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

function ItemPageDescr(){

    const list = useSelector(state=>state.list);
    const {itemId} =  useParams();
    const itm = list.find(obj => obj.name.replace(/\s/g, '').toLowerCase()===itemId);

    return(
        <div className="item-page-descr">
            <p>{itm.descr}</p>
        </div>
    )
}

export default ItemPageDescr