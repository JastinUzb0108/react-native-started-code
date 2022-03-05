import React from 'react'
import { StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components/native';

import { useThemeContext } from 'Themes'
import { McText } from 'Components'

const Home = () => {

  const theme = useTheme()
  const themeContext = useThemeContext();

  return (
    <View style={styles.fullScreens}>
      <View style={styles.themeButton}>
        <TouchableOpacity
          onPress={() => {
            themeContext.setMode('dark')
          }}
          style={[
            styles.buttonTheme,
            {
              backgroundColor: themeContext.mode === 'dark' ? theme.colors.primary : 'transparent',
              borderWidth: themeContext.mode === 'dark' ? 0 : 1,
            }
          ]}>
          <McText semi size={16} color={theme.colors.text1}>
            Dark Theme
          </McText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            themeContext.setMode('light')
          }}
          style={[
            styles.buttonTheme,
            {
              backgroundColor: themeContext.mode === 'light' ? theme.colors.primary : 'transparent',
              borderWidth: themeContext.mode === 'light' ? 0 : 1,
            }
          ]} >
          <McText semi size={16} color={theme.colors.text1}>
            Light Theme
          </McText>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  fullScreens: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headContainer: {
    marginHorizontal: 25,
    marginTop: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    marginTop: 20
  },
  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  box: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#FFAC30',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputArea: {
    width: 170,
    height: 45,
    padding: 6,
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 6,
    fontSize: 16
  },
  button: {
    width: 170,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginTop: 10,
    backgroundColor: '#FFAC30',
    borderRadius: 10
  },
  themeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30
  },
  buttonTheme: {
    width: 170,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#FFAC30'
  }
})