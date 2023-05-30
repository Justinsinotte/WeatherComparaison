import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { Card, Icon } from "@rneui/themed";
import Config from "react-native-config";
const SecondTempCard = ({ secondData, setSecondData }) => {
  const { ACCUAPI } = process.env;
  const { API } = process.env;
  const [weatherIcon, setWeatherIcon] = useState(null);
  console.log(`API is ${API}`);
  useEffect(() => {
    fetch(
      `http://dataservice.accuweather.com/currentconditions/v1/45190?apikey=${API}&metric=true&details=true`
    )
      .then((response) => {
        // console.log(`The Then Response is ${response}`);
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        // console.log(`Data is : ${data}`);
        setSecondData(data);
      })
      .catch((error) => {
        console.log(`Error fetching data:${error}`);
      });
  }, []);
  // console.log(weatherIcon);
  // console.log(secondData);
  return (
    <View style={styles.container}>
      {secondData !== undefined && (
        <View>
          <Text style={styles.title}>Arabia</Text>
          {/* <Image
            source={{ uri: weatherIcon }}
            style={styles.icon}
            alt={"WeatherIcon"}
          ></Image> */}
          <Text style={styles.description}>{secondData[0].WeatherText}</Text>
          <View style={styles.InfoContainer}></View>

          {/* <Text style={styles.description}>{`Current Temperature: ${Math.ceil(
            secondData.main.temp
          )}°C`}</Text> */}
          {/* 
          <Text style={styles.description}>{`Feels Like: ${Math.ceil(
            secondData.main.feels_like
          )}°C`}</Text> */}

          <Text style={styles.description}>{`Current Temperature: ${Math.ceil(
            secondData[0].Temperature.Metric.Value
          )}°C`}</Text>
          <Text style={styles.description}>{`Max Temperature: ${Math.ceil(
            secondData[0].TemperatureSummary.Past24HourRange.Maximum.Metric
              .Value
          )}°C`}</Text>
          <Text style={styles.description}>{`Min Temperature: ${Math.ceil(
            secondData[0].TemperatureSummary.Past24HourRange.Minimum.Metric
              .Value
          )}°C`}</Text>

          <Text style={styles.description}>{`Real Feel: ${Math.ceil(
            secondData[0].RealFeelTemperature.Metric.Value
          )}°C ${secondData[0].RealFeelTemperature.Metric.Phrase}`}</Text>

          <Text style={styles.description}>{`Humidity: ${Math.ceil(
            secondData[0].RelativeHumidity
          )}%`}</Text>

          {/* <Text
            style={styles.description}
          >{`Today's Max Temperature: ${Math.ceil(
            secondData.main.temp_min
          )}°C`}</Text> */}
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

export default SecondTempCard;
