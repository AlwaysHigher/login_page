import React, { Component } from 'react';
import {
  ToolbarAndroid,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import EditView from '../components/EditView';
import LoginButton from '../components/LoginButton';
import LoginSuccess from '../ui/LoginSuccess';
import NetUitl from '../components/NetUtil';
export default class LoginActivity extends Component {
  constructor(props) {
    super(props);
    this.userName = "";
    this.password = "";
  }

  render() {
      return (

    <View style={LoginStyles.loginview}>
     <View   style={{flexDirection: 'row',height:100,marginTop:1,
        justifyContent: 'center',
        alignItems: 'flex-start',}}>
       <Image source={require('../image/icon.png')}/>
     </View>
     <View style={{marginTop:80}}>
       <EditView  name='User Name' onChangeText={(text) => {
            this.userName = text;
        }}/>
       <EditView name='Password' onChangeText={(text) => {
            this.password = text;
        }}/>
        <LoginButton name='Login' onPressCallback={this.onPressCallback}/>
        <Text style={{color:"#4A90E2",textAlign:'center',marginTop:10}} >Forgot Password?</Text>
      </View>
     </View>
   )
  }


  onPressCallback = () => {
    let formData = new FormData();
    formData.append("loginName",this.userName);
    formData.append("pwd",this.password);
    let url = "http://localhost:8080/loginApp";
    NetUitl.postJson(url,formData,(responseText) => {
          alert(responseText);
          this.onLoginSuccess();
    })


  };

  //Navigate to second page
    onLoginSuccess(){
     const { navigator } = this.props;
     if (navigator) {
       navigator.push({
         name : 'LoginSuccess',
         component : LoginSuccess,
       });
     }
   }

}

class loginLineView extends Component {
  render() {
    return (
        <Text >
            Can not find account.\
          </Text>
    );
  }
}

const LoginStyles = StyleSheet.create({
  loginview: {
    flex: 1,
    padding: 30,
      backgroundColor: '#ffffff',
  },
});