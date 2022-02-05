import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from "./redux/store";
import {Provider} from "react-redux";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './icons/AwesomeLibrary';
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/Home";
import List from "./components/pages/list/List";
import Items from "./components/pages/list/Items";
import ItemPage from "./components/pages/list/ItemPage";
import Admin from "./components/pages/admin/Admin";
import NotFound from "./components/pages/NotFound";
import ItemPageMain from "./components/pages/list/ItemPageMain";
import ItemPageDescr from "./components/pages/list/ItemPageDescr";

ReactDOM.render(
            <BrowserRouter>
                <Provider store={configureStore()}>
                <Nav/>
                <Routes>
                    <Route path={"/"} element={<App/>}>
                        <Route index element={<Home/>}/>
                        <Route path={"list"} element={<List/>}>
                            <Route path={":itemId"} element={<ItemPage/>}>
                                <Route path={"descr"} element={<ItemPageDescr/>}/>
                                <Route index element={<ItemPageMain/>}/>
                            </Route>
                            <Route index element={<Items/>}/>
                        </Route>
                        <Route path={"admin"} element={<Admin/>}/>
                    </Route>
                    <Route path={"*"} element={<NotFound/>}/>
                </Routes>
                <Footer/>
                </Provider>
            </BrowserRouter>
   ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
