import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  leftContainer: { flexDirection: "row", alignItems: "center", flex: 1 },
  rightContainer: { flexDirection: "row", alignItems: "center" },
  title: { marginLeft: 12, fontWeight: "700" },
  iconButton: { marginLeft: 8 },
});
