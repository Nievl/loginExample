const initialState = { msg: "", header: "", ask: "", action: null, loading: false, messages: [] };

export default function error(state = initialState, action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      return { ...state, msg: action.msg, header: action.header, ask: "", action: null };
    case "CLOSE_WINDOW":
      return { ...state, msg: "", header: "", ask: "", action: null };
    case "IS_LOADING":
      return { ...state, loading: action.isLoad };
    default:
      return state;
  }
}
