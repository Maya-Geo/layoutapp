import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.inputEdit}>Edit Profile</Text>
      <View style={styles.SnowContainer}>
        <Image source={require("./assets/Snow.jpg")} style={styles.Snow} />

        <Image source={require("./assets/camara.png")} style={styles.camara} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput placeholder="School" style={styles.input} />
        <Text style={styles.inputLine}>Brunel School</Text>
        <TextInput placeholder="Email Address" style={styles.input} />
        <Text style={styles.inputLine}>Mayageo3@gmail.com</Text>

        <TextInput placeholder="Name" style={styles.input} />
        <Text style={styles.inputLine}>Maya</Text>
        <TextInput placeholder="Nick Name" style={styles.input} />
        <Text style={styles.inputLine}>Chica</Text>
        <TextInput placeholder="Emergency Contact" style={styles.input} />
        <Text style={styles.inputLine}>+4475892394</Text>
      </View>

      <View style={styles.contacts}>
        <Image
          source={require("./assets/contact.png")}
          style={styles.contact}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonsText}>Update Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },

  inputEdit: {
    top: 1,
    fontSize: 20,
    textAlign: "center",
    borderBottomWidth: 1,
  },

  Snow: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },

  SnowContainer: {
    flex: 0.7,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    height: 100,
    width: 50,
    borderRadius: 50,
  },

  inputContainer: {
    flex: 1,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    borderRadius: 5,
    borderColor: "black",
    lineHeight: 30,
    height: 30,
    color: "black",
    marginBottom: 2,
    width: 300,
  },

  inputLine: {
    borderBottomWidth: 10,
    width: 300,
  },

  camara: {
    top: 134,
    right: 100,
    left: 230,
    position: "absolute",
    borderRadius: 30,
    height: 50,
    width: 50,
  },

  contacts: {
    justifyContent: "space-between",
    flexDirection: "row",
    top: 490,
    left: 40,
    position: "absolute",
    borderRadius: 25,
    height: 40,
    width: 50,
  },

  contact: {
    marginTop: 5,
    width: 20,
    height: 20,
    margin: 10,
    left: 200,
    position: "absolute",
    marginHorizontal: 70,
  },

  button: {
    backgroundColor: "lightblue",
    padding: 15,
    borderRadius: 25,
    justifyContent: "center",
    marginTop: 50,
    marginLeft: 10,
  },

  buttonsText: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
