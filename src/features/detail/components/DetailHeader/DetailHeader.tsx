import React, { memo } from "react";
import { View } from "react-native";
import { IconButton, Text, useTheme } from "react-native-paper";
import { DetailHeaderProps } from "./DetailHeader.types";
import { styles } from "./DetailHeader.styles";
function DetailHeader({
  title,
  showTitle = false,
  isFavourite = false,
  onBack,
  onShare,
  onFavourite,
}: DetailHeaderProps) {
  const theme = useTheme();
  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      {" "}
      <View style={styles.leftContainer}>
        {" "}
        <IconButton icon="arrow-left" onPress={onBack} />{" "}
        {showTitle && (
          <Text
            variant="titleMedium"
            numberOfLines={1}
            style={[styles.title, { color: theme.colors.onBackground }]}
          >
            {" "}
            {title}{" "}
          </Text>
        )}{" "}
      </View>{" "}
      <View style={styles.rightContainer}>
        {" "}
        <IconButton
          icon={isFavourite ? "heart" : "heart-outline"}
          onPress={onFavourite}
        />{" "}
        <IconButton icon="share-variant-outline" onPress={onShare} />{" "}
      </View>{" "}
    </View>
  );
}
export default memo(DetailHeader);
