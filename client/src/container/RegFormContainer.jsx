import RegForm from "../components/RegForm/RegForm";
import React from "react";
import {readRegLogin, readRegPass, readRegPassConf} from "../store/action/reg.action";
import {togglePage} from "../store/action/general.action";

const RegFormContainer = (props) => {
    return (props.state.state.general.isRegPage ?
        <RegForm
            state={props.state.state.reg}
            readRegLogin={(login) => props.state.dispatch(readRegLogin(login))}
            readRegPass={(pass) => props.state.dispatch(readRegPass(pass))}
            readRegPassConf={(pass) => props.state.dispatch(readRegPassConf(pass))}
            togglePage={() => props.state.dispatch(togglePage())}
        /> : null
    );
}

export default RegFormContainer;