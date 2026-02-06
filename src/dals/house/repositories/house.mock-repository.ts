import { HouseRepository } from "./house.repository.js";
import { House, Review } from "../house.model.js";
import { db } from "../../mock-data.js";
import { ObjectId } from "mongodb";

const updateReview = (id: string, review: Review) => {
  db.houses = db.houses.map((b) => {
    if (b._id.toHexString() === id) {
      b.reviews.push(review);
    }
    return b;
  });
  return review;
};

const paginateHouseList = (
  houseList: House[],
  page: number,
  pageSize: number
): House[] => {
  let paginatedHouseList = [...houseList];

  if (page && pageSize) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, paginatedHouseList.length);
    paginatedHouseList = paginatedHouseList.slice(startIndex, endIndex);
  }

  return paginatedHouseList;
};

const updateHouseDetail = (id: string, partialHouse: Partial<House>): House => {
  let updatedHouse: House = null;

  db.houses = db.houses.map((house) => {
    if (house._id.toHexString() === id) {
      const { reviews: _, ...safePartialHouse } = partialHouse;

      updatedHouse = {
        ...house,
        ...safePartialHouse,
        address: {
          ...house.address,
          ...(safePartialHouse.address ?? {}),
        },
        reviews: house.reviews,
      };

      return updatedHouse;
    }

    return house;
  });

  return updatedHouse;
};

export const mockRepository: HouseRepository = {
  getHouseList: async (page?: number, pageSize?: number) =>
    paginateHouseList(db.houses, page, pageSize),
  getHouse: async (id: string) =>
    db.houses.find((b) => b._id.toHexString() === id),
  saveReview: async (id: string, review: Review) => {
    if (db.houses.some((b) => b._id.toHexString() === id))
      return updateReview(id, review);
    return null;
  },
  updateHouse: async (id: string, house: Partial<House>) => {
    if (!db.houses.some((b) => b._id.toHexString() === id)) {
      return null;
    }
    return updateHouseDetail(id, house);
  },
};
