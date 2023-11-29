import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Switch,
  TouchableOpacity,
  Animated,
  Vibration,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import Sound from 'react-native-sound';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingsScreen = ({navigation}) => {
  // const [isSoundOn, setIsSoundOn] = useState(true);
  // const [isVibrationOn, setIsVibrationOn] = useState(true);

  const [selectedLanguage, setSelectedLanguage] = useState(''); // Set your default language here
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [isVibrationOn, setVibrationOn] = useState(false);

  const soundAnimation = useRef(new Animated.Value(isSoundOn ? 0 : 1)).current;
  const vibrationAnimation = useRef(
    new Animated.Value(isVibrationOn ? 0 : 1),
  ).current;

  const sound = new Sound('sound.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log(
      'duration in seconds: ' +
        sound.getDuration() +
        'number of channels: ' +
        sound.getNumberOfChannels(),
    );
  });

  const toggleSound = async () => {
    // Toggle the sound state
    const newSoundState = !isSoundOn;
    setIsSoundOn(newSoundState);
  
    // Save the updated sound state to AsyncStorage
    try {
      await AsyncStorage.setItem('isSoundOn', JSON.stringify(newSoundState));
    } catch (error) {
      console.error('Error saving sound state: ', error);
    }
  
    Animated.timing(soundAnimation, {
      toValue: newSoundState ? 0 : 1, // Change this line
      duration: 300,
      useNativeDriver: true,
    }).start();
  
    // Play or stop the sound based on the updated isSoundOn state
    if (newSoundState) {
      sound.play();
    } else {
      sound.stop();
    }
  };
  

  useEffect(() => {
    const fetchSoundState = async () => {
      try {
        // Retrieve the sound state from AsyncStorage
        const storedSoundState = await AsyncStorage.getItem('isSoundOn');
        const vibrationState = await AsyncStorage.getItem('isVibrationOn');
        setIsSoundOn(storedSoundState !== null ? JSON.parse(storedSoundState) : true);
        setVibrationOn(vibrationState ? JSON.parse(vibrationState) : true);
      } catch (error) {
        console.error('Error fetching sound state: ', error);
      }
    };
  
    fetchSoundState();
  }, []);
  
 
const toggleVibration = async () => {
  // Toggle the vibration state
  setVibrationOn((prevVibration) => !prevVibration);

  // Save the updated vibration state to AsyncStorage
  try {
    await AsyncStorage.setItem('isVibrationOn', JSON.stringify(!isVibrationOn));
  } catch (error) {
    console.error('Error saving vibration state: ', error);
  }

  Animated.timing(vibrationAnimation, {
    toValue: isVibrationOn ? 1 : 0,
    duration: 300,
    useNativeDriver: false,
  }).start();
};

const handleButtonPress = () => {
  // Vibrate if vibration is enabled
  if (isVibrationOn) {
    Vibration.vibrate();
  }

  // Your additional logic for button press
};

  // ///////////////////////////////////////////////////

  const handleBackToMenu = () => {
    navigation.navigate('MenuScreen'); // Navigate back to the main menu
  };

  const handleToggleSound = () => {
    // Toggle sound and update state
    setIsSoundOn(!isSoundOn);
    // Add logic to stop or play sound as needed
  };

  const handleToggleVibration = () => {
    // Toggle vibration and update state
    setIsVibrationOn(!isVibrationOn);
    // Add logic to stop or play vibration as needed
  };

  return (
    <ImageBackground
      source={require('../assets/main_bg.png')}
      style={styles.backgroundImage}>
      {/* Back Button */}
      <TouchableOpacity onPress={handleBackToMenu} style={styles.backButton}>
        <Image
          source={require('../assets/backscreen.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      <View style={styles.container}>
        <Text style={styles.gameName}>SETTINGS</Text>
        <View style={styles.buttonContainer}>
          {/* Sound */}
          <TouchableOpacity
            // onPress={handleToggleSound}
            onPress={toggleSound}

            style={styles.iconButton}>
            <Image
              source={require('../assets/sound.png')}
              style={styles.icon}
            />
            {!isSoundOn && (
              <Image
                source={require('../assets/red-cross.png')}
                style={styles.crossIcon}
              />
            )}
          </TouchableOpacity>

          {/* Vibration */}
          <TouchableOpacity
            // onPress={handleToggleVibration}
            onPress={() => {
              toggleVibration();
              handleButtonPress();
            }}
            style={styles.iconButton}>
            <Image
              source={require('../assets/vibrate.png')}
              style={styles.icon}
            />
            {!isVibrationOn && (
              <Image
                source={require('../assets/red-cross.png')}
                style={styles.crossIcon}
              />
            )}
          </TouchableOpacity>

          {/* Language */}
          <View style={styles.iconButton}>
            <Image source={require('../assets/flag.png')} style={styles.icon} />
            {/* Add your language selection component (e.g., a dropdown or modal) here */}
          </View>
        </View>
      </View>
    </ImageBackground>
  );

  // ... Rest of your code
};

export default SettingsScreen;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconButton: {
    marginHorizontal: 20,
    position: 'relative',
  },
  icon: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  crossIcon: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 15,
    right: 20,
    tintColor: 'red',
  },

  gameName: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    left: 20,
  },
  backIcon: {
    width: 50,
    height: 52,
    marginRight: 10,
    marginVertical: 10,
  },
  backLabel: {
    fontSize: 18,
    color: '#fff', // Adjust color as needed
  },
});
