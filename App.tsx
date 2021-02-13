/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "./Screens/Login/Login";
import { ScreenList } from "./Screens/ScreenList";
import { CreateAccount } from "./Screens/CreateAccount";

const AuthStack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName="ScreenList">
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="CreateAccount" component={CreateAccount} />
        <AuthStack.Screen name="ScreenList" component={ScreenList} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
