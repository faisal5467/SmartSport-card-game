// // // GameScreen.js
// // import React, { useState, useEffect } from 'react';
// // import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet } from 'react-native';

// // // Replace these import paths with the actual paths to your dice images
// // import Die1 from '../assets/dice1.png';
// // import Die2 from '../assets/dice2.png';
// // import Die3 from '../assets/dice3.png';
// // import Die4 from '../assets/dice4.png';
// // import Die5 from '../assets/dice5.png';
// // import Die6 from '../assets//dice6.png';
// // // ... Repeat for the other dice images

// // const GameScreen = ({ navigation }) => {
// //   const [playerDice, setPlayerDice] = useState([]); // Player's dice
// //   const [computerDice, setComputerDice] = useState([]); // Computer's dice
// //   const [isPlayerTurn, setIsPlayerTurn] = useState(true); // Flag to track player's turn
// //   const [isGameOver, setIsGameOver] = useState(false);

// //   // Initialize dice for the player and computer
// //   useEffect(() => {
// //     // You may want to initialize the dice arrays here based on the game mechanics
// //     // For simplicity, let's assume the player starts with 7 dice, and the computer with 7 as well
// //     setPlayerDice(Array(7).fill(0).map((_, index) => index + 1));
// //     setComputerDice(Array(7).fill(0).map(() => null));
// //   }, []);

// //   // Function to handle player's move
// //   const handlePlayerMove = (diceValue) => {
// //     // Implement the logic to handle the player's move
// //     // For simplicity, we'll just log the selected dice value
// //     console.log(`Player selected dice with value: ${diceValue}`);
// //     // Implement the rest of the game mechanics
// //   };

// //   // Function to handle computer's move
// //   const handleComputerMove = () => {
// //     // Implement the logic to handle the computer's move
// //     // For simplicity, we'll just log the computer's move
// //     console.log('Computer made a move');
// //     // Implement the rest of the game mechanics
// //   };

// //   // Function to handle the end of the game
// //   const handleGameOver = () => {
// //     // Implement the logic to handle the end of the game
// //     // For simplicity, we'll just log the game over message
// //     console.log('Game Over!');
// //     setIsGameOver(true);
// //   };

// //   // UI rendering based on game state
// //   const renderGameUI = () => {
// //     if (isGameOver) {
// //       return <Text>Game Over! Display final scores or relevant information here.</Text>;
// //     }

// //     // Implement the UI for the game based on the provided mechanics
// //     // For simplicity, let's just display the player's dice values
// //     return (
// //       <View style={styles.gameContainer}>
// //         <View style={styles.playerDiceContainer}>
// //           {playerDice.map((diceValue, index) => (
// //             <TouchableOpacity
// //               key={index}
// //               style={styles.diceButton}
// //               onPress={() => handlePlayerMove(diceValue)}
// //             >
// //               <Image source={getDiceImage(diceValue)} style={styles.diceImage} />
// //             </TouchableOpacity>
// //           ))}
// //         </View>
// //         <View style={styles.computerDiceContainer}>
// //           {computerDice.map((diceValue, index) => (
// //             <View key={index} style={styles.diceButton}>
// //               {diceValue !== null ? <Image source={getDiceImage(diceValue)} style={styles.diceImage} /> : null}
// //             </View>
// //           ))}
// //         </View>
// //       </View>
// //     );
// //   };

// //   // Helper function to get the correct dice image based on the dice value
// //   const getDiceImage = (diceValue) => {
// //     switch (diceValue) {
// //       case 1:
// //         return Die1;
// //       case 2:
// //         return Die2;
// //       case 3:
// //         return Die3;
// //       case 4:
// //         return Die4;
// //       case 5:
// //         return Die5;
// //       case 6:
// //         return Die6;
// //       // Add cases for the other dice values and corresponding images
// //       // ...
// //       default:
// //         return Die1; // Default to the first image for unknown values
// //     }
// //   };

