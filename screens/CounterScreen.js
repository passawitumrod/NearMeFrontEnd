//This file is associated with chapter 6, state - building a counter app
import React, {useState} from 'react'                                       // import useState to, use hook (duh)
import {Text, View, StyleSheet, Button} from 'react-native'

const CounterScreen = ()=>{
    //let counter = 0;                                                      // wrong way of setting up counter because react doesnt track change and re display correct amount, we need state/hook
    const[counter, setCounter] = useState(0);                               // useState is to initialize a data/piece of state that we're gonna track, and we put in default value in it (0).   NOTE: we are using array destructuring here, and explaination is in the note

    return (
    <View>
        <Button title="Increase" 
                onPress={()=>{setCounter(counter+1)}}/>
        <Button title="Decrease" 
                onPress={()=>{setCounter(counter-1)}}/>
        <Text>Currnent count: {counter}</Text>
    </View>
    );
};                                                                          //onPress={() =>{counter++}}/> is also the wrong way of setting up counter
const styles = StyleSheet.create({})

export default CounterScreen;