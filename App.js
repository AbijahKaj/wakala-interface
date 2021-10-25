import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Button} from 'react-native'

import OnboardingScreen from './screens/Onboarding';
import HomeScreen from './screens/Home';
import SignUpScreen from "./screens/Auth";

const RootStack = createStackNavigator();

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    const handleSignIn = () => {
        // TODO implement real sign in mechanism

        setIsAuthenticated(true);
    };
    const handleSignOut = () => {
        // TODO implement real sign in mechanism

        setIsAuthenticated(false);
    };
  return (
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{headerShown: false}}>
            {isAuthenticated ? (
                <RootStack.Screen name="Home" component={HomeScreen} options={{
                    headerRight: () => (
                        <Button onPress={handleSignOut} title="Sign Out" />
                    ),
                }}/>
            ) : (
                <>
                    <RootStack.Screen name="Landing" component={OnboardingScreen}/>
                    <RootStack.Screen name="Signup">
                        {(props) => (
                            <SignUpScreen {...props} onSignIn={handleSignIn} />
                        )}
                    </RootStack.Screen>
                </>
            )}
        </RootStack.Navigator>
      </NavigationContainer>
  );
};

export default App;