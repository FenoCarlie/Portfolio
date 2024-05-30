import { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext({
  currentUser: null,
  token: null,
  notification: null,

  setToken: () => {},
  setNotification: () => {},
  setAlert: () => {},
  setError: () => {},
});

export const ContextProvider = ({ children }) => {
  const [token, _setToken] = useState(sessionStorage.getItem("ACCESS_TOKEN"));

  const [notification, _setNotification] = useState("");
  const [alert, _setAlert] = useState("");
  const [error, _setError] = useState("");

  const setToken = (token) => {
    _setToken(token);
    if (token) {
      sessionStorage.setItem("ACCESS_TOKEN", token);
    } else {
      sessionStorage.removeItem("ACCESS_TOKEN");
    }
  };

  const setNotification = (message) => {
    _setNotification(message);
    setTimeout(() => {
      _setNotification("");
    }, 5000);
  };

  const setAlert = (message) => {
    _setAlert(message);
    setTimeout(() => {
      _setAlert("");
    }, 5000);
  };

  const setError = (message) => {
    _setError(message);
    setTimeout(() => {
      _setError("");
    }, 5000);
  };

  useEffect(() => {
    const sessionTimeout = setTimeout(() => {
      sessionStorage.clear();
    }, 4 * 60 * 60 * 1000);

    setToken(1234);

    return () => clearTimeout(sessionTimeout);
  }, []);

  return (
    <StateContext.Provider
      value={{
        token,
        setToken,
        notification,
        setNotification,
        alert,
        setAlert,
        error,
        setError,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
