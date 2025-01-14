import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink);
    }
    return (
        <View>
            <View style={styles.card}>
                <View style={[styles.card, styles.elevatedCard]}>
                    <View style={styles.headingContainer}>
                        <Text style={styles.headerText}>Blog Card</Text>
                    </View>
                    <Image
                        source = {{
                            uri: 'https://www.shutterstock.com/image-photo/calm-weather-on-sea-ocean-600nw-2212935531.jpg'
                        }}
                        style = {styles.cardImage}
                    />
                    <View style = {styles.bodyContainer}>
                        <Text numberOfLines={3}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere et, quae ipsum dicta tempora nihil adipisci, error, asperiores nemo incidunt ex quas minus! Magni recusandae est obcaecati vel beatae, placeat impedit ut aliquid doloribus alias, necessitatibus quaerat laudantium similique voluptate doloremque modi. Quidem ullam sequi quo iste iure provident nesciunt?</Text>
                    </View>
                    <View style = {styles.footerContainer}>
                        <TouchableOpacity onPress={() => openWebsite('https://www.google.com')}>
                            <Text style = {styles.socialLinks}>Google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => openWebsite('https://www.instagram.com/')}>
                            <Text style = {styles.socialLinks}>Instagram</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 8
    },
    headingContainer: {
        height : 40,
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center' 
    },
    headerText: {
        fontSize : 24,
        color : 'black',
        fontWeight : '600',
    },
    card: {
        width : 350,
        height : 380,
        borderRadius : 6,
        marginVertical : 12,
        marginHorizontal : 2,

    },
    cardImage : {
        height: 200
    },
    elevatedCard: {
        backgroundColor : 'orange',
        elevation : 3,
        shadowOffset : {
            width : 1,
            height : 1
        },
        shadowColor : '#333',
        shadowOpacity : 0.8,
        shadowRadius : 2
    },
    bodyContainer: {
        padding : 10
    },
    footerContainer: {
        padding : 8,
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        alignItems : 'center'
    },
    socialLinks: {
        fontSize : 16,
        color : '#000000',
        backgroundColor : '#fff',
        padding : 10,
        paddingVertical : 6,
        borderRadius : 10,
    }
})