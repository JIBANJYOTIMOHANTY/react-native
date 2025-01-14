import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


function App(): React.JSX.Element {
  const [randromBackgroundColor, setRandomBackgroundColor] = useState('#ffffff')

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF"
    let color = '#'

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)]
    }
    setRandomBackgroundColor(color)
  }

  return (
    <>
      <StatusBar backgroundColor={randromBackgroundColor} />
      <View style={[styles.container, { backgroundColor: randromBackgroundColor }]}>
        <TouchableOpacity onPress={() => generateColor()}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40
  },

  actionBtnTxt: {
    fontSize: 24,
    color: '#ffffff',
    textTransform: 'uppercase'
  }

});

export default App;
