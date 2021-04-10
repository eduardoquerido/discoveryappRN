import React, {useState} from 'react';
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

function CreateUserScreen({ navigation: { navigate } }) {
    const [email, setEmail] = useState('');
    const [password, setPassword]= useState('');
    const [password_re, setPasswordRe]= useState('');
    const [error, setError] = useState('');

    const signUp = async()=>{
        try{
          if (password == password_re){
              const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
              navigate("Login")
              alert("Cadastro realizado!")
            } else {
              setError("Suas senhas não são iguais");
            }
        }catch(err){
            setError(err.message);
        }
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

      <View style={styles.titleView}>
        <Text style={styles.subTitulo}>
          Novo Cadastro
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

      <TextInput
        placeholder="Confirme a Senha"
        style={styles.input}
        onChangeText={setPasswordRe}
        value={password_re}
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
          title="Cadastrar"
          color='blue'
          onPress={() => signUp()}
        />
      </View>

      <TouchableOpacity onPress={()=> navigate('Login')}>
          <Text
           style={styles.subInput}
          >
          Já possui conta? Logue-se aqui</Text>
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
  },

  titulo: {
    color: '#DAD8D8',
    fontSize: 28,
    fontFamily: 'monospace',
    fontStyle: 'normal',
    margin: 10
  },

  subTitulo: {
    color: '#DAD8D8',
    fontSize: 18,
    fontFamily: 'monospace',
    fontStyle: 'normal',
    margin: 10
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
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    margin: 20,
    borderRadius: 15,
  },

});

export default CreateUserScreen;