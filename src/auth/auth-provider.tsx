import { createContext, type ReactNode, useState, useEffect } from "react";
import useLocalStorage from "../hooks/use-local-storage";
import { LOCAL_STORAGE_KEY, ROLES } from "../utils/constants";
import { REDIRECTION } from ".";
import { AUTH_ROUTES } from "../routing/routes";
import { decodeToken } from "../utils/helpers";
import { useTimeout } from "@mantine/hooks";

const AuthContext = createContext<unknown>(undefined); // context hold the value 'unknown' it means can not use value without narrowing or type assertions, and default value is undefined.

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken, removeToken] = useLocalStorage(LOCAL_STORAGE_KEY, "");

  const [user, setUser] = useState(() => {
    if (token) {
      return decodeToken(token);
    }
    return {};
  });

  const role = user?.role || "";

  const isAdmin = role === ROLES.ADMIN;

  const redirectUrl = role ? REDIRECTION[role] : AUTH_ROUTES.LOGIN.url;

  const login = (newToken: string) => {
    setToken(newToken);
  };

  const resetAllStores = () => {};

  const { start, clear } = useTimeout(() => resetAllStores(), 1000);

  const logout = () => {
    removeToken();
    start();
  };

  useEffect(() => {
    if (token) {
      setUser(decodeToken(token));
    } else {
      setUser({});
    }
  }, [token]);

  useEffect(() => {
    return () => {
      clear();
    };
  }, [clear]);

  return (
    <AuthContext.Provider
      value={{ role, user, redirectUrl, login, logout, isAdmin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

/*

1. const AuthContext = createContext<unknown>(undefined); 

-> context hold the value 'unknown' it means can not use value without narrowing or type assertions, and default value is undefined.

Optional:-

import React, { createContext } from "react";

interface AuthProviderProps {
    children: React.ReactNode;
}

*/

/*

1. Let say, there is a key='auth_route' and value= not set yet
      - token === "" (default value)
      - Stored in React state AND localStorage [ in custom hook ].
      
2. user login using token, setToken updates soredValue and also set in the localstorage as value to corresponding key.

3. token changes → triggers this useEffect, and based upon that entire user object get and set to user. and redirection occured based upon role.

4. user logout, token remove, it triggers localstorage and state.
token empt and based upon that redirect to login.

useState on first render, useEffect on ever render whne changes appears.
*/
