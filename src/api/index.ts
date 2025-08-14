import client, { METHODS } from "./client";

export const api = {
  users: {
    getAll: ({ data, ...configs }: { data: any; [key: string]: any }) =>
      client({
        url: "/users",
        method: METHODS.GET,
        data,
        ...configs,
      }),
    get: ({ id, ...configs }: { id: string; [key: string]: any }) =>
      client({
        url: `/users/${id}`,
        method: METHODS.GET,
        ...configs,
      }),
  },
};
