import React, {Suspense} from 'react';
import {Navigation} from 'react-native-navigation';
import {LoginScreenDef, LoginScreenId} from './login/index';
import {Provider} from 'react-redux';
import {store} from '../store';
import {HomeScreenDef} from './home';
import {HomeScreenId} from './home/index';

export const RegisterComponents = () => {
  Navigation.registerComponent(LoginScreenId, () =>
    WrappedComponent(LoginScreenDef),
  ); //LoginScreen
  Navigation.registerComponent(HomeScreenId, () =>
    WrappedComponent(HomeScreenDef),
  ); //HomeScreen
};

//Wrapper store
function WrappedComponent(Component) {
  return function inject(props) {
    const EnhancedComponent = () => (
      <Provider store={store}>
        <Suspense fallback="loading">
          <Component {...props} />
        </Suspense>
      </Provider>
    );

    return <EnhancedComponent />;
  };
}
