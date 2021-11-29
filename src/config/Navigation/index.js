import React from 'react';
import {StyleSheet} from 'react-native';
import {SignupMethod, Home} from '../../screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import APP_BACKGROUND from '../../assets/images/app_background.png';

const Stack = createNativeStackNavigator();

const SignupNavigation = () => {
  return(
    <Stack.Navigator initialRouteName="SignupMethod">
      <Stack.Screen 
      name="SignupMethod"
      component={SignupMethod}
      options={{headerShown: false}}
      />
      <Stack.Screen 
      name="Home"
      component={Home}
      options={{title: "Home"}}
      />
    </Stack.Navigator>
  )
};

const MyNavigation = () => {
  return(
    <NavigationContainer style={styles.appScreen}>
      <SignupNavigation />
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({
  appScreen: {
    flex: 1,
    backgroundImage: `url(${APP_BACKGROUND})`,
    backgroundSize: "cover",
  },
});

export default MyNavigation;