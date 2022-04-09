import React from 'react'
import {Form, Input, Button, Row, Alert} from "antd";

const validateMessage = {
    types: {
        email: 'Wrong E-mail'
    }
}

const RegForm = (props) => {
    return (
        <Form
            validateMessages={validateMessage}
        >
            <Row justify={'center'}>
                <h1>Registration</h1>
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
                    value={props.state.regLogin}
                    onChange={(ev) => {
                        props.readRegLogin(ev.target.value)
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
                    value={props.state.regPass}
                    onChange={(ev) => {
                        props.readRegPass(ev.target.value)
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
                    placeholder={'Confirm password'}
                    value={props.state.regPassConf}
                    onChange={(ev) => {
                        props.readRegPassConf(ev.target.value)
                    }}
                />
            </Form.Item>
            <Form.Item>
                <Button
                    type={'primary'}
                    htmlType={'submit'}
                >
                    Registration
                </Button>
            </Form.Item>
            <Button
                type={'link'}
                onClick={props.togglePage}
            >
                Auth
            </Button>
        </Form>
    );
}

export default RegForm