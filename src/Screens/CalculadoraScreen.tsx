import React, { useRef, useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../Theme/appTheme';
import { BotonCalc } from '../Components/BotonCalc';
import { useCalculadora } from '../Hooks/useCalculadora';



export const CalculadoraScreen = () => {
  
  const   {
    numeroAnterior,
    numero,
    limpiar,
    positivoNegativo,
    btnDelete,
    btnDividir,            
    armarNumero,
    btnMultiplicar,
    btnSumar,
    calcular,
    btnRestar 
  } = useCalculadora () ;
  



  return (
    <View style={ styles.CalculadoraContainer}>
      { 
      (numeroAnterior !== '0')&& ( <Text style={styles.resultadoPequeño}>{ numeroAnterior}</Text>)
      }
       
        <Text style={styles.resultado}
        numberOfLines={1}
        adjustsFontSizeToFit
        >
          { numero }
          </Text>

        <View style={styles.fila}>
        {/* {Boton} */}
        <BotonCalc texto='C' color='#9B9B9B' accion={limpiar} />  
        <BotonCalc texto='+/-' color='#9B9B9B' accion={positivoNegativo}/>  
        <BotonCalc texto='del' color='#9B9B9B'accion={btnDelete} />       
        <BotonCalc texto='/' color='#FF9427' accion={ btnDividir}/>  
      
        </View>

        <View style={styles.fila}>
        {/* {Boton} */}
        <BotonCalc texto='7' accion={armarNumero} />  
        <BotonCalc texto='8' accion={armarNumero}/>  
        <BotonCalc texto='9' accion={armarNumero} />       
        <BotonCalc texto='x' color='#FF9427' accion={btnMultiplicar}/>  
      
        </View>
        <View style={styles.fila}>
        {/* {Boton} */}
        <BotonCalc texto='4'  accion={armarNumero}/>  
        <BotonCalc texto='5' accion={armarNumero}/>  
        <BotonCalc texto='6'  accion={armarNumero}/>       
        <BotonCalc texto='-' color='#FF9427' accion= { btnRestar  }/>  
      
        </View>
        <View style={styles.fila}>
        {/* {Boton} */}
        <BotonCalc texto='1' accion={armarNumero} />  
        <BotonCalc texto='2' accion={armarNumero}/>  
        <BotonCalc texto='3'  accion={armarNumero}/>       
        <BotonCalc texto='+' color='#FF9427' accion={ btnSumar}/>  
      
        </View>
        <View style={styles.fila}>
        {/* {Boton} */}
        <BotonCalc texto='0' ancho accion={armarNumero}/>  
        <BotonCalc texto='.' accion={armarNumero}/>  
        <BotonCalc texto='=' accion={calcular} />       
         
      
        </View>
        
        
        

     

    </View>
  )
}

