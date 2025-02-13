import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('Hello, welcome to the app!');

  const handleButtonClick = (buttonName: string) => {
    setMessage(`You clicked the ${buttonName} button!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{message}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Button 1" onPress={() => handleButtonClick('Button 1')} />
        <Button title="Button 2" onPress={() => handleButtonClick('Button 2')} />
        <Button title="Button 3" onPress={() => handleButtonClick('Button 3')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
});

export default App;

//nigger