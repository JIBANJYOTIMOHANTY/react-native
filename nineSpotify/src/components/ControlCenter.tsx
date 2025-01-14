import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from '@react-native-vector-icons/material-icons';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
const ControlCenter = () => {
    const playBackState = usePlaybackState();
    const playbackState = playBackState.state; // Extract the state property

    const skipToNext = async () => {
        await TrackPlayer.skipToNext();
    }

    const skipToPrevious = async () => {
        await TrackPlayer.skipToPrevious();
    }

    const togglePlayback = async (playback: State) => {
        const currentTrack = await TrackPlayer.getCurrentTrack();

        if (currentTrack !== null) {
            if (playback === State.Paused || playback === State.Ready)
                await TrackPlayer.play();
            else
                await TrackPlayer.pause();
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={skipToPrevious}>
                <Icon style={styles.icon} name="skip-previous" size={40} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => playbackState !== undefined && togglePlayback(playbackState)}>
                <Icon style={styles.icon} name={playbackState === State.Playing ? "pause" : "play-arrow"} size={75} />
            </TouchableOpacity>
            <TouchableOpacity onPress={skipToNext}>
                <Icon style={styles.icon} name="skip-next" size={40} />
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        marginBottom: 56,

        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        color: '#FFFFFF',
    },
    playButton: {
        marginHorizontal: 24,
    },
})

export default ControlCenter
