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
import {Card} from 'react-native-elements'
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
            Lista de Países
          </Text>
          <ScrollView style={styles.container2}>{countries.map(
            function(country){
              return (
                <View style={styles.inputGroup}>
                  <Text style={styles.subtitulo}>País: {country.name}</Text>
                  <Text style={styles.subtitulo}>Capital: {country.capital}</Text>
                  <Text style={styles.subtitulo}>Região: {country.region}</Text>
                  <Text style={styles.subtitulo}>Sub-Região: {country.subregion}</Text>
                  <Text style={styles.subtitulo}>Língua: {country.languages[0]['nativeName']}</Text>
                  <Text style={styles.subtitulo}>Código Binário: {country.alpha2Code}</Text>
                  <Text style={styles.subtitulo}>Código Telefônico: {country.callingCodes[0]}</Text>
                  <Text style={styles.subtitulo}>População: {country.population}</Text>
                  <Text style={styles.subtitulo}>Denominação: {country.demonym}</Text>
                  <Text style={styles.subtitulo}>Latitude/Longitude: {country.latlng[0]}/{country.latlng[1]}</Text>
                  <Text style={styles.subtitulo}>Área: {country.area}</Text>
                  <Text style={styles.subtitulo}>Moeda: {country.currencies[0]['name']} ({country.currencies[0]['symbol']})</Text>
                  <Text style={styles.subtitulo}>Coeficiente GINI: {country.gini}</Text>
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

  inputGroup: {
      flex: 1,
      padding:0,
      marginTop: 15,
      marginBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc'
  },

  container2: {
    flex: 1,
    padding: 25,
    backgroundColor: '#3d3dff',
  },

  container: {
    flex: 1,
    padding: 35,
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
    fontSize: 12,
    fontFamily: 'monospace',
    marginLeft:10,
    marginTop:3,
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

