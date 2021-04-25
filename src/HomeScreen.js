import React, { Fragment } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: null,
      dataSource: [],
    };
  }

  componentDidMount() {
    return fetch('https://restcountries.eu/rest/v2/all')
     .then ( (response) => response.json() )
     .then ( (responseJson) =>{
       this.setState({
         isLoading: false,
         dataSource: responseJson,
       })
     })
    .catch((error) => {
      console.log(error)
     });
  }
  
  render() {
    if (this.state.isLoading){
      return(
        <View style={style.container}>
          <ActivityIndicator />
        </View>
      )
    } else{
      let countries = this.state.dataSource
      return(
        <View style={styles.container}>
          <Text style={styles.titulo}>
            Listagem de Países
          </Text>
          <ScrollView>{countries.map(
            function(country){
              return (
                <View>
                  <Text style={styles.subtitulo}>{country.name}</Text>
                  <Text style={styles.subtitulo}>{country.alpha2Code}</Text>
                </View>
              )
            }
          )}</ScrollView>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d3dff',
  },

  item: {
    flex: 1,
    alignSelf: 'stretch',
    margin: 10,
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

