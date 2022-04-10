import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {Row, Col} from 'antd';
import AuthFormContainer from "./container/AuthFormContainer";
import RegFormContainer from "./container/RegFormContainer";
import MainPage from "./components/MainPage/MainPage";

const App = (props) => {
    let content = props.state.general.isAuth ?
        <MainPage state={props}/> :
        <Row align="middle" justify="center" className="App">
            <Col span={8} className="form">
                <AuthFormContainer state={props}/>
                <RegFormContainer state={props}/>
            </Col>
        </Row>
    return (
        <React.Fragment>
           {content}
        </React.Fragment>
    );
}

export default App;
