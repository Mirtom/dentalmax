import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import DMText from '../../../../components/Text';
import DMTextField from '../../../../components/TextField';
import DMCheckBox from '../../../../components/Checkbox';
import DMButton from '../../../../components/Button';
import colors from '../../../../constants/colors';
import {Normalize} from '../../../../utils/normalize';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  login,
  selectUserError,
  selectUserLoading,
} from '../../../../store/reducers/user';
import {useDispatch, useSelector} from 'react-redux';

const LoginBox = () => {
  //States
  const [email, setemail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rememberCredentials, setRememberCredentials] = React.useState(false);
  const loading = useSelector(selectUserLoading);
  const error = useSelector(selectUserError);
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (email && password) {
      dispatch(
        login({
          email,
          password,
        }),
      );
    }
  };

  return (
    <View style={styles.formWrapper}>
      <DMText medium size={Normalize(28)}>
        Accedi al tuo profilo
      </DMText>
      <DMText size={Normalize(16)} secondary style={styles.subText}>
        Effettua il login per accedere al servizio
      </DMText>
      <DMTextField
        styles={{marginTop: Normalize(32)}}
        icon={
          <MaterialIcons
            name="mail"
            color={colors.lightGrey}
            size={Normalize(24)}
            style={{marginRight: Normalize(12)}}
          />
        }
        value={email}
        small
        placeholder={'Email'}
        onChangeText={val => setemail(val)?.toLowerCase()}
      />
      <DMTextField
        styles={{marginTop: Normalize(12)}}
        icon={
          <MaterialIcons
            name="lock"
            color={colors.lightGrey}
            size={Normalize(24)}
            style={{marginRight: Normalize(12)}}
          />
        }
        value={password}
        small
        placeholder={'Password'}
        onChangeText={val => setPassword(val)}
        secureTextEntry
      />
      <DMCheckBox
        value={rememberCredentials}
        style={{marginTop: Normalize(22)}}
        onValueChange={() => setRememberCredentials(!rememberCredentials)}>
        <DMText>Ricorda le mie credenziali</DMText>
      </DMCheckBox>
      {error && (
        <DMText
          color={colors.red}
          style={styles.errorText}
          size={Normalize(14)}>
          Username o password errata
        </DMText>
      )}
      <DMButton
        small
        label={'ACCEDI'}
        style={{marginTop: Normalize(32)}}
        onPress={() => handleLogin()}
      />
      <DMText
        onPress={() => alert('Click')}
        color={colors.lightGrey}
        style={{marginTop: Normalize(20)}}
        size={Normalize(12)}>
        Ho dimenticato la password
      </DMText>
    </View>
  );
};

export default LoginBox;
