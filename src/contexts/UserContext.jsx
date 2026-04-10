import { createContext, useContext, useState, useMemo } from "react";

const UserContext = createContext(0);

export const useUser = () => {
  return useContext(UserContext);
};

export default function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  const [unreadCount, setUnreadCount] = useState({});
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  // const user = { userInfo, setUserInfo };
  // const themeMode = { theme, setTheme };
  // const notifications = { unreadCount, setUnreadCount };


  const user = useMemo(() => ({ userInfo, setUserInfo }), [userInfo]);
  const themeMode = useMemo(() => ({ theme, setTheme }), [theme]);
  const notifications = useMemo(() => ({ unreadCount, setUnreadCount }), [unreadCount]);

  return (
    <UserContext.Provider value={{ user, notifications, themeMode }}>
      {children}
    </UserContext.Provider>
  );
}
