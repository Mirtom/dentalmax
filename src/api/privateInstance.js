import axios from 'axios';
import Config from 'react-native-config';
import {Navigation} from 'react-native-navigation';
import {store} from '../store';
import {loginRoot} from '../..';
import {selectUserData} from '../store/reducers/user';

const privateInstance = axios.create({
  baseURL: Config.BASE_URL,
});

privateInstance.interceptors.request.use(async config => {
  const {token} = selectUserData(store.getState());
  config.headers.Authorization = `Bearer ${token}`;
  console.log('[REQ]', Config.BASE_URL, config.url, config.params, config.data);
  return config;
});

privateInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 401) {
      //store.dispatch(logout());
      //Navigation.setRoot(loginRoot);
    }
    return Promise.reject(error);
  },
);

export default privateInstance;
