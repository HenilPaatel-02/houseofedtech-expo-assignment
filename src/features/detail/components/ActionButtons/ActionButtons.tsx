import React, { memo } from "react";
import { Text, View } from "react-native";
import { Button, IconButton } from "react-native-paper";
import { ActionButtonsProps } from "./ActionButtons.types";
import { styles } from "./ActionButtons.styles";

import AnimatedButton from "../../../../components/common/AnimatedButton";
function ActionButtons({
  isFavourite = false,
  onPlay,
  onAddToList,
  onFavourite,
  onShare,
}: ActionButtonsProps) {
  return (
    <View style={styles.container}>
      <AnimatedButton onPress={onPlay}>
        <Button mode="contained" icon="play" style={styles.playButton}>
          Play
        </Button>
      </AnimatedButton>

      <View style={styles.secondaryRow}>
        <AnimatedButton onPress={onAddToList}>
          <Button mode="outlined" icon="plus" style={styles.secondaryButton}>
            My List
          </Button>
        </AnimatedButton>

        <AnimatedButton onPress={onFavourite}>
          <IconButton icon={isFavourite ? "heart" : "heart-outline"} />
        </AnimatedButton>
        <AnimatedButton onPress={onShare}>
          <IconButton icon="share-variant-outline" />
        </AnimatedButton>
      </View>
    </View>
  );
}
export default memo(ActionButtons);
