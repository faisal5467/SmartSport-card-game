// MenuScreen.js
import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image } from 'react-native';

const MenuScreen = ({ navigation }) => {
  const goToSettings = () => {
    navigation.navigate('SettingsScreen');
  };

  const startGame = () => {
    navigation.navigate('GameScreen');
  };

  return (
    <ImageBackground source={require('../assets/main_bg.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.gameName}>Smart Sport</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={goToSettings} style={styles.iconButton}>
            <Image source={require('../assets/setting.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={startGame} style={styles.iconButton}>
            <Image source={require('../assets/play.png')} style={[styles.icon, styles.largeIcon]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.iconButton}>
            <Image source={require('../assets/staricon.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameName: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconButton: {
    marginHorizontal:20,
    justifyContent:'center'
  },
  icon: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  largeIcon: {
    width: 80,
    height: 80,
  },
});

export default MenuScreen;
