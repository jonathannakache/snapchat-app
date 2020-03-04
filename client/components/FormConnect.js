import React, { Component } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

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
        <TextInput
          name="name"
          style={styles.inputStyle}
          placeholder="Address"
          maxLength={60}
          onChangeText={hundleChangeName}
          value={name}
        />

        <TextInput
          name="tel"
          style={styles.inputStyle}
          placeholder="tel"
          maxLength={60}
          onChangeText={hundleChangeTel}
          value={tel}
        />

        <TextInput
          name="email"
          style={styles.inputStyle}
          placeholder="email"
          maxLength={60}
          onChangeText={hundleChangeEmail}
          value={email}
        />

        <TextInput
          name="password"
          style={styles.inputStyle}
          placeholder="password"
          maxLength={60}
          onChangeText={hundleChangePassword}
          value={password}
        />
        <Button style={styles.button} onPress={hundleSubmit} title="Submit"></Button>
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
    backgroundColor:'#4C6FE5',
    maxHeight: 400
  },
  inputStyle: {
    minHeight: 80,
    width: 200,
    backgroundColor: "white",
    margin: 1,
    padding: 20,
    alignSelf: "center",
    borderColor: "white",
    borderWidth: 1
  },
  button:{
    // backgroundColor:'#4C6FE5'
    minHeight: 80,
    width: 200,
    backgroundColor: "white",
    margin: 1,
    padding: 20,
    alignSelf: "center",
    borderColor: "white",
    borderWidth: 1
  }
});
