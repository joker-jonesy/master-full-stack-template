// import {Link} from "react-router-dom";
import {footer} from "./Data";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer>

            <div className="col-wrap">

                {footer.headlines.map((itm, idx)=>
                    <div className="col">
                        <h3>{itm.name}</h3>
                        <ul>
                            {itm.items.map((it, id)=>
                            <Link key={id} to={it.link}>{it.name}</Link>
                            )}
                        </ul>
                    </div>
                )}
            </div>

            <div className="foot-divider">
                {footer.bottom.map((itm,idx)=>
                    <Link key={idx} to={itm.link}>{itm.name}</Link>
                )}
            </div>


        </footer>
    )
}

export default Footer;