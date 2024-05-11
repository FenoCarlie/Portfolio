import { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext({
  currentUser: null,
  token: null,
  notification: null,
  setUser: () => {},
  setItineraryId: () => {},
  setToken: () => {},
  setNotification: () => {},
  setAlert: () => {},
  setError: () => {},
});

export const ContextProvider = ({ children }) => {
  const [user, _setUser] = useState(
    JSON.parse(sessionStorage.getItem("ACCESS_USER"))
  );
  const [token, _setToken] = useState(sessionStorage.getItem("ACCESS_TOKEN"));
  var [itineraryId, _setItineraryId] = useState(
    sessionStorage.getItem("ITINERARY_ID")
  );
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

  const setUser = (user) => {
    _setUser(user);
    if (user) {
      sessionStorage.setItem("ACCESS_USER", JSON.stringify(user));
    } else {
      sessionStorage.removeItem("ACCESS_USER");
    }
  };

  const setItineraryId = (itineraryId) => {
    _setItineraryId(itineraryId);
    if (itineraryId) {
      sessionStorage.setItem("ITINERARY_ID", itineraryId);
    } else {
      sessionStorage.removeItem("ITINERARY_ID");
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

    return () => clearTimeout(sessionTimeout);
  }, []);

  return (
    <StateContext.Provider
      value={{
        user,
        setUser,
        itineraryId,
        setItineraryId,
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
