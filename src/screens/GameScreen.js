// GameScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet } from 'react-native';

// Replace these import paths with the actual paths to your dice images
import Die1 from '../assets/dice1.png';
import Die2 from '../assets/dice2.png';
import Die3 from '../assets/dice3.png';
import Die4 from '../assets/dice4.png';
import Die5 from '../assets/dice5.png';
import Die6 from '../assets//dice6.png';
// ... Repeat for the other dice images

const GameScreen = ({ navigation }) => {

  const [playerDice, setPlayerDice] = useState([]); // Player's dice
  const [computerDice, setComputerDice] = useState([]); // Computer's dice
  const [isPlayerTurn, setIsPlayerTurn] = useState(true); // Flag to track player's turn
  const [isGameOver, setIsGameOver] = useState(false);
  const [selectedDice, setSelectedDice] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  
  // Initialize dice for the player and computer
  useEffect(() => {
    // You may want to initialize the dice arrays here based on the game mechanics
    // For simplicity, let's assume the player starts with 7 dice, and the computer with 7 as well
    setPlayerDice(Array(7).fill(0).map((_, index) => index + 1));
    setComputerDice(Array(7).fill(0).map(() => null));
  }, []);
  
// Function to handle player's move
const handlePlayerMove = (diceValue) => {
  if (isPaused) {
    return; // Do nothing if the game is paused
  }
  // If it's the player's turn and no dice is currently selected, select the dice
  if (isPlayerTurn && selectedDice === null) {
    setSelectedDice(diceValue);
  } else if (selectedDice !== null) {
    // If a dice is already selected, place it in the middle and compare with computer's dice
    compareDice(selectedDice, diceValue);
    setSelectedDice(null); // Reset selected dice
    setIsPlayerTurn(false); // Switch to computer's turn
  }
  // Implement the rest of the game mechanics
};

// Function to compare player-selected dice with computer's dice
const compareDice = (playerDiceValue, computerDiceValue) => {
  // Implement the logic to compare the dice values
  console.log(`Player selected ${playerDiceValue}, Computer has ${computerDiceValue}`);
  // Implement the rest of the comparison logic
};

  // Function to handle computer's move
const handleComputerMove = () => {
  if (isPaused) {
    return; // Do nothing if the game is paused
  }
  // Implement the logic to handle the computer's move
  // For simplicity, we'll just log the computer's move
  console.log('Computer made a move');
  // Update the computer's dice to random values (1 to 6)
  setComputerDice(computerDice.map(() => Math.floor(Math.random() * 6) + 1));
  // Implement the rest of the game mechanics
};

  // Function to handle the end of the game
  const handleGameOver = () => {
    // Implement the logic to handle the end of the game
    // For simplicity, we'll just log the game over message
    console.log('Game Over!');
    setIsGameOver(true);
  };

 
 // UI rendering based on game state
 const renderGameUI = () => {
  if (isGameOver) {
    return <Text>Game Over! Display final scores or relevant information here.</Text>;
  }
    // Implement the UI for the game based on the provided mechanics
    // For simplicity, let's just display the player's dice values
    return (
      // <View style={styles.gameContainer}>
      //   <View style={styles.playerDiceContainer}>
      //     {playerDice.map((diceValue, index) => (
      //       <TouchableOpacity
      //         key={index}
      //         style={styles.diceButton}
      //         onPress={() => handlePlayerMove(diceValue)}
      //       >
      //         <Image source={getDiceImage(diceValue)} style={styles.diceImage} />
      //       </TouchableOpacity>
      //     ))}
      //   </View>
      //   <View style={styles.computerDiceContainer}>
      //     {computerDice.map((diceValue, index) => (
      //       <View key={index} style={styles.diceButton}>
      //         {diceValue !== null ? <Image source={getDiceImage(diceValue)} style={styles.diceImage} /> : null}
      //       </View>
      //     ))}
      //   </View>
      // </View>
      <View style={styles.gameContainer}>
        <View style={styles.playerDiceContainer}>
          {playerDice.map((diceValue, index) => (
            <TouchableOpacity
              key={index}
              style={styles.diceButton}
              onPress={() => handlePlayerMove(diceValue)}
            >
              <Image source={getDiceImage(diceValue)} style={styles.diceImage} />
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.middleContainer}>
          {selectedDice !== null && (
            <TouchableOpacity style={styles.middleDiceContainer}>
              <Image source={getDiceImage(selectedDice)} style={styles.diceImage} />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.computerDiceContainer}>
          {computerDice.map((diceValue, index) => (
            <View key={index} style={styles.diceButton}>
              {diceValue !== null ? (
                <Image source={getDiceImage(diceValue)} style={styles.diceImage} />
              ) : null}
            </View>
          ))}
        </View>
      </View>
    );
  };

  // Helper function to get the correct dice image based on the dice value
  const getDiceImage = (diceValue) => {
    switch (diceValue) {
      case 1:
        return Die1;
      case 2:
        return Die2;
      case 3:
        return Die3;
      case 4:
        return Die4;
      case 5:
        return Die5;
      case 6:
        return Die6;
      // Add cases for the other dice values and corresponding images
      // ...
      default:
        return Die1; // Default to the first image for unknown values
    }
  };

  // Call the computer's move when it's the computer's turn
  useEffect(() => {
    if (!isPlayerTurn && !isGameOver) {
      handleComputerMove();
    }
  }, [isPlayerTurn, isGameOver]);


  const handlePause = () => {
    setIsPaused(true);
  };

  // Function to resume the game from pause
  const handleResume = () => {
    setIsPaused(false);
  };

  
  const handleMainMenu = () => {
    setIsPaused(false);
    navigation.navigate('MenuScreen'); // Navigate to the main menu
  };
  const handleStartOver = () => {
    setIsPaused(false);
    // Implement the logic to start the game over
    // Reset the game state, reload dice, etc.
  };

  const goToSettings = () => {
    navigation.navigate('SettingsScreen');
  };

  const startGame = () => {
    navigation.navigate('GameScreen');
  };

  
  return (

      <ImageBackground source={require('../assets/main_bg.png')} style={styles.backgroundImage}>
        <View style={styles.topBar}>
  <TouchableOpacity onPress={handlePause} style={styles.pauseButton}>
  <Image source={require('../assets/pause.png')} style={styles.largeIcon} />
  </TouchableOpacity>
</View>
{renderGameUI()}
{isPaused ? (
  <View style={styles.pauseOverlay}>
   <TouchableOpacity onPress={handleStartOver} style={styles.iconButton}>
            <Image source={require('../assets/backscreen.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleMainMenu} style={styles.iconButton}>
            <Image source={require('../assets/home.png')} style={[styles.icon, styles.icon]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {handleResume()}} style={styles.iconButton}>
            <Image source={require('../assets/resume.png')} style={styles.icon} />
          </TouchableOpacity>
  </View>
) : null}

</ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  gameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  playerDiceContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  computerDiceContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  diceButton: {
    width: 70,
    height: 50,
    backgroundColor:'gray'
    // marginVertical: 5,
  },
  diceImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },

  // 
  
  topBar: {
    position: 'absolute',
    top: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  pauseButton: {
    paddingVertical: 10,
   
  },
  largeIcon: {
    width: 50,
    height: 52,
  },
  // Styles for the pause overlay
  pauseOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexDirection:'row'
  },
  iconButton: {
    marginHorizontal:5,
    justifyContent:'center',

  },
  icon: {
    marginHorizontal:20,  
    width: 60,
    height: 60,
  },
  resumeButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  startOverButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  mainMenuButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
});

export default GameScreen;
