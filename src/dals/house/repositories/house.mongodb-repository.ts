import { HouseRepository } from "./house.repository.js";
import { House, Review } from "../house.model.js";

export const mongoDBRepository: HouseRepository = {
  getHouseList: async () => {
    throw new Error("Not implemented");
  },
  getHouse: async (id: string) => {
    throw new Error("Not implemented");
  },
  saveReview: async (id: string, review: Review) => {
    throw new Error("Not implemented");
  },
};
