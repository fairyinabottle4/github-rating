import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { Link, useLocation } from 'react-router-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.appBar.primary
  },
});

const AppBar = () => {
  // const { pathname } = useLocation();
  // console.log(pathname);
  return (
  <View style={styles.container}>
    <ScrollView horizontal>
      <AppBarTab />
    </ScrollView>
  </View>);
};

export default AppBar;
