import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DetailSignIn = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={{fontSize:25, fontWeight:"bold"}}>Review Your Details</Text>
        <View style={styles.Details}>
          <Text style={styles.Font}>Name: Animesh Kumar Raikwar</Text>
          <Text style={styles.Font}>Email: animeshraikwar@gmail.com</Text>
          <View style={{display:"flex", flexDirection:"row",justifyContent:"space-between"}}>
            <Text style={styles.Font} >City: Pune</Text>
            <Text style={styles.Font}>Age: 24-28</Text>
          </View>
          <Text style={styles.Font}>
            Description: 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex velit
            maiores numquam, quod culpa accusantium vero nihil ipsa voluptate
            fuga e
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DetailSignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    height: 550,
    width: 370,
    borderRadius: 40,
    padding: 30,
  },
  Details: {
    // backgroundColor: "red",
    marginTop: 30,
    
  },Font:{
    fontSize:20
  }
});
