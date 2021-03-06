import React, { memo } from "react";
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Dimensions,
  ScrollView
} from "react-native";
import Colors from "../constants/Colors";

const Background = ({ children }) => (
  <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow:1}} style={{width:Dimensions.get('screen').width,backgroundColor:'white'}}>
    <ImageBackground
     resizeMode='cover'
      style={styles.background}
    >
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {children}
    </KeyboardAvoidingView>
  </ImageBackground>
  </ScrollView>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width:Dimensions.get('screen').width,
    height:Dimensions.get('screen').height
  },
  container: {
    flex: 1,
    padding: 20,
    width: "100%",
    maxWidth: 340,
    alignSelf: "center",
    alignItems: "center",
    
  }
});

export default memo(Background);
