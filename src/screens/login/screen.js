import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import Layout from '../../components/Layout';
import styles from './styles';
import {LogoLogin} from '../../assets';
import LoginBox from './components/LoginBox';
import RegisterBox from './components/RegisterBox';

const LoginScreen = ({componentId}) => {
  return (
    <Layout>
      <ScrollView contentContainerStyle={styles.SV}>
        <View style={styles.wrapper}>
          <View style={styles.logoWrapper}>
            <Image source={LogoLogin} style={styles.logoImage} />
          </View>
          {/* LOGIN */}
          <LoginBox />

          {/* REGISTER */}
          <RegisterBox />
        </View>
      </ScrollView>
    </Layout>
  );
};

export default LoginScreen;
