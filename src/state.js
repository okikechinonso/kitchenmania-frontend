import StateReducer from "./stateReducer";
import { StateContext } from "./context";

export default function State(prop) {
  const initialState = {
    user: null,
    token: localStorage.getItem("token"),
    refreshToken: localStorage.getItem("refresh_token"),
    alerts: null,
    isAuthenticated: false,
    loading: true,
  };
  const [state, dispatch] = useReducer(StateReducer, initialState);

  function LoginUser(email, password) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post("/auth/login", {
        email: `${email}`,
        password: `${password}`,
        config,
      });
      if (response.data.data !== null) {
        dispatch({
          type: "LOGIN",
          payload: response.data.data,
        });
      }
    } catch (error) {}
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
        LoginUser
      }}
    >
        {prop.children}
    </StateContext.Provider>
  );
}
