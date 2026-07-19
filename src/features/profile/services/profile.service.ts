import { delay } from "../../../services/delay";
import { profile } from "../data/profile.mock";
import { Profile } from "../types/profile.types";

export const ProfileService = {
  async getProfile(): Promise<Profile> {
    await delay(800);
    return profile;
  },
};
