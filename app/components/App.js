import React, { Component } from 'react';
import { Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../data/actions';

import ScarletScreen from '../ScarletScreen';
import GrayScreen from '../GrayScreen';
import BlueScreen from '../BlueScreen';
import MaizeScreen from '../MaizeScreen';
import GoldScreen from '../GoldScreen';
import BlackScreen from '../BlackScreen';
import ModalScreen from '../ModalScreen';

// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}

class Application extends Component {
  render() {
  
    console.log(this.props.actions);
    console.log(this.props.page);

    return (
      <Router>
        <Scene key="root">
          {/* Tab Container */}
          <Scene
            key="tabbar"
            tabs={true}
            tabBarStyle={{ backgroundColor: '#FFFFFF' }}
          >
            {/* Tab and it's scenes */}
            <Scene key="osu" title="OSU" icon={TabIcon}>
              <Scene
                key="scarlet"
                component={ScarletScreen}
                title="Scarlet"
              />
              <Scene
                key="gray"
                component={GrayScreen}
                title="Gray"
              />
            </Scene>

            {/* Tab and it's scenes */}
            <Scene key="um" title="UM" icon={TabIcon}>
              <Scene
                key="blue"
                component={BlueScreen}
                title="Blue"
              />
              <Scene
                key="maize"
                component={MaizeScreen}
                title="Maize"
              />
            </Scene>

            {/* Tab and it's scenes */}
            <Scene key="vu" title="VU" icon={TabIcon}>
              <Scene
                key="gold"
                component={GoldScreen}
                title="Gold"
              />
              <Scene
                key="black"
                component={BlackScreen}
                title="Black"
              />
            </Scene>
          </Scene>

          <Scene
            key="modal"
            direction="vertical"
            component={ModalScreen}
            title="Modal"
            hideNavBar
          />
        </Scene>
      </Router>
    )
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Application);