import React from 'react';
import {ScrollView, View} from 'react-native';
import Layout from '../../components/Layout';
import styles from './styles';
import Header from '../../components/Header';
import DMButton from '../../components/Button/index';
import DMText from '../../components/Text';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Normalize} from '../../utils/normalize';

const HomeScreen = ({componentId}) => {
  return (
    <Layout header>
      <Header />
      <ScrollView contentContainerStyle={styles.SV}>
        <View style={styles.wrapper} />
      </ScrollView>
      <DMButton
        icon={() => (
          <MaterialIcons
            name="add"
            color={'#FFF'}
            size={Normalize(28)}
            style={{marginRight: Normalize(8)}}
          />
        )}
        label={
          <DMText size={Normalize(16)} color={'#FFF'} bold>
            NUOVO
          </DMText>
        }
        style={styles.floatingBtn}
      />
    </Layout>
  );
};

export default HomeScreen;
