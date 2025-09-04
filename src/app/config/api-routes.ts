import { environment } from "../../environments/environment";

export const API_ROUTES = {
  USER: {
    LOGIN: `${environment.apiUrl}/user/login`,
    LOGOUT: `${environment.apiUrl}/user/logout`,
    REGISTER: `${environment.apiUrl}/user/register`,
    GET_USER: (username : string) => `${environment.apiUrl}/users/info/${username}`,
  },
  DOCUMENT: {
    CREATE: `${environment.apiUrl}/document/create`,
    UPDATE: `${environment.apiUrl}/document/update`,
    DELETE: `${environment.apiUrl}/document/delete`,
  },
};
