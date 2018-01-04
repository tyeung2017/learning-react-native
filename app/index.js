import React from 'react';
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

import store from './config/store';
import Routes from './config/routes';
import { AlertProvider } from './components/Alert';
import buildStyles from './config/styles';

buildStyles();

const App = ({ dispatch, nav }) => (
  <Routes
    navigation={
      addNavigationHelpers({
        dispatch,
        state: nav,
      })}
  />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

const AppWithNav = connect(mapStateToProps)(App);

App.propTypes = {
  dispatch: PropTypes.func,
  nav: PropTypes.object,
};

export default () => (
  <Provider store={store}>
    <AlertProvider>
      <AppWithNav />
    </AlertProvider>
  </Provider>
);
