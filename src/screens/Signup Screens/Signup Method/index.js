import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';
import APP_HEARTBEAT from '../../../assets/images/app_heartbeat.png';
import * as Facebook from 'expo-facebook';

const SignupMethod = ({
  navigation
}) => {
  const logIn = async () => {
    try {
      await Facebook.initializeAsync({
        appId: '4467990949985538',
      });
      const {
        type,
        token,
      } = await Facebook.logInWithReadPermissionsAsync({
          permissions: ['public_profile'],
        });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        signInWithCustomToken(auth, token)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
          const name = response.json().name;
          navigation.navigate("HomePage");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ...
        });
      }
    } catch ({
        message
      }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }
  return (
    <View style={ { backgroundColor: "#ecf1fa", }}>
      <View style={styles.logoView}>
        <Image style={ { width: 73, height: 61 }} source={ { uri: APP_HEARTBEAT }} />
        <View style={styles.logoText}>
          <Text style={ { color: "#1d1a7a", fontWeight: "800", fontSize: 18, marginRight: 5 }}>
            Medical
          </Text>
          <Text style={ { color: "#1d1a7a", fontSize: 18 }}>
            App
          </Text>
        </View>
      </View>
      <View style={styles.signupMethod}>
        <Text style={ { color: "#1d1a7a", fontWeight: "800", fontSize: 20, marginBottom: 20 }}>
          Welcome
        </Text>
        <Text style={ { marginBottom: 20 }}>
          Sign in to continue
        </Text>
        <TouchableOpacity activeOpacity={0.7} style={ {
      width: "95%",
      height: 45,
      backgroundColor: "#1d1a7a",
      borderRadius: 10,
      marginTop: 20,
      marginBottom: 20,
      textAlign: "center",
      paddingTop: 12,
    }}>
          <Text onPress={() => navigation.navigate("NumberInput")} style={ { color: "#fff" }}>
            Sign up with mobile number
          </Text>
        </TouchableOpacity>
        <Text>
          or
        </Text>
        <TouchableOpacity activeOpacity={0.7} onPress={logIn} style={styles.button}>
          <Text style={ { color: "#fff" }}>
            Sign up with Facebook
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.termsAndConditions}>
        <Text>
          By signing in, you acccept our
        </Text>
        <Text style={ { color: "#1d1a7a" }}>
          Terms and Conditions
        </Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  logoView: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 70,
  },
  logoText: {
    flexDirection: "row",
    marginTop: 5,
  },
  signupMethod: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center",
  },
  appScreenTitle: {
    flexDirection: "row",
    marginTop: 12,
  },
  button: {
    width: "95%",
    height: 45,
    backgroundColor: "#3a559f",
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    paddingTop: 12,
  },
  termsAndConditions: {
    flex: 0.1,
    width: "90%",
    marginHorizontal: "auto",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  }
});

export default SignupMethod;