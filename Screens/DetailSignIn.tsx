import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const DetailSignIn = ({ route, navigation }) => {
  const { name, email, city, age, description } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>Review Your Details</Text>
        <View style={styles.detailsContainer}>
          <View style={styles.infoRow}>
            <MaterialIcons name="person" size={24} color="black" />
            <Text style={styles.font}>Name: {name}</Text>
          </View>
          <View style={styles.infoRow}>
            <MaterialIcons name="email" size={24} color="black" />
            <Text style={styles.font}>Email: {email}</Text>
          </View>
          <View style={styles.cityAgeContainer}>
            <View style={styles.infoRow}>
              <MaterialIcons name="location-city" size={24} color="black" />
              <Text style={styles.font}>City: {city}</Text>
            </View>
            <View style={styles.infoRow}>
              <MaterialIcons name="access-time" size={24} color="black" />
              <Text style={styles.font}>Age: {age}</Text>
            </View>
          </View>
          <Text style={styles.font}>Description:</Text>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
        <View style={styles.Delete}>
          <Button title="Delete User" color={"black"} />
        </View>
      </View>
    </View>
  );
};

export default DetailSignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    height: 600,
    width: 370,
    borderRadius: 20,
    padding: 30,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  detailsContainer: {
    marginTop: 20,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  cityAgeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  font: {
    fontSize: 20,
    marginLeft: 10,
    color: "#555",
  },
  descriptionText: {
    fontSize: 18,
    lineHeight: 24,
    marginTop: 10,
    color: "#666",
  },
  button: {
    marginTop: 30,
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },Delete:{
    marginTop:25
  }
});
