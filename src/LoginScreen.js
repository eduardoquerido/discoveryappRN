import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import firebase from '../database/firebase';

function LoginScreen({ navigation: { navigate } }) {
    // Login Normal
    const [email, setEmail] = useState('');
    const [password, setPassword]= useState('');
    const [error, setError] = useState('');

    // Login com Google APO
    const [loggedIn, setloggedIn] = useState(false);
    const [userInfo, setuserInfo] = useState([]);

    useEffect(() => {
      AsyncStorage.getItem('user').then((user) => {
        if (user !== null){
        // var parsedUser = JSON.parse(user)
        navigate("MainTab")
        }
      });
    },[]
    );

    const signIn = () => {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        var resData = firebase.auth().currentUser.toJSON()
        AsyncStorage.setItem('user', JSON.stringify(resData)).then(() => {
          navigate('MainTab')
        });
      })
      .catch((error) => {
        setError(error.message);
      });
    }

  return (
    <View style={styles.container}>

      <View style={styles.titleView}>
        <Image
          style={styles.image}
          source={require('../assets/img/worldlogo.png')}
        />
      </View>

      <View style={styles.titleView}>
        <Text style={styles.titulo}>
          Discovery World
        </Text>
      </View>

      <TextInput
        placeholder="E-mail"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />

      {
          error ?
              <Text style={
                {
                  color:'red',
                  textAlign: 'center',
                  fontSize: 18
                }
              }>{error}</Text>
              : null
      }

      <View style={styles.button}>
        <Button
          title="Logar-se"
          color='blue'
          onPress={() => signIn()}
        />
      </View>


      <TouchableOpacity onPress={()=> navigate('CreateUser')}>
          <Text
           style={styles.subInput}
          >
          Não possui conta?  Inscreva-se</Text>
      </TouchableOpacity>      

    </View>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000bd',
  },

  titleView:{
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    height: 230,
    width: 220,
    justifyContent: "center"
  },

  titulo: {
    color: '#DAD8D8',
    fontSize: 28,
    fontFamily: 'monospace',
    fontStyle: 'normal',
    margin: 20
  },

  subInput: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#DAD8D8',
    fontSize: 12,
    fontFamily: 'monospace',
    fontStyle: 'normal',
    textAlign: 'center'
  },

  input:{
    backgroundColor: 'lightblue',
    borderRadius:10,
    marginTop:15,
    marginRight:30,
    marginLeft:30,
    padding: 8
  },
  
  button:{
    alignItems:'center',
    justifyContent:'center',
    margin: 20,
    borderRadius: 15
  },
});

export default LoginScreen;