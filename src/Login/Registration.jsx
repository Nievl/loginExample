import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { renderInputRows } from "../commonComponents/renderRows";
import { viewSetter, loginSetter } from "../State.logic/ReduxActions";

const required = true;

const Registration = () => {
  const [view, setView] = useState("option_1");

  const onChange = ({ target }) => {
    const name = target.value;
    setView(name);
  };

  return (
    <>
      <div className="header">Регистрация </div>
      <select onChange={onChange}>
        <option value="option_1">option_1</option>
        <option value="option_2">option_2</option>
      </select>
      {view === "option_1" && (
        <form onSubmit={loginSetter.registration} data-name="option_1">
          {renderInputRows([
            { title: "Логин ", name: "login", type: "text", required },
            { title: "Пароль ", name: "password", type: "password", required },
            { title: "Почта ", name: "email", type: "email", required },
            { title: "Имя собственника ", name: "contactFace", type: "text", required },
            { title: "Название ", name: "company", type: "text", required },
            { title: "Телефон ", name: "phone", type: "text", required },
          ])}
          <PersonalData />
          <OffersData />
          <div className="form_action">
            <Button block type="submit">
              Регистрация
            </Button>
            <Button block onClick={viewSetter.changeLogin} data-name="login" variant="secondary">
              Закрыть
            </Button>
          </div>
        </form>
      )}
      {view === "option_2" && (
        <form onSubmit={loginSetter.registration} data-name="self">
          {renderInputRows([
            { title: "Логин ", name: "login", type: "text", required },
            { title: "Пароль ", name: "password", type: "password", required },
            { title: "Почта ", name: "email", type: "email", required },
            { title: "Телефон ", name: "phone", type: "text", required },
          ])}
          <PersonalData />
          <OffersData />
          <div className="form_action">
            <Button block type="submit">
              Регистрация
            </Button>
            <Button block onClick={viewSetter.changeLogin} data-name="login" variant="secondary">
              Закрыть
            </Button>
          </div>
        </form>
      )}
    </>
  );
};

export default Registration;

const PersonalData = () => (
  <div className="personal_data">
    <label>
      <input type="checkbox" name="personalData" required />
      <span>
        Я подтверждаю своё согласие на обработку{" "}
        <a href="http://example.com/personal_data_agreement.pdf" target="_blank" rel="noopener noreferrer">
          персональных данных
        </a>
      </span>
    </label>
  </div>
);

const OffersData = () => (
  <div className="personal_data">
    <label>
      <input type="checkbox" name="offersData" required />
      <span>
        Я подтверждаю свое согласие с условиями{" "}
        <a href="http://example.com/user_agreement.pdf" target="_blank" rel="noopener noreferrer">
          Пользовательского соглашения
        </a>
      </span>
    </label>
  </div>
);
