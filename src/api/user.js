import http from '../libs/api.request'
import api from './api'

export const login = ({ userName, password }) => {
  const data = {
    account: userName,
    password: password
  };
  return http.post(api.service.loginUrl,data);
};

export const getUserInfo = (token) => {
  let data= {
    token:token
  };
  return http.post(api.service.getUersInfo,data);
};

export const logout = (token) => {

  return http.post(api.service.logout,'');
};
