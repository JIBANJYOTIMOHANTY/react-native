import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type DetailsProp = NativeStackScreenProps<RootStackParamList, 'Details'>


export default function Details({ route }: DetailsProp) {
    const {productId} = route.params
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    return (
        <View style = {styles.container}>
            <Text>Details : {productId}</Text>
            <Button
            title='Go To Home'
            onPress={() => navigation.goBack()}
            />
            <Button
            title='Go To First Screen'
            onPress={() => navigation.popToTop()}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    smallText : {
        color : 'black'
    }
})