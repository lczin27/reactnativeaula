import React from "react";
import {Button, StyleSheet} from "react-native";

export default props =>{
    return(
        <>
        <Button title="+" onPress={props.inc}/>
        <Button title="-" onPress={props.desc}/>
        </>
    )
}

const styles = StyleSheet.create({
    Botoes: {
        flexDirection: 'row'
    }
})