import {useSelector} from "react-redux";

function Button(props){
    const clickEvent = ()=>{
        props.click();
    }

    const theme = useSelector(state=>state.colorMode)

    return(
        <input type={"submit"} className={"button "+theme} onClick={clickEvent} value={props.message}/>
    )
}

export default Button;