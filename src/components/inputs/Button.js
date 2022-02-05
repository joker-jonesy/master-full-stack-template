import {useSelector} from "react-redux";

function Button(props){
    const clickEvent = ()=>{
        props.click();
    }

    const theme = useSelector(state=>state.colorMode)

    return(
        <div className={"button "+theme} onClick={clickEvent}>
            {props.message}
        </div>
    )
}

export default Button;