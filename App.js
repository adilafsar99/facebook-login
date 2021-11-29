import React from 'react';
import {
  StatusBar
} from 'expo-status-bar';
import {View, StyleSheet} from 'react-native';
import MyNavigation from './src/config/Navigation';

export default function App() {
  return(
    <View>
      <MyNavigation />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c1c1c1"
  },
});