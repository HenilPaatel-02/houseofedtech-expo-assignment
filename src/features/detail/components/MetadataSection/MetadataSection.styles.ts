import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: { paddingHorizontal: 20, paddingVertical: 20 },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 18,
  },
  item: { flexDirection: "row", alignItems: "center" },
  value: { marginLeft: 6, fontWeight: "600" },
  genresContainer: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  chip: { marginBottom: 8 },
});
