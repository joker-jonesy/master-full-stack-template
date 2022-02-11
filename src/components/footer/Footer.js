// import {Link} from "react-router-dom";

import {useSelector} from "react-redux";

function Footer() {

    const theme = useSelector(state => state.colorMode)
    return (
        <footer className={theme}>

            <div className="col-wrap">
                <div className="col">
                    <h3>Headline 1</h3>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 1</li>
                        <li>Item 1</li>
                    </ul>
                </div>
                <div className="col">
                    <h3>Headline 1</h3>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </div>
                <div className="col">
                    <h3>Headline 2</h3>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </div>
                <div className="col">
                    <h3>Headline 3</h3>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </div>
            </div>

            <div className="foot-divider">
                <h3>Item 1 |</h3>
                <h3>Item 2 |</h3>
                <h3>Item 3 |</h3>
                <h3>Item 4</h3>
            </div>


        </footer>
    )
}

export default Footer;