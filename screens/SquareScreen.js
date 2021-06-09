//This file is associated with chapter 6, from video 48 (the modifying color of a square thing)
import React, {useState} from 'react'                           //Around video 50 and 51 pretty much explains why we need state variable here and not in colorcounter
import {View, Text, StyleSheet} from 'react-native'
import ColorCounter from '../components/ColorCounter'           //Parent must import child, and we wanna use ColorCounter

const COLOR_INCREMENT = 15;                                     //True constant value inside a component and not a prop is usually named with all caps. This one control how much color change in one click

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change) =>{
        // this whole setColor is so that the value is not over 255 or under 0 
        // color === 'red', 'green', 'blue'
        // change === +15, -15

        switch(color){
            case 'red':
                red + change > 255 || red + change < 0 ? null: setRed(red+change);              //Ternary expression similar to if else but as you can see at the "?", if its not either of the cases, it does nothing (null)
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null: setGreen(green+change);      
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null: setBlue(blue+change);          
                return;
            default:                                                                            //Default to not doing anything if color does not match red green or blue
                return;
        }
    }

    return (
    <View>
        <ColorCounter color='red'
            onIncrease={()=>setColor('red', COLOR_INCREMENT)}                      //we are passing the callback to have the ability to use setRed(red+1) in color counter
            onDecrease={()=>setColor('red', -1 * COLOR_INCREMENT)}
            />                     
        <ColorCounter color='Green'
            onIncrease={()=>setColor('green', COLOR_INCREMENT)}
            onDecrease={()=>setColor('green', -1 * COLOR_INCREMENT)}/>
        <ColorCounter color='Blue'
            onIncrease={()=>setColor('blue', COLOR_INCREMENT)}
            onDecrease={()=>setColor('blue', -1 * COLOR_INCREMENT)}/>
        <View style={{height: 150, width: 150, backgroundColor:`rgb(${red},${green},${blue})`}}/>
    </View>                                                     //Adding callback functions (the ondecrease and on increase) to color counter because it need change
    )
}

const styles = StyleSheet.create({});

export default SquareScreen;