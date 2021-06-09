//NOTE: SAME FILE AS SquareScreen.js but demonstrate different method (useState vs reducer) since both is not use together at once
//This file is associated with chapter 6, from video 48 (the modifying color of a square thing)

import React, {useReducer} from 'react'                                             //we use useReducer instead of useState
import {View, Text, StyleSheet} from 'react-native'
import ColorCounter from '../components/ColorCounter'                               //Parent must import child, and we wanna use ColorCounter

const COLOR_INCREMENT = 15;                                                         //True constant value inside a component and not a prop is usually named with all caps. This one control how much color change in one click

const SquareScreen2 = () => {
    
    const reducer = (state, action) => {
        // state === {red: number, green: number, blue: number}
        // action === {colorToChange: 'red' || 'green' || 'blue', amount : 15 || -15}

        switch (action.colorToChange){
            case 'red':
                return state.red + action.amount > 255 || state.red + action.amount < 0  // this is turnary statement, and you must return something when using reducers or it is undefined
                    ? state
                    : {...state, red: state.red + action.amount};                       //pretty much making a new object to overwrite the object, with new "red" value. The "..." is pretty much the current state that's geting replaced                                             
                                  
            case 'green':
                return {...state, green: state.green + action.amount};
            case 'blue':
                return {...state, blue: state.blue + action.amount};
            default:                                                                //default are again, for invalid input
        }
    };


    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})      //providing initial value of the 3 colors as 0  (in other words, state will = 0,0,0)
                                                                                    //dispatch is pretty much "run my reducer"

    const{red, green, blue} = state;                                                // we're destructuring again so that we dont have to type state.red but red instead (example below)

    return (
    <View>
        <ColorCounter color='red'
            onIncrease={()=> dispatct({colorToChange: 'red', amount: COLOR_INCREMENT})}                                              
            onDecrease={()=> dispatch({colorToChange: 'red', amount: -1 * COLOR_INCREMENT})}
            />                     
        <ColorCounter color='Green'
            onIncrease={()=> dispatch({colorToChange: 'green', amount: COLOR_INCREMENT})}
            onDecrease={()=> dispatch({colorToChange: 'green', amount: -1 * COLOR_INCREMENT})}
            />
        <ColorCounter color='Blue'
            onIncrease={()=> dispatch({colorToChange: 'blue', amount: COLOR_INCREMENT})}
            onDecrease={()=> dispatch({colorToChange: 'blue', amount: -1 * COLOR_INCREMENT})}
            />
        <View style={{height: 150, width: 150, backgroundColor:`rgb(${red},${green},${blue})`}}/>   
    </View>                                                                                            //if not because of destructuring, the line above ahs to be state.red, state.green, state.blue
    )
}

const styles = StyleSheet.create({});

export default SquareScreen2;