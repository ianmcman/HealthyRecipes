import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';

const bruschettaPic = require('./images/bruschetta.png');
const Stack = createNativeStackNavigator();

export default function App() {
  // Splashscreen logic
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);

  let [text, setText] = useState('');
  

  function HomeScreen ({ navigation }) {
    return (
      <View style={styles.homeScreen}>
        <Text style={styles.title}>Bruschetta Recipe</Text>
        <View>
          <Image source={bruschettaPic}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textBox}
            placeholder='Enter the Number of Servings'
            onChangeText={newText => setText(newText)}
            value={text}
            keyboardType='default'
            />  
        </View>
        <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate('detailScreen')}>
          <Text style={styles.buttonText}>View Recipe</Text>
        </Pressable>
      </View>
    );
  }
  
  function DetailsScreen() {
    return (
      <View style={styles.detailsScreen}>
        <Text style={styles.title}>Bruschetta</Text>
        <View style={styles.ingredientsView}>
        <Text style={styles.ingredientsTitle}>Ingredients</Text>
        <Text style={styles.ingredient}>{text*4} plum tomatoes</Text>
        <Text style={styles.ingredient}>{text*6} basil leaves</Text>
        <Text style={styles.ingredient}>{text*3} garlic cloves, chopped</Text>
        <Text style={styles.ingredient}>{text*3} TB olive oil</Text>
        <Text></Text>
        <Text style={styles.ingredientsTitle}>Directions</Text>
        <Text style={styles.ingredient}>Combine the ingredients. Add salt to taste. Top French bread slices with mixture.</Text>
        </View>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="homeScreen">
        <Stack.Screen
        name="homeScreen"
        component={HomeScreen}
        options={{
          title: 'Healthy Recipes',
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        <Stack.Screen
        name="detailScreen"
        component={DetailsScreen}
        options={{
          title: ' ',
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerTintColor: 'white',
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ingredientsTitle: {
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'left',
  },
  ingredientsView: {
    width: '95%',
    textAlign: 'left',
  },
  ingredient: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 30,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  inputContainer: {
    alignItems: 'center',
    width: '100%',
    paddingTop: 30,
    paddingBottom: 30,
  },
  textBox: {
    height: 60,
    fontSize: 25,
    width: '80%',
    textAlign: 'center',
  },
  buttonContainer: {
    backgroundColor: 'gray',
    height: 45,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
  }
});