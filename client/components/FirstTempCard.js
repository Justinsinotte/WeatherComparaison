import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { Card, Icon } from "@rneui/themed";

const FirstTempCard = ({ firstData, setFirstData }) => {
  const [weatherIcon, setWeatherIcon] = useState(null);

  useEffect(() => {
    fetch("http://192.168.0.102:3001/api/test")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        setFirstData(data);
        const icon =
          data && data.weather
            ? `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            : "";
        setWeatherIcon(icon);
        // console.log(icon);
      })
      .catch((error) => {
        console.log("Error fetching data:");
      });
  }, []);
  // console.log(weatherIcon);
  return (
    <View style={styles.container}>
      {firstData !== undefined && weatherIcon !== null && (
        <View>
          <Text
            style={styles.title}
          >{`${firstData.name},${firstData.sys.country}`}</Text>
          <Image
            source={{ uri: weatherIcon }}
            style={styles.icon}
            alt={"WeatherIcon"}
          ></Image>
          <Text style={styles.description}>
            {firstData.weather[0].description
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </Text>
          <View style={styles.InfoContainer}></View>

          <Text style={styles.description}>{`Current Temperature: ${Math.ceil(
            firstData.main.temp
          )}°C`}</Text>

          <Text style={styles.description}>{`Feels Like: ${Math.ceil(
            firstData.main.feels_like
          )}°C`}</Text>

          <Text
            style={styles.description}
          >{`Today's Max Temperature: ${Math.ceil(
            firstData.main.temp_max
          )}°C`}</Text>
          <Text
            style={styles.description}
          >{`Today's Max Temperature: ${Math.ceil(
            firstData.main.temp_min
          )}°C`}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  InfoContainer: {
    display: "flex",
    flexDirection: "row",
    // backgroundColor: "pink",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    // backgroundColor: "brown",
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
  icon: {
    width: 100,
    height: 100,
  },
  description: {
    fontSize: 16,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
    // backgroundColor: "blue",
    borderRadius: 5,
    marginBottom: 10,
  },
  TempContainer: {
    // backgroundColor: "red",
  },
  // day: {
  //   display: "flex",
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   padding: 10,
  //   backgroundColor: "#fff",
  //   borderRadius: 5,
  //   marginBottom: 10,
  // },
  // temp: {
  //   display: "flex",
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   padding: 10,
  //   backgroundColor: "#fff",
  //   borderRadius: 5,
  //   marginBottom: 10,
  // },
});

export default FirstTempCard;
