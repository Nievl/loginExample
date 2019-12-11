const initialState = {
  isOnline: false,
  loadingInf: false,
  viewLogin: "",
  isLogin: false,
};

export default function objects(state = initialState, action) {
  switch (action.type) {
    case "IS_ONLINE":
      return { ...state, isOnline: action.online };
    case "LOADING_INF":
      return { ...state, loadingInf: action.payload };
    case "CHANGE_VIEW_LOGIN":
      return { ...state, viewLogin: action.view };
    case "LOG_IN":
      return { ...state, isLogin: true };
    case "LOG_OUT":
      return { ...state, isLogin: false };
    default:
      return state;
  }
}
