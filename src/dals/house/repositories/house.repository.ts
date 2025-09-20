import { House, Review } from "../house.model.js";

export interface HouseRepository {
  getHouseList: () => Promise<House[]>;
  getHouse: (id: string) => Promise<House>;
  saveReview: (id: string, review: Review) => Promise<Review>;
}
