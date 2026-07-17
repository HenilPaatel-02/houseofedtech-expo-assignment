import React, { memo } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { ActionButtonsProps } from "./ActionButtons.types";
import { styles } from "./ActionButtons.styles";
function ActionButtons({
  isFavourite = false,
  onPlay,
  onAddToList,
  onFavourite,
  onShare,
}: ActionButtonsProps) {
  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        icon="play"
        style={styles.playButton}
        onPress={onPlay}
      >
        Play Now
      </Button>
      <View style={styles.secondaryRow}>
        <Button
          mode="outlined"
          icon="plus"
          style={styles.secondaryButton}
          onPress={onAddToList}
        >
          My List
        </Button>
        <Button
          mode="outlined"
          icon={isFavourite ? "heart" : "heart-outline"}
          style={styles.secondaryButton}
          onPress={onFavourite}
        >
          Favorite
        </Button>
        <Button
          mode="outlined"
          icon="share-variant-outline"
          style={styles.secondaryButton}
          onPress={onShare}
        >
          Share
        </Button>
      </View>
    </View>
  );
}
export default memo(ActionButtons);
