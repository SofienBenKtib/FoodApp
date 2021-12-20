import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Touchable,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import colors from "../colors/Colors";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/*Header*/}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome to Sofien's food app</Text>
      </View>
      {/*Login form*/}
      <View style={styles.formWrapper}>
        <TextInput placeholder="Email" style={styles.textInput} />
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.loginWrapper}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={styles.loginButton}>
            <Text style={styles.loginText}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/*Login with social*/}
      <View style={styles.loginWithSocial}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Or : </Text>
        </View>
        <TouchableOpacity>
          <View style={styles.SocialIcon}>
            <Feather name="facebook" size={18} />
            <Text style={styles.SocialText}>Login with Facebook</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.SocialIcon}>
            <Feather name="instagram" size={18} />
            <Text style={styles.SocialText}>Login with Instagram</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/*Forgot password & signup*/}
      <TouchableOpacity>
        <View style={styles.txtContainer}>
          <Text style={styles.text}>I forgot my password</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.txtContainer}>
          <Text style={styles.text}>I don't have an account</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  header: {
    marginTop: 50,
    marginLeft: 50,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  formWrapper: {
    marginTop: 30,
  },
  textInput: {
    marginTop: 50,
    marginHorizontal: 50,
    fontSize: 15,
    borderBottomColor: colors.textDark,
    borderBottomWidth: 1,
  },
  loginWrapper: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: colors.textDark,
    padding: 15,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 12,
  },
  loginText: {
    color: colors.textLght,
    fontSize: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  loginWithSocial: {
    marginTop: 25,
    marginBottom: 25,
  },
  textContainer: {
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  SocialIcon: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    margin: 12,
  },
  SocialText: {
    marginLeft: 15,
    fontSize: 18,
  },
  txtContainer: {
    alignItems: "center",
    marginTop: 15,
  },
});
