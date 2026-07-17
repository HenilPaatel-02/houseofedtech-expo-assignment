import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 420,
    marginBottom: 24,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  overlay: {
    ...StyleSheet.absoluteFill,
    justifyContent: "flex-end",
    padding: 20,
  },

  badge: {
    marginBottom: 10,
  },

  title: {
    fontWeight: "700",
    marginBottom: 8,
  },

  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  actions: {
    flexDirection: "row",
    gap: 12,
  },

  playButton: {
    flex: 1,
  },

  listButton: {
    flex: 1,
  },
});
