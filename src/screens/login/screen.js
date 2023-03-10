import React from 'react';
import {View} from 'react-native';
import Layout from '../../components/Layout';
import styles from './styles';
import DMText from '../../components/Text';

const LoginScreen = ({componentId}) => {
  return (
    <Layout>
      <View style={styles.wrapper}>
        <DMText>Ciao</DMText>
      </View>
    </Layout>
  );
};

export default LoginScreen;
