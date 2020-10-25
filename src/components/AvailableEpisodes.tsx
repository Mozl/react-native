import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  availableWord: string;
  episodesWord: string;
  numberOfEpisodes: number;
}

export default class AvailableEpisodes extends Component<Props> {
  render() {
    if (!this.shouldRender()) {
      return null;
    }

    const { availableWord, episodesWord, numberOfEpisodes } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.bold}>{episodesWord}</Text>
        <Text>
          {" "}
          ({`${numberOfEpisodes}`} {availableWord})
        </Text>
      </View>
    );
  }

  private shouldRender() {
    const { availableWord, episodesWord, numberOfEpisodes } = this.props;

    return (
      Number.isInteger(numberOfEpisodes) &&
      numberOfEpisodes >= 0 &&
      typeof availableWord === "string" &&
      availableWord !== "" &&
      typeof episodesWord === "string" &&
      episodesWord !== ""
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bold: {
    fontWeight: "400",
  },
});
