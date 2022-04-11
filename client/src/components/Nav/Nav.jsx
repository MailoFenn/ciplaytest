import React from "react";
import {Button, Menu} from "antd";
import {NavLink} from "react-router-dom";
import {auth} from "../../store/action/general.action";

const Nav = (props) => {
    return (
        <Menu
            mode={'horizontal'}
            defaultSelectedKeys={['1']}
        >
            <Menu.Item key="1"><NavLink to={'/'}>Main</NavLink></Menu.Item>
            <Menu.Item key="2"><NavLink to={'/about'}>About</NavLink></Menu.Item>
            <Menu.Item key="3"><NavLink to={'/faq'}>FAQ</NavLink></Menu.Item>
            <Menu.Item key="4"><NavLink to={'/change_pass'}>Change password</NavLink></Menu.Item>
            <Menu.Item>
                <NavLink to={'/'}>
                    <Button type={'link'} onClick={() => props.state.dispatch(auth())}>Log out</Button>
                </NavLink>
            </Menu.Item>
        </Menu>
    )
}

export default Nav;