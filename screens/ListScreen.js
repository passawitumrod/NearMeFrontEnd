// This file is mostly related to chapter 3, List building
import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';          //need to import FlatList to use it now

const ListScreen = function() {
    const friends = [
        //{name: 'NO_KEY'},                                             // a key is essential to any flatlist, and it must be a unique string
        //{name: 'WITH_KEY', Key: 'Some_String'},                       // We can add a key to each element in the list like this, or we can use key extractor below
        {name: 'Friend #1 (the margin spacing comes from style sheet)', age: '11'},                            
        {name: 'Friend #2', age:'22'},
        {name: 'Friend #3', age:'33'},
        {name: 'Friend #4', age:'44'},
        {name: 'Friend #5', age:'55'},
        {name: 'Friend #6', age:'66'},
        {name: 'Friend #7', age:'77'},
        {name: 'Friend #8', age:'88'},
        {name: 'Friend #9', age:'99'},
    ];
                                                                        // instead of the usual return<Text></Text>; to return text we use below to return flat list
    return (
        <FlatList //horizontal                                          // FlatList require 2 props, data and RenderItem (horizontal is just a tag to make the list appear in horizontal way, instead of vertical)
            //showsHorizontalScrollIndicator={false}                    // showsHorizontalScrollIndicator is just a prop to make the scroll bar invisible
            keyExtractor = {frienD=>frienD.name}                        // This is the keyExtractor line mentioned above, its one line and can add keys to all the friends. It uses the "name" property as the key
            data={friends} 
            //renderItem={(element)=>{}}                                // if we use the "element" here, what will come out is element = {item: {name: 'Friend #1'}, index:0}
            renderItem={({item})=>{                                     // so we might wanna use "{item}" instead of "element" to only return {name: 'Friend #1'}
              return <Text style={styles.textStyle}>                    
                  {item.name} - Age: {item.age}</Text>;                 // this applies the StyleSheet we made below 
            }}
        />                                                          
    );
};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 50,                                              // This is so that the display of the list looks nicer (have some spacing)
        marginHorizontal: 50
    },
});

export default ListScreen;