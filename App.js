import React from 'react';
import { StyleSheet, Text, View, Image, Icons } from 'react-native';
import { Constants } from 'expo';

import {createBottomTabNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import Explore from './Screens/Explore';
import Trips from './Screens/Trips';
import Inbox from './Screens/Inbox';
import Saved from './Screens/Saved';
import Profile from './Screens/Profile';

export default createBottomTabNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: 'EXPLORE',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" color={tintColor} size={24} />
      )
    }
  },
  Trips: {
    screen: Trips,
    navigationOptions: {
      tabBarLabel: 'TRIPS',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./assets/airbnb.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
      )
    }
  },
  Inbox: {
    screen: Inbox,
    navigationOptions: {
      tabBarLabel: 'INBOX',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-alarm" color={tintColor} size={24} />
      )
    }
  },
  Saved: {
    screen: Saved,
    navigationOptions: {
      tabBarLabel: 'SAVED',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-albums" color={tintColor} size={24} />
      )
    }
  },
  Profile: {
    screen: Inbox,
    navigationOptions: {
      tabBarLabel: 'PROFILE',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-boat" color={tintColor} size={24} />
      )
    }
  }
}, {
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
