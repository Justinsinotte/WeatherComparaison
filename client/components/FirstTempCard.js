import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { Card, Icon } from "@rneui/themed";
import Config from "react-native-config";

const FirstTempCard = ({
  firstData,
  firstOnSelectCity,
  firstWeatherFetch,
  setFirstWeatherFetch,
}) => {
  const { API } = process.env;

  // console.log(`FirstTempCard API is ${API}`);
  // console.log(`FirstTempCard firstOnCitySelect is ${firstOnSelectCity}`);
  // console.log(`FirstTempCard firstData is : ${firstData}`);
  const [icon, setIcon] = useState("");
  useEffect(() => {
    if (!firstData) {
      console.log("No data available");
      return;
    }

    // console.log("FirstTempCard firstData is:", firstData);

    fetch(
      `http://dataservice.accuweather.com/currentconditions/v1/${firstData}?apikey=${API}&metric=true&details=true`
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Network response was not ok/FirstTempCard");
        }
      })
      .then((data) => {
        console.log(data);
        setFirstWeatherFetch(data); // Assuming `data` contains the weather icon URL

        // console.log("FirstTempCard firstWeatherFetch is:", firstWeatherFetch);
      })
      .catch((error) => {
        console.log(`Error fetching data: ${error}`);
      });
  }, [firstData, API]);

  useEffect(() => {
    if (firstWeatherFetch) {
      const weatherIcon = firstWeatherFetch[0].WeatherIcon;
      setIcon(weatherIcon);
      console.log(`This is icon: ${weatherIcon}`);
    }
  }, [firstWeatherFetch]);
  return (
    <View style={styles.container}>
      {firstWeatherFetch && (
        <View>
          <Text style={styles.title}>{firstOnSelectCity}</Text>
          {icon && (
            <Image
              source={{
                uri: `https://www.accuweather.com/images/weathericons/${icon}.svg`,
              }}
              style={styles.icon}
              alt={"Weather Icon"}
            />
          )}
          <Text style={styles.description}>
            {firstWeatherFetch && firstWeatherFetch[0].WeatherText}
          </Text>
          <View style={styles.InfoContainer}></View>
          <Text style={styles.description}>{`Current Temperature: ${Math.ceil(
            firstWeatherFetch[0].Temperature.Metric.Value
          )}°C`}</Text>
          <Text style={styles.description}>{`Max Temperature: ${Math.ceil(
            firstWeatherFetch[0].TemperatureSummary.Past24HourRange.Maximum
              .Metric.Value
          )}°C`}</Text>
          <Text style={styles.description}>{`Min Temperature: ${Math.ceil(
            firstWeatherFetch[0].TemperatureSummary.Past24HourRange.Minimum
              .Metric.Value
          )}°C`}</Text>
          <Text style={styles.description}>{`Real Feel: ${Math.ceil(
            firstWeatherFetch[0].RealFeelTemperature.Metric.Value
          )}°C ${
            firstWeatherFetch[0].RealFeelTemperature.Metric.Phrase
          }`}</Text>
          <Text style={styles.description}>{`Humidity: ${Math.ceil(
            firstWeatherFetch[0].RelativeHumidity
          )}%`}</Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // styles
    borderWidth: 1,
    borderColor: "brown",
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  title: {},
  icon: {},
  description: {},
  InfoContainer: {},
});

export default FirstTempCard;
