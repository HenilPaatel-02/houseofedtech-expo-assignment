import { useCallback, useEffect, useState } from "react";
import { ProfileService } from "../services/profile.service";
import { Profile } from "../types/profile.types";
export function useProfile() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const loadProfile = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await ProfileService.getProfile();
      setProfile(data);
    } catch {
      setError("Failed to load profile.");
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    loadProfile();
  }, [loadProfile]);
  return { profile, loading, error, refresh: loadProfile };
}
