import React from "react";
import ContentBlock from "../main/ContentBlock";
import ContentContainer from "../main/ContentContainer";
import Divider from "../main/Divider";
import ColumnBlock from "../main/ColumnBlock";
import Splash from "../main/Splash";
import ContentContainerColumn from "../main/ContentContainerColumn";


function Home(){

    return (
        <div className="home page-wrapper">
            <Splash content={"Welcome Back"}/>
            <ContentContainer content={
                <>
                    <ContentBlock/>
                    <ContentBlock/>
                    <ContentBlock/>
                    <ContentBlock/>
                    <ContentBlock/>
                    <ContentBlock/>
                </>
            }/>


            <Divider/>
            <ContentContainerColumn content={
                <>
                    <ColumnBlock/>
                    <ColumnBlock/>
                </>
            }/>





        </div>
    )
}

export default Home;