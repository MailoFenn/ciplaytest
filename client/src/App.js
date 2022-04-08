import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {Row, Col} from 'antd';
import AuthFormContainer from "./container/authFormContainer";

const App = (props) => {
    return(
        <Row align="middle" justify="center" className="App">
            <Col span={8} className="form">
                <AuthFormContainer state={props}/>
            </Col>
        </Row>
    );
}



export default App;
