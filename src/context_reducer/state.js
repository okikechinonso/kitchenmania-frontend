import StateReducer from "./stateReducer";
import StateContext from "./context";
import axios from "../helpers/axios";
import { useReducer } from "react";

export default function AppState(prop) {
  const initialState = {
    user: null,
    token: localStorage.getItem("token"),
    refreshToken: localStorage.getItem("refresh_token"),
    alerts: null,
    isAuthenticated: false,
    loading: true,
  };
  const [state, dispatch] = useReducer(StateReducer, initialState);

  async function LoginUser(email, password) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post("/login", {
        email: `${email}`,
        password: `${password}`,
        config,
      });

      if (response.data.data !== null) {
        dispatch({
          type: "LOGIN",
          payload: response.data.data,
        });
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <StateContext.Provider
      value={{
        user: state.user,
        token: state.token,
        refreshToken: state.refreshToken,
        alerts: state.alerts,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        LoginUser,
      }}
    >
      {prop.children}
    </StateContext.Provider>
  );
}
