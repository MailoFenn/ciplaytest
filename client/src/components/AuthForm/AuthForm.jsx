import {Form, Input, Button, Row, Alert} from "antd";
import React from "react";

const validateMessage = {
    types: {
        email: 'Wrong E-mail'
    }
}

const AuthForm = (props) => {
    return (
        <Form
            onFinish={() => props.submit({
                login: props.state.authLogin,
                pass: props.state.authPass
            })}
            onFinishFailed={(e) => console.log('fail' + e)}
            validateMessages={validateMessage}
        >
            <Row justify={'center'}>
                <h1>Auth {props.isAuth?'ok':null}</h1>
            </Row>
            <Form.Item
                name={['user', 'email']}
                rules={[
                    {type: 'email'},
                    {
                        required: true,
                        message: 'Input E-mail'
                    }
                ]}
            >
                <Input
                    placeholder={'E-mail'}
                    value={props.state.authLogin}
                    defaultValue={props.state.authLogin}
                    onChange={(ev) => {
                        props.readLogin(ev.target.value)
                    }}
                />
            </Form.Item>
            <Form.Item
                name={'password'}
                rules={[
                    {
                        required: true,
                        message: 'Password must require 4-10 symbol and capital letter',
                        max: 10,
                        min: 4,
                        pattern: /[A-Z]/gm
                    }
                ]}
            >
                <Input.Password
                    placeholder={'Password'}
                    defaultValue={props.state.authPass}
                    value={props.state.authPass}
                    onChange={(ev) => {
                        props.readPass(ev.target.value)
                    }}
                />
            </Form.Item>
            <Form.Item>
                <Button
                    type={'primary'}
                    htmlType={'submit'}
                >
                    Log in
                </Button>
            </Form.Item>
            <Button
                type={'link'}
                onClick={props.togglePage}
            >
                Registration
            </Button>
        </Form>
    );
}

export default AuthForm;