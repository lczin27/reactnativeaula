import React from "react"
import {Text, View, StyleSheet, DrawerLayoutAndroidComponent} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
//import Primeiro from './componentes/PrimeiroComponente'
//import Of, {Comp1, Comp2} from './componentes/MultiplosComponentes'
// import MinMax from "./componentes/MinMax"
// import Aleatorio from "./componentes/Aleatorio"
// import Titulo from "./componentes/Titulo"
// import Botao from "./componentes/Botao"
// import Contador from "./componentes/Contador"
// import DiasDaSemana from "./componentes/DiasDaSemana";
// import Pai from "./componentes/indireta/Pai";
// import ContadorV2 from "./componentes/contador/ContadorV2"
// import HomeScreen from "./componentes/HomeScreen"
// import DetailsScreen from "./componentes/DetailSceen"
// import Menu from "./componentes/Menu"
// import Telas from "./componentes/Telas"
import Familia from "./componentes/relacao/Familia"
import Membro from "./componentes/relacao/Membro"
import { SafeAreaView } from "react-native-safe-area-context"
import Quadrado from "./componentes/layout/Quadrado"
// import FlexnoxV1 from "./componentes/layout/FlexnoxV1"
// import ListaProdutosV2 from "./componentes/produto/ListaProdutos"
// import ListaProdutos from "./componentes/produto/ListaProdutos"
// import FlexboxV2 from "./componentes/layout/FlexboxV2"
import FlexboxV4 from "./componentes/layout/FlexboxV4"
import Mega from "./componentes/mega/Mega"
import AppFilmes from "./componentes/atividade/AppFilmes"
import AppFilme2 from "./componentes/atividade/AppFilme2"


const Stack = createNativeStackNavigator()
const StackNavigatorContainer = NavigationContainer

export default () => (
    
    
        // {/* <FlexnoxV1/> */}
        // {/* <FlexboxV2/> */}
        // {/* <FlexboxV4/> */}
        // {/* <Mega qtdeNumeros={7}/> */}
        
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="AppFilmes" component={AppFilmes}/>
        <Stack.Screen name="AppFilmes2" component={AppFilme2}/>
        </Stack.Navigator>
        </NavigationContainer>
        
//    {/* <Quadrado/>
//        <Quadrado cor='#836FFF'/>
//        <Quadrado cor='#C112DF'/>
//        <Quadrado cor='#0F79F2'/>
//        <Quadrado cor='#0F7334'/> */}
//         {/* <ListaProdutos/> */}
//         {/* <ListaProdutosV2/> */}
// {/* //     <Familia>
// //         <Membro nome="K" sobrenome="Pereiras"/>
// //         <Membro nome="R" sobrenome="Pereiras"/>
// //         <Membro nome="L" sobrenome="Pereiras"/>
// //         <Membro nome="H" sobrenome="Pereiras"/>

// //     </Familia>
// //     <Familia>
// //     <Membro nome="P" sobrenome="Da silva"/>
// //     <Membro nome="O" sobrenome="Da silva"/>
// //     <Membro nome="R" sobrenome="Da silva"/>
// //     <Membro nome="R" sobrenome="Da silva"/>
// //     <Membro nome="A" sobrenome="Da silva"/>
// // </Familia> */}

//     // <NavigationContainer>
//     //         <Stack.Navigator>
//     //             <Stack.Screen name="Menu" component={Menu}/>
//     //             <Stack.Screen name="Aleatorio" component={Aleatorio}/>
//     //             <Stack.Screen name="ContadorV2" component={ContadorV2}/>
//     //             <Stack.Screen name="Telas" component={Telas}/>
               
//         //     </Stack.Navigator>
//         // </NavigationContainer>
//     // // <View style={styles.TelaIniciante}>
//     //     {/* <ContadorV2/> */}
//     //     {/* <Pai/> */}
//     // {/* <DiasDaSemana inicial="Domingo"/> */}
//     //     {/* <Contador inicial={100}/> */}
//     //     {/* <Botao/> */}
//     //     {/*<Titulo principal="Cadastro Produto"
//     //             secundario="Tela de Cadastro"/>
//     //      <Primeiro/>
//     //     </ViewText>1 + 2</Text>
//     //     <Text>O valor da soma 1 + 2 = {1+2}</Text>
//     //     <Comp1/>
//     //     <Comp2/>
//     //     <Of/> /}
//     //     {/ <MinMax min="3" max ="20"/>
//     //     <MinMax min="5" max ="40"/>
//     //     <MinMax min="7" max ="55"/>
        
//         //  {/ <Aleatorio miny={0} maxx={100} /> */}
//     // // </View>

)

// export default App

const styles = StyleSheet.create({
    TelaIniciante: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: 'center',
        padding: 20

    }
})

// Lista de comentários

// function App(){
//    const jsx = <Text>Lucas</Text>
//    return jsx
// }

// const App = function(){
//     return <Text>Component 2</Text>
// }

// export default function(){
//     return <Text>Component 3</Text>
// }

// export default () =>{
//     return <Text>Component 4</Text>
// }