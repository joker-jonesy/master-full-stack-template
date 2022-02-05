import React from "react";

function TextInput(props){

    const changed = event=>{

        props.changed()
    }

    return(
        <input className={"textField"} type="text" value={props.val} onChange={changed}/>
    )
}

export default TextInput;