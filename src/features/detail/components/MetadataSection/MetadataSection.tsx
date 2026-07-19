import React, { memo } from "react";
import { View } from "react-native";
import { Chip, Text, useTheme } from "react-native-paper";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { MetadataSectionProps } from "./MetadataSection.types";
import { styles } from "./MetadataSection.styles";
function MetadataSection({ movie, quality = "HD" }: MetadataSectionProps) {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.infoRow}>
        <View style={styles.item}>
          <MaterialCommunityIcons name="star" size={18} color="#FFD54F" />
          <Text style={[styles.value, { color: theme.colors.onSurface }]}>
            {movie.rating}
          </Text>
        </View>
        <View style={styles.item}>
          <MaterialCommunityIcons
            name="calendar"
            size={18}
            color={theme.colors.primary}
          />
          <Text style={[styles.value, { color: theme.colors.onSurface }]}>
            {movie.year}
          </Text>
        </View>
        <View style={styles.item}>
          <MaterialCommunityIcons
            name="clock-outline"
            size={18}
            color={theme.colors.primary}
          />
          <Text style={[styles.value, { color: theme.colors.onSurface }]}>
            {movie.duration}
          </Text>
        </View>
      </View>
      <View style={styles.genresContainer}>
        {movie.genre.map((item) => (
          <Chip key={item} compact style={styles.chip}>
            {item}
          </Chip>
        ))}
        <Chip compact style={styles.chip}>
          {quality}
        </Chip>
      </View>
    </View>
  );
}
export default memo(MetadataSection);
