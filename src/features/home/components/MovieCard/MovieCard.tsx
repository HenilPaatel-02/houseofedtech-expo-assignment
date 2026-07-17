import React, { memo } from "react";

import { Pressable, View } from "react-native";

import { Image } from "expo-image";

import { Text, useTheme } from "react-native-paper";

import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./MovieCard.styles";

import { MovieCardProps } from "./MovieCard.types";

function MovieCard({
  movie,

  onPress,
}: MovieCardProps) {
  const theme = useTheme();

  return (
    <Pressable style={styles.container} onPress={() => onPress?.(movie)}>
      <Image
        source={movie.poster}
        style={styles.image}
        contentFit="cover"
        transition={300}
      />

      <Text
        variant="titleMedium"
        numberOfLines={1}
        style={[
          styles.title,

          {
            color: theme.colors.onSurface,
          },
        ]}
      >
        {movie.title}
      </Text>

      <View style={styles.infoRow}>
        <MaterialIcons name="star" size={16} color="#FFC107" />

        <Text
          variant="bodySmall"
          style={{
            marginLeft: 4,

            color: theme.colors.onSurfaceVariant,
          }}
        >
          {movie.rating}
        </Text>
      </View>

      <Text
        variant="bodySmall"
        style={[
          styles.genre,

          {
            color: theme.colors.onSurfaceVariant,
          },
        ]}
      >
        {movie.genre}
      </Text>
    </Pressable>
  );
}

export default memo(MovieCard);
