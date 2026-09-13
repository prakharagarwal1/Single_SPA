// Shared auth hook for single-spa Micro Frontends
// Centralizes token state, login/logout, and route protection
// so every MFE shares the same auth behavior.

import { useEffect, useState } from "react";
import { authAPI } from "../api";

const TOKEN_KEY = "token";

/**
 * Read the current token from localStorage (safe across MFEs).
 * @returns {string|null}
 */
export const getToken = () => {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch (e) {
    return null;
  }
};

/**
 * Persist a token in localStorage.
 * @param {string} token
 */
export const setToken = (token) => {
  try {
    if (token) {
      localStorage.setItem(TOKEN_KEY, token);
    } else {
      localStorage.removeItem(TOKEN_KEY);
    }
  } catch (e) {
    // localStorage may not be available in some contexts
  }
};

/**
 * Hook exposing auth state and actions.
 * @returns {Object} { token, isAuthenticated, login, logout }
 */
export const useAuth = () => {
  const [token, setTokenState] = useState(getToken());

  // Keep state in sync if another part of the app updates the token
  useEffect(() => {
    const onStorage = (event) => {
      if (event.key === TOKEN_KEY) {
        setTokenState(event.newValue);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const login = async (credentials) => {
    const response = await authAPI.login(credentials);
    const newToken = response.data?.token;
    if (newToken) {
      setToken(newToken);
      setTokenState(newToken);
    }
    return response;
  };

  const logout = async () => {
    try {
      await authAPI.logout();
    } catch (e) {
      // Continue clearing local state even if the server call fails
    }
    setToken(null);
    setTokenState(null);
  };

  return {
    token,
    isAuthenticated: Boolean(token),
    login,
    logout,
  };
};

export default useAuth;
