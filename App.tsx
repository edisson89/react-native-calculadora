import React from 'react'
import { SafeAreaView, StatusBar,  } from 'react-native';
import { CalculadoraScreen } from './src/Screens/CalculadoraScreen';
import { styles } from './src/Theme/appTheme';



const App = () => {
  return (
    <SafeAreaView style={ styles.fondo} >
      <StatusBar 
      backgroundColor='black'/>  

     < CalculadoraScreen />
    </SafeAreaView>
   
  )
}

export default App