import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PropsWithChildren } from 'react'
import Icon from '@react-native-vector-icons/fontawesome'

type IconsProps = PropsWithChildren<{
    name : string
}>

const Icons = ({name} : IconsProps):JSX.Element => {
  switch (name) {
    case 'circle' : 
        return <Icon name="circle-thin" size = {38} color = "#F7CD2E" />
        break;
    case 'cross' : 
        return <Icon name="times" size = {38} color = "#38CC77" />
        break;
    
    default : 
        return <Icon name='pencil' size={38} color='#0D0D0D'/>
  }
}

const styles = StyleSheet.create({})

export default Icons