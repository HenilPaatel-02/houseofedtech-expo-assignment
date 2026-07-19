import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: { height: 420, marginBottom: 12 },
  image: { width: "100%", height: "100%" },
  overlay: {
    ...StyleSheet.absoluteFill,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  featuredChip: { alignSelf: "flex-start", marginBottom: 12 },
  title: { marginBottom: 10, fontWeight: "700" },
  metadataRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  separator: { marginHorizontal: 8 },
  actionRow: { flexDirection: "row", gap: 12 },
  playButton: { flex: 1 },
  listButton: { flex: 1 },
});
