import React from 'react';
import {ScrollView, View} from 'react-native';
import Layout from '../../components/Layout';
import styles from './styles';
import Header from '../../components/Header';

const HomeScreen = ({componentId}) => {
  return (
    <Layout header>
      <Header />
      <ScrollView contentContainerStyle={styles.SV}>
        <View style={styles.wrapper} />
      </ScrollView>
    </Layout>
  );
};

export default HomeScreen;
