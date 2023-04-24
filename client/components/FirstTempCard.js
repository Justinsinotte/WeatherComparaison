import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Card, Icon } from "@rneui/themed";

const FirstTempCard = () => {
  const [data, setData] = useState();
  const [click, setClick] = useState(false);

  useEffect(() => {
    fetch("http://10.0.0.102:3001/api/test")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        setData(data);
        // console.log(data);
      })
      .catch((error) => {
        console.log("Error fetching data:");
      });
  }, []);
  console.log(data);
  // const handleClick = () => {
  //   setClick(!click);
  // };

  return (
    <View style={styles.container}>
      {data !== undefined && (
        <View>
          <Text style={styles.title}>{`${data.name}'s weather`}</Text>
          <Text style={styles.description}>{`Current Temperature: ${Math.ceil(
            data.main.temp
          )}°C`}</Text>
          <Text
            style={styles.description}
          >{`Today's Max Temperature: ${Math.ceil(
            data.main.temp_max
          )}°C`}</Text>
          <Text
            style={styles.description}
          >{`Today's Max Temperature: ${Math.ceil(
            data.main.temp_min
          )}°C`}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 20,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
});

export default FirstTempCard;
