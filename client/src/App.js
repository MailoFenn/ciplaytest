import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {Row, Col} from 'antd';
import AuthFormContainer from "./container/AuthFormContainer";
import RegFormContainer from "./container/RegFormContainer";

const App = (props) => {
    let content = props.state.general.isAuth ?
        <h1>hello</h1> :
        <Col span={8} className="form">
            <AuthFormContainer state={props}/>
            <RegFormContainer state={props}/>
        </Col>
    return (
        <Row align="middle" justify="center" className="App">
                {content}
        </Row>
    );
}

export default App;
