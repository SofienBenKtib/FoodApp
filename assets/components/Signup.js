import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import colors from "../colors/Colors";

const Signup = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/*Header*/}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Hello, Please fill this form</Text>
      </View>
      {/*Login form*/}
      <View style={styles.formWrapper}>
        <TextInput placeholder="Name" style={styles.textInput} />
        <TextInput placeholder="Family name" style={styles.textInput} />
        <TextInput placeholder="Email" style={styles.textInput} />
        <TextInput
          placeholder="Phone number"
          style={styles.textInput}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.loginWrapper}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={styles.signupButton}>
            <Text style={styles.signupText}>Signup</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  header: {
    marginTop: 50,
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  formWrapper: {
    marginTop: 5,
  },
  textInput: {
    marginTop: 50,
    marginHorizontal: 50,
    fontSize: 15,
    borderBottomColor: colors.textDark,
    borderBottomWidth: 1,
  },
  loginWrapper: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  signupButton: {
    backgroundColor: colors.textDark,
    padding: 15,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 12,
    marginBottom: 15,
  },
  signupText: {
    color: colors.textLght,
    fontSize: 18,
    justifyContent: "center",
    alignItems: "center",
  },
});
