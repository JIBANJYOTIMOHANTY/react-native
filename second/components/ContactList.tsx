import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uId: 1,
            name: 'John Doe',
            status: "Human",
            imageUrl: 'https://images.pexels.com/photos/29893437/pexels-photo-29893437/free-photo-of-charming-historical-streets-of-brno-czechia.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            uId: 2,
            name: 'Hialin Darzis',
            status: "People of Russia",
            imageUrl: 'https://images.pexels.com/photos/29787238/pexels-photo-29787238/free-photo-of-stylish-male-model-in-black-fashion-gear.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        },
        {
            uId: 3,
            name: 'Alex Hails',
            status: "Alien",
            imageUrl: 'https://images.pexels.com/photos/16075230/pexels-photo-16075230/free-photo-of-a-man-sitting-in-a-car.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        },
        {
            uId: 4,
            name: 'Travis Head',
            status: "Dangerous",
            imageUrl: 'https://images.pexels.com/photos/29875437/pexels-photo-29875437/free-photo-of-two-women-enjoying-winter-outdoors-with-luggage-cart.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        },
    ]
    return (
        <View>
            <Text style={styles.headingText}>ContactList</Text>
            <ScrollView style={styles.container} scrollEnabled={false}>
                {contacts.map(({ uId, name, status, imageUrl }) => (
                    <View key={uId} style={styles.card}>
                        <Image
                            source={{
                                uri: imageUrl
                            }}
                            style={styles.userImage}
                        />
                        <View>

                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.userStatus}>{status}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom : 4,
        backgroundColor : 'green',
        borderRadius : 30,
        
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color: 'white'
    },
    container: {
        paddingHorizontal: 16,
    },
    userName: {
        fontWeight : '600',
        color: 'white',
        fontSize: 18,
    },
    userStatus: {
        color: 'white',
        fontSize: 18
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight : 12
    }
})