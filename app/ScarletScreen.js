import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './data/actions';

class ScarletScreen extends Component {
  render() {

    console.log(this.props.actions);
    console.log(this.props.page);

    return (
      <View style={styles.container}>
        <Text
          style={styles.welcome}
          onPress={() => this.props.actions.increment()}
        >
          { this.props.page.number }
        </Text>
        <Text
          style={styles.welcome}
          onPress={() => Actions.modal()} 
        >
          Open Modal
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bb0000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

const mapStateToProps = (state) => {
  return {
    page : state.page
  }
}

const mapDispatchToProps = (dispatch) => {
  return  {
    actions : bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScarletScreen);