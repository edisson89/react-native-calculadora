import React from 'react'
import { SafeAreaView, StatusBar,  } from 'react-native';
import { CalculadoraScreen } from './SrC/Screens/CalculadoraScreen';
import { styles } from './SrC/Theme/appTheme';


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