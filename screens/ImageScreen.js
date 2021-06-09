//This file is associated with chapter 5, reusable component and showing images
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ImageDetail from "../components/ImageDetails";               //ImageScreen is parent and we are importing ImageDetail

const ImageScreen= ()=>{                                        
    return<View><Text>Image Screen</Text>
        <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} score={9}/>
        <ImageDetail title="Beach" imageSrouce={require('../../assets/beach.jpg')} score={7}/>
        <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} score={10}/>
    </View>                                                         //when we imported ImageDetail, we basically can use it as a tag. furthermore, the props we give to the tag can be anything since we created the tags ourselves.
};


const styles = StyleSheet.create({});

export default ImageScreen;
