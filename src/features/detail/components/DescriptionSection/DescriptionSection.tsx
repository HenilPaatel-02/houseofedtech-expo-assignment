import React, { memo, useState } from "react";
import { Pressable, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { DescriptionSectionProps } from "./DescriptionSection.types";
import { styles } from "./DescriptionSection.styles";
function DescriptionSection({
  title = "About",
  description,
  collapsedLines = 3,
}: DescriptionSectionProps) {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);
  return (
    <View style={styles.container}>
      
      <Text
        variant="titleLarge"
        style={[styles.title, { color: theme.colors.onSurface }]}
      >
        
        {title}
      </Text>
      <Text
        variant="bodyMedium"
        numberOfLines={expanded ? undefined : collapsedLines}
        style={[styles.description, { color: theme.colors.onSurfaceVariant }]}
      >
        
        {description}
      </Text>
      <Pressable onPress={() => setExpanded(!expanded)}>
        
        <Text
          variant="labelLarge"
          style={[styles.readMore, { color: theme.colors.primary }]}
        >
          
          {expanded ? "Read Less" : "Read More"}
        </Text>
      </Pressable>
    </View>
  );
}
export default memo(DescriptionSection);
