import React from 'react';
import { Route, Switch, Redirect } from 'react-router-native';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import RepositoryPage from './RepositoryPage';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8'
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path='/signin'>
          <SignIn />
        </Route>
        <Route path='/repository/:id' exact>
          <RepositoryPage />
        </Route>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Redirect to="/signin" />
      </Switch>
    </View>
  );
};

export default Main;
