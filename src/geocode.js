import React from "react";
import "react-native-gesture-handler";

import {
  ActivityIndicator,
  Text,
  Button,
  Platform,
  StyleSheet,
  View,
} from "react-native";
import Constants from "expo-constants";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import Geocoder from "react-native-geocoding";
import Touchable from "react-native-platform-touchable";

export default class Geocode extends React.Component {
  static navigationOptions = {
    title: "Geocoding",
  };

  state = {
    selectedExample: EXAMPLES[0],
    result: "",
    inProgress: false,
  };

  componentDidMount() {
    Permissions.askAsync(Permissions.LOCATION);
  }
  render() {
    let { selectedExample } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Select a location</Text>
        </View>

        <View style={styles.examplesContainer}>
          {EXAMPLES.map(this._renderExample)}
        </View>

        <View style={styles.separator} />

        <View style={styles.actionContainer}>
          <Button
            onPress={this._attemptGeocodeAsync}
            title="Geocode"
            disabled={typeof selectedExample !== "string"}
            style={styles.button}
          />
          <Button
            onPress={this._attemptReverseGeocodeAsync}
            title="Reverse Geocode"
            disabled={typeof selectedExample !== "object"}
            style={styles.button}
          />
        </View>

        <View style={styles.separator} />

        {this._maybeRenderResult()}
      </View>
    );
  }
  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied",
      });
    }
    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };
  _attemptReverseGeocodeAsync = async () => {
    this.setState({ inProgress: true });
    try {
      let result = await Location.reverseGeocodeAsync(
        this.state.selectedExample
      );
      this.setState({ result });
    } catch (e) {
      this.setState({ error: e });
    } finally {
      this.setState({ inProgress: false });
    }
  };
  _attemptGeocodeAsync = async () => {
    this.setState({ inProgress: true, error: null });
    try {
      let result = await Location.geocodeAsync(this.state.selectedExample);
      this.setState({ result });
    } catch (e) {
      this.setState({ error: e.message });
    } finally {
      this.setState({ inProgress: false });
    }
  };
}
