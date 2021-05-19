import React, { useEffect, useState} from 'react'
import { Button, ScrollView, Text, View } from 'react-native';
import firebase from '../database/firebase';
import { ListItem, Avatar } from 'react-native-elements';


const ItemsList = (props) => {

    const [state, setState] = useState([]);

    useEffect(() => {
        firebase.db.collection('anotations').onSnapshot(querySnapshot => {
            // Lista de Items:
            const items = [];

            querySnapshot.docs.forEach(doc => {

                // Constante que recebe documentos:
                const { title, name, description} = doc.data()
                items.push({
                    id: doc.id,
                    title,
                    name,
                    description
                })
            });

            //Guardar o estado:
            setState(items)
        })
    }, [])

    return (
        <ScrollView>
            <Button title="Nova Anotação" onPress={() => props.navigation.navigate('CreateItem')}/>

            {
                state.map(item => {
                    return(
                        <ListItem key={item.id} bottomDivider onPress={() => {
                            props.navigation.navigate('ItemDetail', {
                                itemId: item.id
                            })
                        }}>
                            <ListItem.Chevron/>
                            <Avatar 
                                source={{
                                    uri: 
                                        'https://reactnativeelements.com/img/avatar/avatar--icon.jpg',
                                }}
                                rounded
                            />
                            <ListItem.Content>
                                <ListItem.Title>{item.title}</ListItem.Title>
                                <ListItem.Subtitle>{item.name}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    )
                })
            }
        </ScrollView>
    )
}

export default ItemsList
