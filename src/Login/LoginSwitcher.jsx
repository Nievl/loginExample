import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Registration from "./Registration";
import Forget from "./Forget";
import LogIn from "./LogIn";
import { authConstruct } from "../commonFunctions/authConstruct";
import { viewSetter } from "../State.logic/ReduxActions";
import { checkLogIn } from "../commonFunctions/requestData";

const loginView = {
  login: <LogIn />,
  registration: <Registration />,
  forget: <Forget />,
};

const check = async () => {
  if (authConstruct.get()) {
    const access = await checkLogIn({ token: authConstruct.get() });
    if (access.result === "OK") viewSetter.logIn();
  }
  return false;
};

const LoginSwitcher = ({ viewLogin = "login" }) => {
  useEffect(() => {
    check();
  }, []);

  return (
    <main>
      <div className="login list_cont ">{loginView[viewLogin]}</div>
    </main>
  );
};

export default connect(state => ({ viewLogin: state.view.viewLogin || "login" }))(LoginSwitcher);

LoginSwitcher.propTypes = { viewLogin: PropTypes.string };
