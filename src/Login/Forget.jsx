import React from "react";
import { Button } from "react-bootstrap";
import { renderInputRows } from "../commonComponents/renderRows";
import { viewSetter, loginSetter } from "../State.logic/ReduxActions";

const Forget = () => (
  <>
    <div className="header">Напоминание пароля</div>
    <form onSubmit={loginSetter.forget}>
      {renderInputRows([
        { title: "Логин:", name: "login", type: "text" },
        { title: "Почта:", name: "email", type: "email" },
      ])}
      <div className="form_action">
        <Button block type="submit">
          Напомнить
        </Button>
        <Button block onClick={viewSetter.changeLogin} type="button" data-name="login" variant="secondary">
          Закрыть
        </Button>
      </div>
    </form>
  </>
);

export default Forget;
