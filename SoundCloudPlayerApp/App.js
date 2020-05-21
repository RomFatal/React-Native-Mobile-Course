import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './src/rootReducer';
import SoundCloudApp from './src/SoundCloudApp';
import RecentQueries from './src/components/RecentQueries';
const Stack = createStackNavigator();

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, compose(middleware));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen
            name="Home"
            component={SoundCloudApp}
            options={() => ({
              headerStyle: {
                backgroundColor: '#E07000'
              },
              headerTitleStyle: {
                fontSize: 30,
                fontWeight: 'normal',
                textAlign: 'center'
              },
              title: 'Sound Cloud Player'
            })}
          />
          <Stack.Screen
            name="RecentQueries"
            component={RecentQueries}
            options={() => ({
              headerStyle: {
                backgroundColor: '#E07000'
              },
              headerTitleStyle: {
                fontSize: 30,
                fontWeight: 'normal',
                textAlign: 'center'
              },
              title: 'Favorites'
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
