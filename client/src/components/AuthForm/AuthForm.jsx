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
            validateMessages={validateMessage}
        >
            <Row justify={'center'}>
                <h1>Auth</h1>
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
                        message: 'Input password'
                    }
                ]}
            >
                <Input.Password
                    placeholder={'Password'}
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
                />
            </Form.Item>
        </Form>
    );
}

export default AuthForm;