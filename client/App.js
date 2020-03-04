import React from "react";
import FormConnect from "./components/FormConnect";
import axios from "axios";

export default class App extends React.Component {
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
        console.log('res:', res.status);
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
      <FormConnect
        hundleSubmit={this.hundleSubmit}
        hundleChangeName={this.hundleChangeName}
        hundleChangeTel={this.hundleChangeTel}
        hundleChangeEmail={this.hundleChangeEmail}
        hundleChangePassword={this.hundleChangePassword}
        name={this.state.name}
        tel={this.state.tel}
        email={this.state.email}
        password={this.state.password}
      />
    );
  }
}
  