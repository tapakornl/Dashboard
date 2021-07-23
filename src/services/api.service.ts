import { useState } from 'react';
import axios from 'axios';
import { API_CONSTANTS } from './api.constants';

function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    if (tokenString) {
      const userToken = JSON.parse(tokenString);
      return userToken?.token;
    }
    return null
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: any) => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token,
  };
}

async function loginUser(username: string, password: string) {
  const requestOptions: any = {
    url: API_CONSTANTS.LOGIN_URL,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { username: username, password: password },
  };
  try {
    let responseJson = await axios.request(requestOptions);
    //@ts-ignore
    sessionStorage.setItem('login', true);
    return responseJson.data;
  } catch (error) {
    //@ts-ignore
    sessionStorage.setItem('login', false);
    var data = { requestError: error.message, response: error.response };
    return data;
  }
}

async function controlAPI(payload: any) {
  const token = sessionStorage.getItem('token');

  const requestOptions = {
    url: API_CONSTANTS.DEVICES_CONTROL_URL,
    method: 'POST',

    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `token ${token}`,
    },
    data: payload,
  };
  try {
    //@ts-ignore
    let responseJson = await axios.request(requestOptions);
    return responseJson.data;
  } catch (error) {
    //## [DEBUG]
    console.error('[Services] Control Device Error:');
    console.error(error);

    var data = { requestError: error.message, response: error.response };
    return data;
  }
}

export { useToken, loginUser, controlAPI };
