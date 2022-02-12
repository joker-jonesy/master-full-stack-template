import React from "react";
import Toggle from "../inputs/Toggle";
import {useDispatch} from "react-redux";
import {ChangeColorMode} from "../../redux/actions/ChangeColorMode";


function Home(){

    const dispatch=useDispatch();



    return (
        <div className="home page-wrapper">
            <div className="splash">
                <h1>Home Page</h1>
            </div>
            <div className={"content-block"}>
                <div className="block">
                    <h3>Toggle Me to change your color theme</h3>
                    <Toggle toggled={()=>dispatch(ChangeColorMode())}/>
                </div>
                <div className="block">
                    <h1>Some Content</h1>
                </div>
                <div className="block">
                    <h1>Some Content</h1>
                </div>
                <div className="block">
                    <h1>Some Content</h1>
                </div>
            </div>
            <div className="divider">
                <h1>Divider</h1>
            </div>
            <div className={"content-block column"}>
                <div className="column">
                    <div className="block tall">
                        <h1>Some Content</h1>
                    </div>
                </div>
                <div className="column">
                    <div className="block">
                        <h1>More Content</h1>
                    </div>
                    <div className="block">
                        <h1>Some Content</h1>
                    </div>
                </div>




            </div>




        </div>
    )
}

export default Home;