import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Home = () => {
  return(
    <View>
      <View style={styles.title}>
        <Text style={{fontSize: 28}}>
          Welcome, Muhammad Adil!
        </Text>
      </View>
      <View style={styles.text}>
        <Text style={{fontSize: 18, textAlign: "center"}}>
          You have successfully logged in by using the 'Login with Facebook' option.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    height: "75vh",
    justifyContent: "center",
  }
});

export default Home;