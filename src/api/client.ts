import axios from "axios";
import { API } from "../configs/env";
import { getLocalStorage } from "../utils/helpers";
import { ERROR_MESSAGES, LOCAL_STORAGE_KEY } from "../utils/constants";
import { AUTH_ROUTES } from "../routing/routes";

export const METHODS = {
  POST: "post",
  GET: "get",
  DELETE: "delete",
  PUT: "put",
  PATCH: "patch",
  HEAD: "head",
  OPTIONS: "options",
};

const BASE_URL = API.URL;
// const DEFAULT_PREFIX = "/api";

const axiosConfig = {
  baseURL: BASE_URL,
  withCredentials: true,
};

const axiosInstance = axios.create(axiosConfig);

axiosInstance.interceptors.request.use((config) => {
  const token = getLocalStorage(LOCAL_STORAGE_KEY);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;

    if (!response) {
      return Promise.reject(error);
    }

    const { status } = response;

    const errorMessage =
      response?.error?.message ||
      ERROR_MESSAGES[status as keyof typeof ERROR_MESSAGES] ||
      ERROR_MESSAGES.common;

    const customErrorMessage = {
      message: errorMessage,
      ...response,
    };

    if ([401].includes(status)) {
      localStorage.clear();
      window.location.href = AUTH_ROUTES.LOGIN.url;
      return Promise.reject(customErrorMessage);
    }

    return Promise.reject(customErrorMessage);
  }
);

const client = ({
  method = METHODS.GET,
  url = "",
  data = undefined as any,
  ...rest
}: {
  method?: string;
  url?: string;
  data?: any;
  [key: string]: any;
}) => {
  return axiosInstance({
    method,
    url,
    data,
    withCredentials: true,
    ...rest,
  });
};

export default client;

/*
const client = ({
  method = METHODS.GET,
  url = "",
  data = undefined as any,
  ...rest
}: {
  method?: string;
  url?: string;
  data?: any;
  [key: string]: any;
})

same as

type ClientConfig =  {
  method?: string;
  url?: string;
  data?: any;
  [key: string]: any;
}

const client = ({
  method = METHODS.GET,
  url = '',
  data = undefined as any,
  ...rest
}: ClientConfig) 
*/
