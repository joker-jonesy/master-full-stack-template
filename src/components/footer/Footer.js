// import {Link} from "react-router-dom";

import {useSelector} from "react-redux";

function Footer (){

    const theme = useSelector(state=>state.colorMode)
    return(
        <footer className={theme}>
            Footer
        </footer>
    )
}

export default Footer;