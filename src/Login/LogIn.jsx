/* eslint-disable no-restricted-globals */
import React from "react";
import { Button } from "react-bootstrap";
import { renderInputRows } from "../commonComponents/renderRows";
import { viewSetter, loginSetter } from "../State.logic/ReduxActions";

const required = true;

const Login = () => (
  <>
    <div className="header">Вход </div>
    <form onSubmit={loginSetter.login}>
      {renderInputRows([
        { title: "Логин: ", name: "login", type: "text", required },
        { title: "Пароль:", name: "password", type: "password", required },
      ])}
      <div className="form_action">
        <Button block type="submit">
          Вход
        </Button>
        <Button block type="button" style={{ backgroundColor: "#004998" }} onClick={viewSetter.changeLogin} data-name="registration">
          Регистрация
        </Button>
        <Button block type="button" style={{ backgroundColor: "#002a58" }} onClick={viewSetter.changeLogin} data-name="forget">
          Напомнить пароль
        </Button>
      </div>
    </form>
  </>
);

export default Login;
