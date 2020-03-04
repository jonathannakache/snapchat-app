import React, { Component } from "react";
import { View, TextInput, StyleSheet, Text, Button } from "react-native";

export class FormConnect extends Component {
  render() {
    const {
      hundleSubmit,
      hundleChangeName,
      hundleChangeTel,
      hundleChangeEmail,
      hundleChangePassword,
      name,
      email,
      tel,
      password
    } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>SNAPCHAT APP</Text>
        <TextInput
          name="name"
          style={styles.inputStyle}
          placeholder="Nom"
          maxLength={60}
          onChangeText={hundleChangeName}
          value={name}
        />

        <TextInput
          name="tel"
          style={styles.inputStyle}
          placeholder="Telephone"
          maxLength={60}
          onChangeText={hundleChangeTel}
          value={tel}
        />

        <TextInput
          name="email"
          style={styles.inputStyle}
          placeholder="Email"
          maxLength={60}
          onChangeText={hundleChangeEmail}
          value={email}
        />

        <TextInput
          name="password"
          style={styles.inputStyle}
          placeholder="Mot de passe"
          maxLength={60}
          onChangeText={hundleChangePassword}
          value={password}
        />
        <View style={styles.button}>
          <Button onPress={hundleSubmit} title="Submit"></Button>
        </View>
      </View>
    );
  }
}

export default FormConnect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4C6FE5"
  },
  inputStyle: {
    minHeight: 60,
    width: 200,
    borderRadius: 12,
    backgroundColor: "white",
    margin: 5,
    color: "#4C6FE5",
    padding: 20,
    alignSelf: "center",
    borderColor: "white",
    borderWidth: 1
  },
  button: {
    backgroundColor: "#4C6FE5", 
    width: 200,
    backgroundColor: "white",
    marginTop: 40,
    padding: 1,
    alignSelf: "center",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 6,
  },
  title: {
    fontSize: 30,
    marginBottom: 40,
    color: "white",
    fontWeight: "bold"
  }
});
