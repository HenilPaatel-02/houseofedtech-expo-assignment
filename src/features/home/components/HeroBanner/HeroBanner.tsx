import React, { memo } from "react";
import { View } from "react-native";

import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";

import { Button, Chip, Text, useTheme } from "react-native-paper";

import { MaterialIcons } from "@expo/vector-icons";

import { HeroBannerProps } from "./HeroBanner.types";
import { styles } from "./HeroBanner.styles";

function HeroBanner({ movie, onPlay, onAddToList }: HeroBannerProps) {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Image
        source={movie.banner}
        style={styles.image}
        contentFit="cover"
        transition={400}
      />

      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.85)"]}
        style={styles.overlay}
      >
        <Chip icon="star" style={styles.badge}>
          Featured
        </Chip>

        <Text
          variant="headlineMedium"
          style={[
            styles.title,
            {
              color: theme.colors.onPrimary,
            },
          ]}
        >
          {movie.title}
        </Text>

        <View style={styles.metaRow}>
          <MaterialIcons name="star" color="#FFD54F" size={18} />

          <Text
            style={{
              color: "white",
              marginLeft: 6,
            }}
          >
            {movie.rating}
          </Text>

          <Text
            style={{
              color: "white",
              marginHorizontal: 10,
            }}
          >
            •
          </Text>

          <Text style={{ color: "white" }}>{movie.genre}</Text>

          <Text
            style={{
              color: "white",
              marginHorizontal: 10,
            }}
          >
            •
          </Text>

          <Text style={{ color: "white" }}>{movie.year}</Text>
        </View>

        <View style={styles.actions}>
          <Button
            mode="contained"
            icon="play"
            style={styles.playButton}
            onPress={() => onPlay?.(movie)}
          >
            Play
          </Button>

          <Button
            mode="outlined"
            icon="plus"
            textColor="white"
            style={styles.listButton}
            onPress={() => onAddToList?.(movie)}
          >
            My List
          </Button>
        </View>
      </LinearGradient>
    </View>
  );
}

export default memo(HeroBanner);
