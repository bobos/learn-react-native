/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Navigator, TouchableHighlight, AppRegistry, StyleSheet, Text, View} from 'react-native';

const routes = [
  {
    title: 'First Scene',
    index: 0
  }, {
    title: 'Second Scene',
    index: 1
  }
]

class l7_movie extends Component {
  render() {
    return (
      <Navigator style={styles.container}
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={
          (route, navigator) =>
            <TouchableHighlight onPress={() => {
                if (route.index == 0) {
                  navigator.push(routes[1]);
                } else {
                  navigator.pop();
                }
              }}>
              <Text>Hello {route.title}!</Text>
            </TouchableHighlight>
        }
        navigationBar={
         <Navigator.NavigationBar
           routeMapper={{
             LeftButton: (route, navigator, index, navState) =>
              { return (<Text>Cancel</Text>); },
             RightButton: (route, navigator, index, navState) =>
               { return (<Text>Done</Text>); },
             Title: (route, navigator, index, navState) =>
               { return (<Text>Awesome Nav Bar</Text>); },
           }}
           style={{backgroundColor: 'gray'}}
         />
      }
    />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 100
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

AppRegistry.registerComponent('l7_movie', () => l7_movie);
