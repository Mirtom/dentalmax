import {Navigation} from 'react-native-navigation';
import {RegisterComponents} from './src/screens';
import {LoginScreenId} from './src/screens/login/index';
import {HomeScreenId} from './src/screens/home';
import {logout, selectUserData} from './src/store/reducers/user';
import {awaitRehydrate, store} from './src/store';

RegisterComponents();

Navigation.events().registerAppLaunchedListener(async () => {
  await awaitRehydrate();
  store.dispatch(logout());
  Navigation.setRoot(loginRoot);
  //const userData = selectUserData(store.getState());
  //Navigation.setRoot(userData?.token ? homeRoot : loginRoot);
});

export const loginRoot = {
  root: {
    stack: {
      children: [
        {
          component: {
            name: LoginScreenId,
          },
        },
      ],
    },
  },
};

export const homeRoot = {
  root: {
    stack: {
      children: [
        {
          component: {
            name: HomeScreenId,
          },
        },
      ],
    },
  },
};

Navigation.setDefaultOptions({
  topBar: {
    visible: false,
    drawBehind: true,
    animate: false,
  },
});
