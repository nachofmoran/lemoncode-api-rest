import { House, Review } from "../house.model.js";

export interface HouseRepository {
  getHouseList: (page?: number, pageSize?: number) => Promise<House[]>;
  getHouse: (id: string) => Promise<House>;
  saveReview: (id: string, review: Review) => Promise<Review>;
  updateHouse: (id: string, house: Partial<House>) => Promise<House>;
}
