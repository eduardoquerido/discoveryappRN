import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


function HomeScreen({ navigation: { navigate } }) {
  const navigation = useNavigation();

  return (

      <View style={styles.titleView}>
        <Text style={styles.titulo}>
          Listagem de Países
        </Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d3dff',
  },

  row:{
    // https://reactnative.dev/docs/layout-props
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  titleView:{
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:15,
  },

  titulo: {
    color: '#DAD8D8',
    fontSize: 30,
    fontFamily: 'monospace',
  },

  input:{
    backgroundColor: 'white',
    fontSize:15,
    borderRadius:5,
    marginTop:20,
    marginBottom:20,
    marginRight:30,
    marginLeft:30,
  },

  carrosel:{
    alignItems:'center', 
    justifyContent:'center',
  },

  carroselView:{
    height:150,  
  },

  carroselView1:{
    height:100,  
  },

  carroselView2:{
    height:180,  
  },

  subtitulo: {
    color: '#DAD8D8',
    fontSize: 25,
    fontFamily: 'monospace',
    marginLeft:15,
    marginTop:10,
    marginBottom:15,
  },

  imgButton:{
    width: 100, 
    height: 100,
  },

  img:{
    width: 100, 
    height:150,
  },

  imgSpecial:{
    width: 130, 
    height: 180,
  },
  
});

export default HomeScreen;