// //   // Call the computer's move when it's the computer's turn
// //   useEffect(() => {
// //     if (!isPlayerTurn && !isGameOver) {
// //       handleComputerMove();
// //     }
// //   }, [isPlayerTurn, isGameOver]);

// //   return (
// //     <ImageBackground source={require('../assets/main_bg.png')} style={styles.backgroundImage}>
// //       {renderGameUI()}
// //     </ImageBackground>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   backgroundImage: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   gameContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     paddingHorizontal: 20,
// //   },
// //   playerDiceContainer: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   computerDiceContainer: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   diceButton: {
// //     width: 80,
// //     height: 80,
// //     marginVertical: 5,
// //   },
// //   diceImage: {
// //     width: '100%',
// //     height: '100%',
// //     resizeMode: 'contain',
// //   },
// // });

// // export default GameScreen;


// ////////////////////////////////////////////////////////////////////with computer dice

// // GameScreen.js
// import React, { useState, useEffect } from 'react';
// import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';

// const GameScreen = ({ navigation }) => {
//   const [playerDice, setPlayerDice] = useState([]); // Player's dice
//   const [computerDice, setComputerDice] = useState([]); // Computer's dice
//   const [isPlayerTurn, setIsPlayerTurn] = useState(true); // Flag to track player's turn
//   const [isGameOver, setIsGameOver] = useState(false);

//   // Initialize dice for the player and computer
//   useEffect(() => {
//     // You may want to initialize the dice arrays here based on the game mechanics
//     // For simplicity, let's assume the player starts with 7 dice, and the computer with 7 as well
//     setPlayerDice(Array(7).fill(0).map((_, index) => index + 1));
//     setComputerDice(Array(7).fill(0).map(() => null));
//   }, []);

//   // Function to handle player's move
//   const handlePlayerMove = (diceValue) => {
//     // Implement the logic to handle the player's move
//     // For simplicity, we'll just log the selected dice value
//     console.log(`Player selected dice with value: ${diceValue}`);
//     // Implement the rest of the game mechanics
//   };

//   // Function to handle computer's move
//   const handleComputerMove = () => {
//     // Implement the logic to handle the computer's move
//     // For simplicity, we'll just log the computer's move
//     console.log('Computer made a move');
//     // Implement the rest of the game mechanics
//   };

//   // Function to handle the end of the game
//   const handleGameOver = () => {
//     // Implement the logic to handle the end of the game
//     // For simplicity, we'll just log the game over message
//     console.log('Game Over!');
//     setIsGameOver(true);
//   };

//   // UI rendering based on game state
//   const renderGameUI = () => {
//     if (isGameOver) {
//       return <Text>Game Over! Display final scores or relevant information here.</Text>;
//     }

//     // Implement the UI for the game based on the provided mechanics
//     // For simplicity, let's just display the player's dice values
//     return (
//       <View style={styles.gameContainer}>
//         <View style={styles.playerDiceContainer}>
//           {playerDice.map((diceValue, index) => (
//             <TouchableOpacity
//               key={index}
//               style={styles.diceButton}
//               onPress={() => handlePlayerMove(diceValue)}
//             >
//               <Text>{diceValue}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//         <View style={styles.computerDiceContainer}>
//           {computerDice.map((diceValue, index) => (
//             <View key={index} style={styles.diceButton}>
//               {diceValue !== null ? <Text>?</Text> : null}
//             </View>
//           ))}
//         </View>
//       </View>
//     );
//   };

//   // Call the computer's move when it's the computer's turn
//   useEffect(() => {
//     if (!isPlayerTurn && !isGameOver) {
//       handleComputerMove();
//     }
//   }, [isPlayerTurn, isGameOver]);

//   return (
//     <ImageBackground source={require('../assets/main_bg.png')} style={styles.backgroundImage}>
      
//       {renderGameUI()}
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   gameContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//   },
//   playerDiceContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   computerDiceContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   diceButton: {
//     width: 50,
//     height: 50,
//     borderWidth: 1,
//     borderColor: 'black',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginVertical: 5,
//   },
// });

// export default GameScreen;
