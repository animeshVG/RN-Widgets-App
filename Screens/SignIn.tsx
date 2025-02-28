import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

const SignIn = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState(null);
  const [age, setAge] = useState(null);
  const [openCity, setOpenCity] = useState(false);
  const [openAge, setOpenAge] = useState(false);
  const [description, setDescription] = useState("");

  const handleSubmit = () => {

    if (!name || !email || !city || !age || !description) {
      Alert.alert("Error", "Please fill all fields.");
      return;
    }

    navigation.navigate("Detail-SignIn", {
      name,
      email,
      city,
      age,
      description,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>Welcome To Sign In</Text>
        <View>
          <Text>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the Name"
          value={name}
          onChangeText={setName}
        />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter the Email"
          value={email}
          onChangeText={setEmail}
        />

        <View style={styles.dropdownContainer}>
          <View style={styles.dropdownWrapper}>
            <Text style={styles.label}>Select City</Text>
            <DropDownPicker
              open={openCity}
              value={city}
              items={[
                { label: "Pune", value: "Pune" },
                { label: "Mumbai", value: "Mumbai" },
                { label: "Bhopal", value: "Bhopal" },
                { label: "Delhi", value: "Delhi" },
                { label: "Chandigarh", value: "Chandigarh" },
              ]}
              setOpen={setOpenCity}
              setValue={setCity}
              placeholder="Select City"
              style={styles.dropdown}
              containerStyle={styles.dropdownItemContainer}
            />
          </View>

          <View style={styles.dropdownWrapper}>
            <Text style={styles.label}>Select Age</Text>
            <DropDownPicker
              open={openAge}
              value={age}
              items={[
                { label: "18-20", value: "18-20" },
                { label: "20-24", value: "20-24" },
                { label: "24-28", value: "24-28" },
                { label: "30-above", value: "30-above" },
              ]}
              setOpen={setOpenAge}
              setValue={setAge}
              placeholder="Select Age"
              style={styles.dropdown}
              containerStyle={styles.dropdownItemContainer}
            />
          </View>
        </View>

        <View style={styles.Des}>
          <Text style={{ marginBottom: 10 }}>Enter The Description</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Enter your description here..."
            value={description}
            onChangeText={setDescription}
            multiline={true}
            numberOfLines={4}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <Button title="Submit" color={"black"} onPress={handleSubmit} />
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    height: 600,
    width: 350,
    backgroundColor: "white",
    borderRadius: 30,
    padding: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
    color: "#555",
  },
  dropdownContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    gap: 25,
  },
  dropdownWrapper: {
    flex: 1,
    marginHorizontal: 5,
  },
  dropdown: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 0,
    height: 45,
  },
  dropdownItemContainer: {
    width: "100%",
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start",
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    textAlignVertical: "top",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  input: {
    height: 45,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#f0f0f0",
  },
  Des: {
    marginTop: 25,
  },
});
