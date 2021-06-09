//This file is to demonstrate button and touchableopacity for navigation from chapter 4 (also destructing props)
import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

const HomeScreen = ({navigation}) => {                                              // here we use {navigation} instead of props inside bracket. If we use props, we have to specify props.navigation.navigate, instead of just navigation.navigate

  return <View>
          <Text style={styles.text}>NewHiThere</Text>
          <Button 
            title="Go to components demo"                                           //  title of the button, what happen when button pressed?
            onPress={()=> navigation.navigate('Components')}/>    
          <Button
            title="Go to list demo"
            onPress={()=> navigation.navigate('List')} />  
          <Button
            title="Go to image demo"
            onPress={()=> navigation.navigate('Image')} />
          <Button
            title="Go to counter demo"
            onPress={()=> navigation.navigate('Counter')} />
          <Button
            title="Go to color demo"
            onPress={()=> navigation.navigate('Color')} />
          <Button
            title="Go to square demo (using use state)"
            onPress={()=> navigation.navigate('Square')} />
          <Button
            title="Go to John's ApiTest"
            onPress={()=> navigation.navigate('Api')} />  
          <Button
            title="Go to square demo (using reducers)"
            onPress={()=> navigation.navigate('Square2')} />
          <Button
            title="Go to NicerHomeScreen (example of better homescreen)"
            onPress={()=> navigation.navigate('NicerHome')} />
          <Button
            title="Go to CartScreen"
            onPress={()=> navigation.navigate('Cart')} />
          <Button
            title="Go to OnBoardScreen"
            onPress={()=> navigation.navigate('OnBoard')} />
          <Button
            title="Go to DetailsScreen"
            onPress={()=> navigation.navigate('Details')} />
          <TouchableOpacity onPress={()=> navigation.navigate('List')}>
            <Text> Go to list demo (this is touchable opacity example)</Text>
          </TouchableOpacity>        
        </View>                                                                     // line 11 demonstrate the props given to onPress to navigate to specific pages (the name of each page is created in app.js)
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
