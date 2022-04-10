import AuthForm from "../components/AuthForm/AuthForm";
import React from "react";
import {readLogin, readPass, submit} from "../store/action/auth.action";
import {togglePage} from "../store/action/general.action";

const AuthFormContainer = (props) => {
    return (!props.state.state.general.isRegPage ?
        <AuthForm
            state={props.state.state.auth}
            readLogin={(login) => props.state.dispatch(readLogin(login))}
            readPass={(pass) => props.state.dispatch(readPass(pass))}
            togglePage={() => props.state.dispatch(togglePage())}
            submit={(data) => props.state.dispatch(submit(data))}
        /> : null
    )
}

export default AuthFormContainer;