import React from "react";
import FormConnect from "./components/FormConnect";

export default class App extends React.Component {
  state = {
    name: "",
    tel: "",
    email: "",
    password: ""
  };

  hundleSubmit = event => {
    event.preventDefault();

    this.setState({
      name: "",
      tel: "",
      email: "",
      password: ""
    });

    console.log("name : ", this.state.name);
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
