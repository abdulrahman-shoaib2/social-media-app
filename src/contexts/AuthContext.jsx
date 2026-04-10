import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { notificationsAPI, postsAPI, systemAPI, usersAPI } from "../services/APIServices";

const AuthContext = createContext(0);

export const useAuth = () => {
  return useContext(AuthContext);
};

export default function AuthContextProvider({ children }) {
  const [title, setTitle] = useState("");
  // const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bannerElm, setBannerELm] = useState(null);
  // const headline = { title, setTitle };
  // const authToken = { token, setToken };
  // const banner = { bannerElm, setBannerELm };


  const headline = useMemo(() => ({ title, setTitle }), [title]);
const authToken = useMemo(() => ({ token, setToken }), [token]);
const banner = useMemo(() => ({ bannerElm, setBannerELm }), [bannerElm]);

  // useEffect(() => {
  //   const savedToken = JSON.parse(localStorage.getItem("token"));

  //   if (savedToken) {
  //     systemAPI.token = savedToken;
  //   }
  // }, [token]);

  useEffect(() => {
    const storedToken = JSON.parse(localStorage.getItem("token"));

    if (storedToken) {
      setToken(storedToken);
      systemAPI.token = storedToken;
      postsAPI.token = storedToken;
      usersAPI.token = storedToken;
      notificationsAPI.token = storedToken;
    }

    setLoading(false);
  }, []);

  const login = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    systemAPI.token = newToken;
    postsAPI.token = newToken;
    usersAPI.token = newToken;
    notificationsAPI.token = newToken;

  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    systemAPI.token = null;
        postsAPI.token = null;
    usersAPI.token = null;
    notificationsAPI.token = null;

  };

  return (
    <AuthContext.Provider
      value={{ headline, authToken, banner, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
