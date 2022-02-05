
function Button(props){
    const clickEvent = ()=>{
        props.click();
    }

    return(
        <div className={"button"} onClick={clickEvent}>
            {props.message}
        </div>
    )
}

export default Button;