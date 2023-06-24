import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MainNavigator from './src/router/MainNavigator'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})