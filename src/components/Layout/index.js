import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import styles from './style';

const Layout = ({children, header = false}) => {
  return (
    <SafeAreaView
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
