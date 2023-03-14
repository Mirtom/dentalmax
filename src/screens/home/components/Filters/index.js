/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import DMTextField from '../../../../components/TextField';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Normalize} from '../../../../utils/normalize';
import DMText from '../../../../components/Text';
import _ from 'lodash';

const CHIPS = [
  {
    label: 'TUTTI',
    value: undefined,
    icon: 'subject',
    color: '#6E6B77',
  },
  {
    label: 'IN ATTESA',
    value: 100,
    icon: 'schedule',
    color: '#F7C336',
  },
  {
    label: 'CONFERMATI',
    value: 200,
    icon: 'check',
    color: '#94CC00',
  },
  {
    label: 'CONSEGNATI',
    value: 300,
    icon: 'inventory',
    color: '#28242D',
  },
  {
    label: 'RIFIUTATI',
    value: 400,
    icon: 'block',
    color: '#ff2f5f',
  },
  {
    label: 'IN SOSPESO',
    value: 500,
    icon: 'pause',
    color: '#bfbdc1',
  },
];

const Filters = ({filters, onFilter}) => {
  const debouncer = React.useCallback(
    _.debounce(async text => {
      onFilter({
        ...filters,
        ds_name: text,
      });
    }, 1000),
    [],
  );

  return (
    <View style={styles.wrapper}>
      <DMTextField
        styles={styles.mrg20}
        value={filters.ds_name}
        onChangeText={val => debouncer(val)}
        placeholder={'Cerca ordine...'}
        icon={
          <MaterialIcons
            name="search"
            color={'#6E6B77'}
            size={Normalize(24)}
            style={{marginRight: Normalize(12)}}
          />
        }
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chipWrapper}>
        {CHIPS.map(currentChip => {
          let active = filters.cd_status === currentChip.value;
          return (
            <TouchableOpacity
              style={[
                styles.chip,
                {backgroundColor: active ? currentChip.color : '#FFF'},
              ]}
              onPress={() =>
                onFilter({
                  ...filters,
                  cd_status: currentChip.value,
                })
              }>
              <MaterialIcons
                name={currentChip.icon}
                color={!active ? '#6E6B77' : '#FFF'}
                size={Normalize(16)}
                style={{marginRight: Normalize(4)}}
              />
              <DMText
                medium
                color={!active ? '#6E6B77' : '#FFF'}
                size={Normalize(12)}>
                {currentChip.label}
              </DMText>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Filters;
