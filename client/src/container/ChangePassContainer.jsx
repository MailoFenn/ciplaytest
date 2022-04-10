import React from "react";
import {readOldPass, readNewPass, readNewPassConf, submit} from "../store/action/change.action";
import ChangePass from "../components/ChangePass/ChangePass";

const ChangePassContainer = (props) => {
    return (
        <ChangePass
            state={props.state.state.change}
            readOldPass={(pass) => props.state.dispatch(readOldPass(pass))}
            readNewPass={(pass) => props.state.dispatch(readNewPass(pass))}
            readNewPassConf={(pass) => props.state.dispatch(readNewPassConf(pass))}
            submit={(data) => submit(data)}
        />
    );
}

export default ChangePassContainer;