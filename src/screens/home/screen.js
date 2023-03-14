import React from 'react';
import {ScrollView, View} from 'react-native';
import Layout from '../../components/Layout';
import styles from './styles';
import Header from '../../components/Header';
import DMButton from '../../components/Button/index';
import DMText from '../../components/Text';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Normalize} from '../../utils/normalize';
import {getOrderList} from '../../api/service/order';
import Filters from './components/Filters';
import OrderList from './components/OrderList';

const HomeScreen = ({componentId}) => {
  const [orderList, setOrderList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [filters, setFilters] = React.useState({
    ds_name: undefined,
    cd_status: undefined,
  });

  React.useEffect(() => {
    setLoading(true);
    getOrderList(filters)
      .then(data => {
        setOrderList(data);
        setLoading(false);
      })
      .catch(err => {
        console.warn('Error while retrieving orders', err);
        setLoading(false);
      });
  }, [filters]);

  return (
    <Layout header>
      <Header />
      <ScrollView style={styles.wrapper}>
        <View style={[styles.heading, styles.mrg20]}>
          <DMText medium size={Normalize(28)}>
            I tuoi ordini
          </DMText>
          <DMText size={Normalize(12)}>123 ordini effettuati</DMText>
        </View>
        <Filters filters={filters} onFilter={val => setFilters(val)} />
        <OrderList orders={orderList} />
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
