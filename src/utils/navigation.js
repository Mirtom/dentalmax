import {Navigation} from 'react-native-navigation';

export const goToScreen = (componentId, targetScreenId, passProps) => {
  Navigation.push(componentId, {
    component: {
      passProps,
      name: targetScreenId,
    },
  });
};
