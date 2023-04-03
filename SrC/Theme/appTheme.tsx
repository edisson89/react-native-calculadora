import { StyleSheet } from "react-native";
import { CalculadoraScreen } from '../Screens/CalculadoraScreen';

export const styles = StyleSheet.create({
    fondo:{
        flex:1,
        backgroundColor: 'black',
       

    },
    CalculadoraContainer:{
        flex:1,
         paddingHorizontal:  20,
         justifyContent:'flex-end'
    },
    resultado:{
        fontSize:60,
        color:'white',
        textAlign:'right',
        marginBottom: 5,
        
    },
    resultadoPequeño:{
       color:'rgba(255,255,255,0.5  )',
       fontSize:30,
       textAlign:'right',
    }, 
     fila:{
        flexDirection: 'row',
        justifyContent: 'center',
      //  marginBottom:18,
        paddingHorizontal: 10,


    },
    boton:{
        height:80,
        width:80,
        backgroundColor:'#333333',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal:5,


    },
    botonTexto:{
        textAlign:'center',
        padding:10,
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold', 
    },
  
});