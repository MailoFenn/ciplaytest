import React from "react";
import {Menu} from "antd";
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
            <Menu
                mode={'horizontal'}
            >
                <Menu.Item key="9"><NavLink to={'/main'}>Main</NavLink></Menu.Item>
                <Menu.Item key="10"><NavLink to={'/about'}>About</NavLink></Menu.Item>
                <Menu.Item key="11"><NavLink to={'/faq'}>FAQ</NavLink></Menu.Item>
                <Menu.Item key="12"><NavLink to={'/change_pass'}>Change password</NavLink></Menu.Item>
            </Menu>
    )
}

export default Nav;