import React from "react";
import { View, StyleSheet } from "react-native";
import Quadrado from "./Quadrado";
export default props => {
    const lado = 50
    return (
      <View style={styles.FlexV2}>
        <Quadrado cor="#05f5a5"/>
       <Quadrado cor='#836FFF'/>
       <Quadrado cor='#C112DF'/>
       <Quadrado cor='#0F79F2'/>
       <Quadrado cor='#0F7334'/>
      </View>
    )
}



const styles = StyleSheet.create({
FlexV2:{
    // flexGrow: 1,
    flex: 1,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent:'flex-start',
    backgroundColor: '#000'
}
})