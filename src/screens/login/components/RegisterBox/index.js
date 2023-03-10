import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import DMText from '../../../../components/Text';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DMButton from '../../../../components/Button';
import colors from '../../../../constants/colors';
import {Normalize} from '../../../../utils/normalize';
import common from '../../../../constants/common';

const RegisterBox = () => {
  //States

  return (
    <View style={styles.formWrapper}>
      <DMText medium size={Normalize(28)}>
        Non sei registrato?
      </DMText>
      <DMText size={Normalize(16)} secondary style={{marginTop: Normalize(8)}}>
        Contattaci per avere più informazioni
      </DMText>
      <DMButton
        small
        label={'CONTATTACI'}
        style={{marginTop: Normalize(32)}}
        secondary
      />
      <DMText
        size={Normalize(16)}
        secondary
        alignCenter
        style={{marginTop: Normalize(32)}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius
        vestibulum nisi, eget ultricies erat posuere non.
      </DMText>
      <View style={styles.contact}>
        <View style={styles.contactRow}>
          <MaterialCommunityIcons
            name="phone"
            color={colors.primaryGreen}
            size={Normalize(20)}
            style={{marginRight: Normalize(12)}}
          />
          <DMText
            onPress={() => alert('press')}
            medium
            color={colors.primaryGreen}>
            {common.tel}
          </DMText>
        </View>
        <View style={styles.contactRow}>
          <MaterialCommunityIcons
            name="cellphone"
            color={colors.primaryGreen}
            size={Normalize(20)}
            style={{marginRight: Normalize(12)}}
          />
          <DMText
            onPress={() => alert('press')}
            medium
            color={colors.primaryGreen}>
            {common.phone}
          </DMText>
        </View>
        <View style={styles.contactRow}>
          <MaterialCommunityIcons
            name="email"
            color={colors.primaryGreen}
            size={Normalize(20)}
            style={{marginRight: Normalize(12)}}
          />
          <DMText
            onPress={() => alert('press')}
            medium
            color={colors.primaryGreen}>
            {common.mail}
          </DMText>
        </View>
      </View>
    </View>
  );
};

export default RegisterBox;
