import { AuthActions, AuthState } from "../utils/types";

export const authReducer=(state:AuthState, action:AuthActions):AuthState=> {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuthenticated: true, token: action.payload };
    case "LOGOUT":
      return { ...state, isAuthenticated: false, token: null };
    default:
      return state;
  }
}