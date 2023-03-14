import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';
import DMText from '../../../../components/Text';
import {Normalize} from '../../../../utils/normalize';
import moment from 'moment';

const StatusBadge = ({status}) => {
  console.log(status);
  const color = () => {
    switch (status) {
      case '100':
        return '#F7C336';
      case '200':
        return '#94CC00';
      case '300':
        return '#28242D';
      case '400':
        return '#ff2f5f';
      case '500':
        return '#bfbdc1';
      default:
        return '#28242D';
    }
  };
  return <View style={[styles.statusBadge, {backgroundColor: color()}]} />;
};

const OrderList = ({orders}) => {
  //States

  return (
    <View style={styles.wrapper}>
      {orders?.map(currentOrder => {
        return (
          <TouchableOpacity style={styles.orderCard} key={currentOrder?._id}>
            <View style={styles.orderHead}>
              <DMText medium size={Normalize(20)} style={styles.patientName}>
                {currentOrder?.paziente?.nome_cognome || '-'}
              </DMText>
              <StatusBadge status={currentOrder?.cd_status} />
            </View>
            <DMText
              secondary
              size={Normalize(12)}
              style={{marginTop: Normalize(4)}}>
              {`#${currentOrder?.order_code} | ${moment(
                currentOrder?.createdAt,
              ).format('DD/MM/YYYY, HH:mm')}`}
            </DMText>
            <View style={styles.orderDetails}>
              <DMText size={Normalize(12)}>
                {currentOrder?.lavorazioni?.length
                  ? `${currentOrder?.lavorazioni?.length} lavorazion${
                      currentOrder?.lavorazioni?.length > 0 ? 'e' : 'i'
                    }`
                  : '-'}
              </DMText>
              <DMText medium size={Normalize(20)}>
                {(currentOrder?.total || 0).toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'EUR',
                })}
              </DMText>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default OrderList;
