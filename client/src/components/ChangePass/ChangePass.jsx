import React from 'react'
import {Form, Input, Button, Row} from "antd";

const validateMessage = {
    types: {
        email: 'Wrong E-mail'
    }
}

const ChangePass = (props) => {
    return (
        <Form
            onFinish={() => props.submit({
                pass: props.state.newPass
            })}
            onFinishFailed={() => console.log('fail')}
            validateMessages={validateMessage}
        >
            <Row justify={'center'}>
                <h1>Change password</h1>
            </Row>
            <Form.Item
                name={'old_password'}
                rules={[
                    {
                        required: true,
                        message: 'Input old password'
                    }
                ]}
            >
                <Input
                    placeholder={'Old password'}
                    value={props.state.oldPass}
                    onChange={(ev) => {
                        props.readOldPass(ev.target.value)
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
                    placeholder={'New password'}
                    value={props.state.newPass}
                    onChange={(ev) => {
                        props.readNewPass(ev.target.value)
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
                    value={props.state.newPassConf}
                    onChange={(ev) => {
                        props.readNewPassConf(ev.target.value)
                    }}
                />
            </Form.Item>
            <Form.Item>
                <Button
                    type={'primary'}
                    htmlType={'submit'}
                >
                    Change pass
                </Button>
            </Form.Item>
        </Form>
    );
}

export default ChangePass