import React, { Component } from 'react'
import {View, TouchableOpacity, TextInput} from 'react-native'
import * as ImagePicker from 'expo-image-picker';

export class SendPics extends Component {
    render() {
        let openImagePickerAsync = async () => {
            let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
        
            if (permissionResult.granted === false) {
              alert("Permission to access camera roll is required!");
              return;
            }
        
            let pickerResult = await ImagePicker.launchImageLibraryAsync();
            console.log(pickerResult);
          }
          
        return (
            <View>
                <TouchableOpacity onPress={openImagePickerAsync}>
                    <Text>Take a picture</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default SendPics
