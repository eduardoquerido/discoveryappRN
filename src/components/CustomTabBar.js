import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

const CustomTabBar = () => {
    const navigation = useNavigation();
    const signOut = () => {
        AsyncStorage.removeItem('user').then(() => {
            navigation.reset({
                routes: [{ name: 'Login' }],
              });
        });
    }

    return (
        <View style={styles.tabWrapper}>
            <Text style={styles.tabItem}>Home</Text>
            <Text onPress={()=> navigation.push('ItemsList')} style={styles.tabItem}>Anotações</Text>
            <Text onPress={signOut} style={styles.tabItem}>Sair</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        tabWrapper: {
            flexDirection: "row",
        },
        tabItem: {
            marginRight: 10,
            marginVertical: 10,
            fontSize: 18
        }
    }
)

export default CustomTabBar;