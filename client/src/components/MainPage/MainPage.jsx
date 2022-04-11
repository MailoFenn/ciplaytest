import React from "react";
import Nav from "../Nav/Nav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Row} from "antd";
import ChangePassContainer from "../../container/ChangePassContainer";

const MainPage = (props) => {
    return (
        <BrowserRouter>
            <Nav state={props.state}/>
            <Row align="middle" justify="center" className="App">
                <Routes>
                    <Route path={'/'} element={<h1>Main</h1>}/>
                    <Route path={'/about'} element={<h1>About</h1>}/>
                    <Route path={'/faq'} element={<h1>FAQ</h1>}/>
                    <Route path={'/change_pass'} element={<ChangePassContainer state={props.state}/>}/>
                </Routes>
            </Row>
        </BrowserRouter>
    )
}

export default MainPage
