import { useCallback, useState } from "react";
import * as Haptics from "expo-haptics";
export function useRefresh(onRefreshAction: () => Promise<void>) {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(async () => {
    if (refreshing) {
      return;
    }
    setRefreshing(true);
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      await onRefreshAction();
    } finally {
      setRefreshing(false);
    }
  }, [onRefreshAction, refreshing]);
  return { refreshing, onRefresh };
}
