/* eslint-disable no-restricted-globals */
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducers";
import { dataSetExtractor, valueExtractor } from "../commonFunctions/extractors";
import { sendData, checkLogIn } from "../commonFunctions/requestData";
import { authConstruct } from "../commonFunctions/authConstruct";

export let store;

if (process.env.NODE_ENV === "development") {
  store = createStore(reducer, composeWithDevTools());
} else {
  store = createStore(reducer);
}

export const spinerLoad = (isLoad = false) => {
  if (isLoad) {
    window.timerSpiner = setTimeout(spinerLoad, 60000);
  } else {
    clearTimeout(window.timerSpiner);
  }
  store.dispatch({ type: "IS_LOADING", isLoad });
};

export const viewSetter = {
  changeLogin(view) {
    if (typeof view === "string") {
      store.dispatch({ type: "CHANGE_VIEW_LOGIN", view });
    } else {
      const currView = dataSetExtractor(view.target, "name");
      store.dispatch({ type: "CHANGE_VIEW_LOGIN", view: currView });
    }
  },
  logIn() {
    store.dispatch({ type: "LOG_IN" });
  },
};

export const messageSetter = {
  add(msg, header) {
    spinerLoad();
    store.dispatch({ type: "ADD_MESSAGE", msg, header });
  },
  close: () => store.dispatch({ type: "CLOSE_WINDOW" }),
};

export const loginSetter = {
  async registration(e) {
    e.preventDefault();
    spinerLoad(true);
    const form = dataSetExtractor(e.target, "name");
    let data = {};
    if (form === "option_1") {
      data = { role: "option_1", ...valueExtractor(e.target, ["login", "company", "contactFace", "phone", "email"]) };
    } else if (form === "self") {
      data = { role: "option_2", ...valueExtractor(e.target, ["login", "phone", "email"]) };
    }
    const rawPass = valueExtractor(e.target, "password");
    const password = window.btoa(rawPass);
    const uri = "user/registration";
    const result = await sendData({ uri, data: { ...data, password } });
    if (result) {
      if (result.result === "OK") {
        messageSetter.add("Данные отправлены");
        viewSetter.changeLogin("login");
      }
      if (result.result === "error") {
        messageSetter.add(result.description, "Ошибка");
      }
    } else {
      console.error("result is not found");
    }
    spinerLoad();
  },
  async login(e) {
    e.preventDefault();
    spinerLoad(true);
    const user = valueExtractor(e.target, ["login", "password"]);
    const Auth = `Basic ${window.btoa(`${user.login}:${user.password}`)}`;
    const result = await checkLogIn({ Auth });
    if (result) {
      if (result.result === "error") {
        messageSetter.add(result.description);
      } else if (result.result !== "error") {
        authConstruct.add(result.token);
        spinerLoad();
        viewSetter.logIn();
        if (result.result.url) window.location.replace(result.result.url);
      }
    } else {
      messageSetter.add("Отсутствует ответ сервера", "Ошибка");
    }
  },
  async forget(e) {
    e.preventDefault();
    spinerLoad(true);
    const data = valueExtractor(e.target, ["login", "email"]);
    const uri = "user/forget";
    const action = viewSetter.changeLogin.bind(null, "login");
    const result = await sendData({ uri, data, success: action, reject: action });
    if (result) {
      if (result.result === "OK") {
        messageSetter.add("Данные отправлены");
        viewSetter.changeLogin("login");
      }
      if (result.result === "error") {
        messageSetter.add(result.description, "Ошибка");
      }
    } else {
      console.error("result is not found");
    }
    spinerLoad();
  },
};
