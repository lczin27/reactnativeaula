import React from "react";
import { Text } from "react-native";
import Estilo from "../Estilo";
import Membro from "./Membro";

export default props =>{
    return(
        <>
        <Text>[Começo] Membros Familia:</Text>
         {props.children}
         <Text>-----[fim] Final Da Lista-----</Text>
         <Text></Text>
         <Text></Text>
        </>
    )
}