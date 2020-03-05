import React, { Component } from 'react'
import {View, TouchableOpacity, TextInput, Button, StyleSheet, Text, Image} from 'react-native'
import ImagePicker from 'expo-image-picker';
import { Input } from 'react-native-elements';

export class SendPics extends Component {

    state = {
        photo: '',
      };

            //   openImagePickerAsync = async () => {
            // let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
        
            // if (permissionResult.granted === false) {
            //   alert("Permission to access camera roll is required!");
            //   return;
            // }
        
            // let pickerResult = await ImagePicker.launchImageLibraryAsync();
            // console.log(pickerResults);
            
            // this.setState({imgUri: pickerResult.uri})
            
            // }

            handleChoosePhoto = () => {
                const options = {
                  noData: true,
                };
                ImagePicker.launchImageLibrary(options, response => {
                  if (response.uri) {
                    this.setState({ photo: response });
                  }
                });
              };

    render() {

        const { photo } = this.state;

        let hours = new Date().getHours();
        let min   = new Date().getMinutes(); 

        return (
            <View>
                <TouchableOpacity onPress={this.handleChoosePhoto}>
                    <Button title='Photo' onPress={this.handleChoosePhoto}/>
                </TouchableOpacity>

                <View >
                    {/* <TextInput style={styles.texteStyle} value={hours}/>
                    <Text style={{fontSize: 25}}>:</Text>
                    <TextInput style={styles.texteStyle}  value={min}/> */}
                    <Text>{hours}{min}</Text>
                    <Image 
                    source={{ uri: photo.uri }}
                    style={{ width: 300, height: 300 }}
                    />
                </View>
            </View>
        )
    }
}

export default SendPics ;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems:'center'
    },
    texteStyle: {
        textAlign:'center',
        width: 30,
        fontSize: 25
    }
    

  });




