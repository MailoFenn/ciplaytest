import AuthForm from "../components/AuthForm/AuthForm";
import React from "react";
import {readLogin, readPass} from "../store/action/auth.action";

const AuthFormContainer = (props) => {
    return (
        <AuthForm
            state={props.state.state.auth}
            readLogin={(login) => props.state.dispatch(readLogin(login))}
            readPass={(pass) => props.state.dispatch(readPass(pass))}
        />
    )
}

export default AuthFormContainer;