import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Circle = ({ Title, navigation, route, icon, iconFamily }) => {
  
  const renderIcon = () => {
    if (iconFamily === 'AntDesign') {
      return <AntDesign name={icon} size={40} color="black" />;
    } else if (iconFamily === 'Ionicons') {
      return <Ionicons name={icon} size={40} color="black" />;
    } else if (iconFamily === 'MaterialCommunityIcons') {
      return <MaterialCommunityIcons name={icon} size={40} color="black" />;
    } else {
      return null;
    }
  };

  return (
    <Pressable onPress={() => navigation.navigate(route)}>
      <View style={styles.design}>
        {renderIcon()}
      </View>
    </Pressable>
  );
};

export default Circle;

const styles = StyleSheet.create({
  design: {
    height: 130,
    width: 130,
    borderRadius: 70,
    backgroundColor: "white",
    margin: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
