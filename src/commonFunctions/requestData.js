/* eslint-disable no-return-await */
import { messageSetter, spinerLoad, viewSetter } from "../State.logic/ReduxActions";
import { authConstruct } from "./authConstruct";

export const sendData = async ({ uri, data }) => {
  return await fetch(`/${uri}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { token: authConstruct.get() },
  })
    .then(res => res.json())
    .catch(err => {
      spinerLoad();
      console.error(err.message);
      return { result: "error", description: "Неизвестная сетевая ошибка, попробуйте позже" };
    });
};


const authHandler = async res => {
  if (res.status === 200) {
    const body = await res.json();
    const token = res.headers.get("token");
    return { ...body, token }; // токен для последующих запросов
  }
  if (res.status === 401) {
    viewSetter.logOut(); // токен не корректен, на повторный вход
    messageSetter.add("Ошибка авторизации \n авторизуйтесь повторно", "Ошибка");
    return { result: "error", description: "Ошибка авторизации \n авторизуйтесь повторно" };
  }
  if (res.status === 403) {
    messageSetter.add("Ошибка авторизации \n неверный логин или пароль", "Ошибка");
    return { result: "error", description: "Ошибка авторизации \n неверный логин или пароль" };
  }
  return { result: "error", description: "Неизвестная сетевая ошибка, попробуйте позже" };
};

export const checkLogIn = async ({ Auth, token }) => {
  return await fetch(`login`, { headers: { Authorization: Auth, token } })
    .then(authHandler)
    .catch(error => {
      console.error(`Сетевая ошибка: ${error.message}`);
    });
};