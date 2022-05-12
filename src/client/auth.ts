import axios, {AxiosResponse} from 'axios';
import {LoginResponse, RegisterResponse} from './types';
import {Urls} from './urls';

export class Auth {
  static login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    return axios
      .post<{email: string; password: string}, AxiosResponse<LoginResponse>>(
        Urls.getLoginUrl(),
        {email, password},
      )
      .then(e => e.data);
  };

  static register = async ({
    email,
    password,
    dateOfBirth,
    username,
  }: {
    email: string;
    password: string;
    username: string;
    dateOfBirth: string;
  }) => {
    return axios
      .post<
        {
          email: string;
          password: string;
          username: string;
          dateOfBirth: string;
        },
        AxiosResponse<RegisterResponse>
      >(Urls.getRegistrationUrl(), {
        email,
        password,
        username,
        dateOfBirth,
      })
      .then(e => e.data);
  };

  static logout = async ({accessToken}: {accessToken: string}) => {
    return axios
      .get(Urls.getLogoutUrl(), {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      })
      .then(e => e.data);
  };
}
