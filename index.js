import {Navigation} from 'react-native-navigation';
import {RegisterComponents} from './src/screens';
import {LoginScreenId} from './src/screens/login/index';

RegisterComponents();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
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
  });
});

Navigation.setDefaultOptions({
  topBar: {
    visible: false,
    drawBehind: true,
    animate: false,
  },
});
