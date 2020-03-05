import React, { Component } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Text,
  TouchableOpacity
} from "react-native";
import axios from "axios";

export class FormConnect extends Component {
  state = {
    name: "",
    tel: "",
    email: "",
    password: ""
  };

  hundleSubmit = async event => {
    event.preventDefault();
    await axios
      .post("http://localhost:5000/sendMail", {
        name: this.state.name,
        tel: this.state.tel,
        email: this.state.email
      })
      .then(res => {
        console.log("res:", res.status);
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({
      name: "",
      tel: "",
      email: "",
      password: ""
    });
    this.props.navigation.navigate("SendPics");
  };

  hundleChangeName = event => {
    this.setState({
      name: event
    });
    console.log("name:", event);
  };
  hundleChangeTel = event => {
    this.setState({
      tel: event
    });
    console.log("tel:", event);
  };
  hundleChangeEmail = event => {
    this.setState({
      email: event
    });
    console.log("email:", event);
  };
  hundleChangePassword = event => {
    this.setState({
      password: event
    });
    console.log("password:", event);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Snapchat</Text>
        <TextInput
          name="name"
          style={styles.inputStyle}
          placeholder="Nom"
          maxLength={60}
          onChangeText={this.hundleChangeName}
          value={this.state.name}
        />

        <TextInput
          name="tel"
          style={styles.inputStyle}
          placeholder="Telephone"
          maxLength={60}
          onChangeText={this.hundleChangeTel}
          value={this.state.tel}
        />

        <TextInput
          name="email"
          style={styles.inputStyle}
          placeholder="Email"
          maxLength={60}
          onChangeText={this.hundleChangeEmail}
          value={this.state.email}
        />

        <TextInput
          name="password"
          style={styles.inputStyle}
          placeholder="Mot de passe"
          maxLength={60}
          onChangeText={this.hundleChangePassword}
          value={this.state.password}
        />

        <Button title="Submit" onPress={this.hundleSubmit} />
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
    borderRadius: 6
  },
  title: {
    fontSize: 30,
    marginBottom: 40,
    color: "white",
    fontWeight: "bold"
  }
});
