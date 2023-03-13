import React from 'react';
import {View, StyleSheet} from 'react-native';
import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';

const Layout = ({children, header = false}) => {
  return (
    <SafeAreaView
      edges={['bottom', 'left', 'right']}
      style={StyleSheet.flatten([styles.wrapper, !header && styles.header])}>
      {header ? (
        <View style={styles.childrenWrapper}>{children}</View>
      ) : (
        children
      )}
    </SafeAreaView>
  );
};

export default Layout;
