
import {Link} from "react-router-dom";

function Item(props){

    return(
        <Link className="item" to={/list/+props.obj.id}>
            <h1>{props.obj.name}</h1>
        </Link>
    )
}

export default Item;