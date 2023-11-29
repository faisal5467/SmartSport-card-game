// LoadingScreen.js
import React, {useEffect} from 'react';
import { View, Text, ImageBackground, ActivityIndicator, StyleSheet } from 'react-native';

const LoadingScreen = ({navigation}) => {

    useEffect(() => {
        // Use setTimeout to navigate after three seconds
        const timer = setTimeout(() => {
          navigation.navigate('MenuScreen');
        }, 3000);
    
        // Clear the timer to avoid memory leaks
        return () => clearTimeout(timer);
      }, [navigation]);
    
  return (
    <ImageBackground source={require('../assets/main_bg.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.gameName}>Smart Sport</Text>
        <ActivityIndicator size="large" color="#fff" />
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
    fontSize: 60,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
});

export default LoadingScreen;
