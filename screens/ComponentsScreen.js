//This file is mostly related to chapter 2
//This file is to demonstrate creation of react component, from chapter 2 video 1
//This file is to demonstrate styling, both with stylesheet and inline styling from chapter 2 video 2 

import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {                                                        // the "() =>" is the same as "function()"
    const name = 'My name is Punpun';                                                   // demonstrating "refering" js variable in jsx
    const name2 = <Text>Not in use example</Text>;                                      // demonstrating "assigning" js variable in jsx
  
    return (<View>                                                                      
            <Text style={styles.textStyle}>Getting started with react native!</Text>    
            <Text style={{fontSize:20}}>{name}</Text>
            </View>
    );                                                                                  // Line 13 is styling with style sheet below
};                                                                                      // Line 14 is styling inside the line itself

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 45
    },
    subtextStyle:{
        fontSize: 20
    }
});

export default ComponentsScreen;