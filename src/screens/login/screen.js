import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import Layout from '../../components/Layout';
import styles from './styles';
import DMText from '../../components/Text';
import {LogoLogin} from '../../assets';
import {Normalize} from '../../utils/normalize';
import DMTextField from '../../components/TextField';
import DMCheckBox from '../../components/Checkbox';
import DMButton from '../../components/Button';
import colors from '../../constants/colors';
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
