import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { Card, Icon } from "@rneui/themed";
import Config from "react-native-config";

const FirstTempCard = ({ firstData }) => {
  const { API } = process.env;
  const [weatherIcon, setWeatherIcon] = useState(null);
  console.log(`API is ${API}`);

  useEffect(() => {
    if (!firstData) {
      console.log("No data available");
      return;
    }

    console.log("FirstTempCard firstData is:", firstData);

    fetch(
      `http://dataservice.accuweather.com/currentconditions/v1/${firstData}?apikey=${API}&metric=true&details=true`
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        setWeatherIcon(data); // Assuming `data` contains the weather icon URL
        console.log(weatherIcon);
      })
      .catch((error) => {
        console.log(`Error fetching data: ${error}`);
      });
  }, [firstData, API]);

  return (
    <View style={styles.container}>
      {firstData && firstData[0] && (
        <View>
          <Text style={styles.title}>Montreal</Text>
          <Image
            source={{ uri: weatherIcon }}
            style={styles.icon}
            alt={"WeatherIcon"}
          />
          <Text style={styles.description}>{firstData[0].WeatherText}</Text>
          <View style={styles.InfoContainer}></View>
          <Text style={styles.description}>{`Current Temperature: ${Math.ceil(
            firstData[0].Temperature.Metric.Value
          )}°C`}</Text>
          <Text style={styles.description}>{`Max Temperature: ${Math.ceil(
            firstData[0].TemperatureSummary.Past24HourRange.Maximum.Metric.Value
          )}°C`}</Text>
          <Text style={styles.description}>{`Min Temperature: ${Math.ceil(
            firstData[0].TemperatureSummary.Past24HourRange.Minimum.Metric.Value
          )}°C`}</Text>
          <Text style={styles.description}>{`Real Feel: ${Math.ceil(
            firstData[0].RealFeelTemperature.Metric.Value
          )}°C ${firstData[0].RealFeelTemperature.Metric.Phrase}`}</Text>
          <Text style={styles.description}>{`Humidity: ${Math.ceil(
            firstData[0].RelativeHumidity
          )}%`}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // styles
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

export default FirstTempCard;
