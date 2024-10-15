import { StyleSheet, View } from "react-native";
import React from "react";
import Circle from "../Components/Circle";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "black" }}>
      <View style={styles.container}>
        <Circle Title="Sign-In" route="Sign-In" navigation={navigation} icon="adduser" iconFamily="AntDesign" />
        
        <Circle Title="Camera" route="Camera" navigation={navigation} icon="camera" iconFamily="Ionicons" />

        <Circle Title="Notification" route="Notification" navigation={navigation} icon="notifications" iconFamily="Ionicons" />
        
        <Circle Title="Weather" route="Weather" navigation={navigation} icon="weather-fog" iconFamily="MaterialCommunityIcons" />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: 350,
    width: 350,
    backgroundColor: "#a2a8d3",
    borderRadius: 40,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "stretch",
    flexWrap: "wrap",
  },
});
