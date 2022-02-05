import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {ChangeColorMode} from "../../redux/actions/ChangeColorMode";
import Button from "../inputs/Button";

function Home(){

    const theme = useSelector(state=>state.colorMode)
    const [mode,setMode]=React.useState(()=>{return(theme==='light'?true:false)});
    const dispatch=useDispatch();

    const clicked=()=>{
        setMode(!mode);
        if(mode){
            dispatch(ChangeColorMode("dark"))
        }else{
            dispatch(ChangeColorMode("light"))
        }
    }

    return (
        <div className="home page-wrapper">
            Home Page
            <Button message={"Change Color Mode"} click={()=>clicked()}/>
        </div>
    )
}

export default Home;