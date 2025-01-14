import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
    return (
        <View>
            <Text style={styles.headingText}>FancyCards</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={{
                        uri: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtNDIyLTA3Ni14LmpwZw.jpg',
                    }}
                    style={styles.cardImage}
                />
                <View style = {styles.cardBody}>
                    <Text style={styles.cardTitle}>Jiban Jyoti Mohanty</Text>
                    <Text style={styles.cardDescription}>FullStack Developer</Text>
                    <Text style={styles.cardLabel}>Cuttack</Text>
                    <Text style={styles.cardFooter}>754112</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 8,
        color : 'white'
    },
    card: {
        width : 350,
        height : 360,
        borderRadius : 6,
        // marginVertical : 12,
        // marginHorizontal : 16
        margin: 4
    },
    cardElevated: {
        backgroundColor : 'black',
        elevation : 3,
        shadowOffset : {
            width : 1,
            height : 1
        }
    },
    cardImage: {
        height: 180,
        marginBottom : 8,
        borderTopLeftRadius : 8,
        borderTopRightRadius : 8
    },
    cardBody: {
    },
    cardTitle: {
        color: 'white',
        fontSize : 30,
        marginBottom : 6
    },
    cardLabel: {
        color: 'white',
        fontSize : 16,
        marginBottom : 6
    },
    cardDescription: {
        color: 'white',
        fontSize : 20,
        marginBottom : 4
    },
    cardFooter: {
        color: 'white',
        fontSize : 12,
    }
})