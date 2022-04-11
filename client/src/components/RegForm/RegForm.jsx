import React from 'react'
import {Form, Input, Button, Row} from "antd";

const validateMessage = {
    types: {
        email: 'Wrong E-mail'
    }
}

const RegForm = (props) => {
    return (
        <Form
            onFinish={() => props.submit({
                login: props.state.regLogin,
                pass: props.state.regPass
            })}
            onFinishFailed={() => console.log('fail')}
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
                    defaultValue={props.state.regLogin}
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
                        message: 'Password must require 4-10 symbol and capital letter',
                        max: 10,
                        min: 4,
                        pattern: /[A-Z]/gm
                    }
                ]}
            >
                <Input.Password
                    placeholder={'Password'}
                    value={props.state.regPass}
                    defaultValue={props.state.regPass}
                    onChange={(ev) => {
                        props.readRegPass(ev.target.value)
                    }}
                />
            </Form.Item>
            <Form.Item
                name={'confirm'}
                rules={[
                    {
                        required: true,
                        message: 'Input password'
                    },
                    ({getFieldValue}) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                ]}

            >
                <Input.Password
                    placeholder={'Confirm password'}
                    value={props.state.regPassConf}
                    defaultValue={props.state.regPassConf}
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