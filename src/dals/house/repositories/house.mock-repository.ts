import { HouseRepository } from "./house.repository.js";
import { House, Review } from "../house.model.js";
import { db } from "../../mock-data.js";

const updateHouse = (id: string, review: Review) => {
  db.houses = db.houses.map((b) => {
    if (b._id === id) {
      b.reviews.push(review);
    }
    return b;
  });
  return review;
};

export const mockRepository: HouseRepository = {
  getHouseList: async () => db.houses,
  getHouse: async (id: string) => db.houses.find((b) => b._id === id),
  saveReview: async (id: string, review: Review) => {
    if (db.houses.some((b) => b._id === id)) return updateHouse(id, review);
    return null;
  },
};
