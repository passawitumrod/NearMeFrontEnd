//This file is associated with chapter 6, building random color app (from video 44)
import React, {useState} from 'react'
import {View, Text, StyleSheet, Button, FlatList} from 'react-native'

const ColorScreen=()=>{
    const [colors, setColors] = useState([]);                                               //similar to counterScreen, we pass default value into useState, and we modify setColors, not the colors themselves

    return <View>
        <Button title="Add a Color" onPress={()=>{
            setColors([...colors, randomRgb()])                                             //"...colors" means take a look at colors array, copy it, and add into a new one
        }}/> 
        <FlatList
            keyExtractor={item => item}                                                     //Look at flatlist section if confuse, this is the same as back then. We need key, data, and renderItem for it to function properly
            data={colors}
            renderItem={({item}) => {
                return <View style={{height: 100, width: 100, backgroundColor: item}}/>     //before we use the flatlist, we simply use "randomRgb" in the place of "item" for background color
            }}                                                                              //this function in renderItem will be called with every element inside the array
        />
    </View>                                                                                 //instead of hard coding backgroundColor:  'rgb(0,255,0)', we call the randomRgb function below. (later with Flatlist, we use "item" instead)

};                                                                                          //basically rerun everything from the top when the code hits the setColors part, resulting in rerunning of the randomRgb stuff

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);       
    const blue = Math.floor(Math.random() * 256);              

    return `rgb(${red},${green},${blue})`;                                                  //returning a template string with back tick 
};

const styles = StyleSheet.create({});

export default ColorScreen;