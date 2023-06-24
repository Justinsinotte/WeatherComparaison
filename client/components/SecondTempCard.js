import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { Card, Icon } from "@rneui/themed";
import Config from "react-native-config";

const SecondTempCard = ({
  secondData,
  secondOnSelectCity,
  secondWeatherFetch,
  setSecondWeatherFetch,
}) => {
  const { API } = process.env;
  // console.log(`SecondTempCard API is ${API}`);
  // console.log(`SecondTempCard secondOnCitySelect is ${secondOnSelectCity}`);
  // console.log(`SecondTempCard secondData is : ${secondData}`);

  useEffect(() => {
    if (!secondData) {
      console.log("No data available");
      return;
    }

    // console.log("SecondTempCard secondData is:", secondData);

    fetch(
      `http://dataservice.accuweather.com/currentconditions/v1/${secondData}?apikey=${API}&metric=true&details=true`
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Network response was not ok/SecondTempCard");
        }
      })
      .then((data) => {
        // console.log(data);
        setSecondWeatherFetch(data); // Assuming `data` contains the weather icon URL
        // console.log(
        //   "SecondTempCard secondWeatherFetch is:",
        //   secondWeatherFetch
        // );
      })
      .catch((error) => {
        console.log(`Error fetching data: ${error}`);
      });
  }, [secondData, API]);

  return (
    <View style={styles.container}>
      {secondWeatherFetch && (
        <View>
          <Text style={styles.title}>{secondOnSelectCity}</Text>
          {/* <Image
            source={{ uri: secondWeatherFetch }}
            style={styles.icon}
            alt={"secondWeatherFetch"}
          /> */}
          <Text style={styles.description}>
            {secondWeatherFetch.WeatherText}
          </Text>
          <View style={styles.InfoContainer}></View>
          <Text style={styles.description}>{`Current Temperature: ${Math.ceil(
            secondWeatherFetch[0].Temperature.Metric.Value
          )}°C`}</Text>
          <Text style={styles.description}>{`Max Temperature: ${Math.ceil(
            secondWeatherFetch[0].TemperatureSummary.Past24HourRange.Maximum
              .Metric.Value
          )}°C`}</Text>
          <Text style={styles.description}>{`Min Temperature: ${Math.ceil(
            secondWeatherFetch[0].TemperatureSummary.Past24HourRange.Minimum
              .Metric.Value
          )}°C`}</Text>
          <Text style={styles.description}>{`Real Feel: ${Math.ceil(
            secondWeatherFetch[0].RealFeelTemperature.Metric.Value
          )}°C ${
            secondWeatherFetch[0].RealFeelTemperature.Metric.Phrase
          }`}</Text>
          <Text style={styles.description}>{`Humidity: ${Math.ceil(
            secondWeatherFetch[0].RelativeHumidity
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
  title: {
    // styles
  },
  icon: {
    // styles
  },
  description: {
    // styles
  },
  InfoContainer: {
    // styles
  },
});

export default SecondTempCard;
