import React, { memo } from "react";
import { View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Chip, Text, useTheme } from "react-native-paper";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { DetailHeroBannerProps } from "./DetailHeroBanner.types";
import { styles } from "./DetailHeroBanner.styles";
function DetailHeroBanner({
  movie,
  onPlay,
  onAddToList,
}: DetailHeroBannerProps) {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Image
        source={movie.banner}
        style={styles.image}
        contentFit="cover"
        transition={300}
      />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.90)"]}
        style={styles.overlay}
      >
        <Chip icon="fire" style={styles.featuredChip}>
          Featured
        </Chip>
        <Text
          variant="headlineMedium"
          style={[styles.title, { color: "#FFFFFF" }]}
        >
          {movie.title}
        </Text>
        <View style={styles.metadataRow}>
          <MaterialCommunityIcons name="star" size={18} color="#FFD54F" />
          <Text style={{ color: "#FFFFFF", marginLeft: 4 }}>
            {movie.rating}
          </Text>
          <Text style={[styles.separator, { color: "#FFFFFF" }]}> • </Text>
          <Text style={{ color: "#FFFFFF" }}> {movie.genre.join(", ")} </Text>
          <Text style={[styles.separator, { color: "#FFFFFF" }]}> • </Text>
          <Text style={{ color: "#FFFFFF" }}> {movie.year} </Text>
          <Text style={[styles.separator, { color: "#FFFFFF" }]}> • </Text>
          <Text style={{ color: "#FFFFFF" }}> {movie.duration} </Text>
        </View>
        <View style={styles.actionRow}>
          <Button
            mode="contained"
            icon="play"
            style={styles.playButton}
            onPress={onPlay}
          >
            Play
          </Button>
          <Button
            mode="outlined"
            icon="plus"
            textColor="#FFFFFF"
            style={styles.listButton}
            onPress={onAddToList}
          >
            My List
          </Button>
        </View>
      </LinearGradient>
    </View>
  );
}
export default memo(DetailHeroBanner);
