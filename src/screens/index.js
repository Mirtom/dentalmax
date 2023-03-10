import React, {Suspense} from 'react';
import {Navigation} from 'react-native-navigation';
import {LoginScreenDef, LoginScreenId} from './login/index';

export const RegisterComponents = () => {
  Navigation.registerComponent(LoginScreenId, () =>
    WrappedComponent(LoginScreenDef),
  ); //LoginScreen
};

//Wrapper store
function WrappedComponent(Component) {
  return function inject(props) {
    const EnhancedComponent = () => (
      <Suspense fallback="loading">
        <Component {...props} />
      </Suspense>
    );

    return <EnhancedComponent />;
  };
}
