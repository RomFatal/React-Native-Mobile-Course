import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Icon } from 'react-native-elements'
import HomeScreen from './components/Home'
import BigImg from './components/BigImg'
import Favorite from './components/Favorite'
import { StyleSheet, SafeAreaView } from 'react-native'

const Stack = createStackNavigator()
function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeArea} />
      <Stack.Navigator initialRouteName="HomeNav">
        <Stack.Screen
          name="HomeNav"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: 'rgba(250,171,240,1)',
              height: 80
            },
            headerTitleStyle: {
              textAlign: 'center',
              flex: 1,
              fontSize: 28,
              fontWeight: 'normal'
            },
            headerRight: () => (
              <Icon
                containerStyle={styles.icon}
                name="md-heart-empty"
                type="ionicon"
                size={60}
                color="red"
                containerStyle={styles.icon}
                onPress={() => navigation.navigate('Favorite')}
              />
            ),
            headerTitleAlign: 'center',
            title: 'Images Browser'
          })}
        />
        <Stack.Screen
          name="BigImg"
          component={BigImg}
          options={() => ({
            headerStyle: {
              backgroundColor: 'rgba(250,171,240,1)'
            },
            headerTitleStyle: {
              marginBottom: 20,
              fontSize: 28,
              fontWeight: 'normal'
            },
            headerTitleAlign: 'center',
            headerBackTitle: 'Back',
            title: 'Images Browser',
            headerLeftContainerStyle: {
              marginBottom: 18
            }
          })}
        />
        <Stack.Screen
          name="Favorite"
          component={Favorite}
          options={() => ({
            headerStyle: {
              backgroundColor: 'rgba(250,171,240,1)'
            },
            headerTitleStyle: {
              marginBottom: 20,
              fontSize: 28,
              fontWeight: 'normal'
            },
            headerTitleAlign: 'center',
            title: 'Favorites',
            headerBackTitle: 'Back',
            headerLeftContainerStyle: {
              marginBottom: 18
            }
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'rgba(98,90,207,1)',
    height: 40
  },
  icon: {
    paddingBottom: 25,
    paddingRight: 20
  }
})

export default App
