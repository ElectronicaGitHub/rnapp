import React, { Component } from 'react';
import { Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import store from './data/store';
import Application from './components/App';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Application/>
      </Provider>
    );
  }
}