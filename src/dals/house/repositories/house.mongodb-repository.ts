import { HouseRepository } from "./house.repository.js";
import { House, Review } from "../house.model.js";
import { dbServer } from "#core/servers/index.js";
import { ObjectId } from "mongodb";

export const mongoDBRepository: HouseRepository = {
  getHouseList: async (page?: number, pageSize?: number) => {
    const skip = Boolean(page) ? (page - 1) * pageSize : 0;
    const limit = pageSize ?? 0;
    return await dbServer.db
      .collection<House>("listingsAndReviews")
      .find(
        {},
        {
          projection: {
            name: 1,
            address: 1,
            summary: 1,
            bedrooms: 1,
            beds: 1,
            bathrooms: 1,
            reviews: 1,
          },
        }
      )
      .skip(skip)
      .limit(limit)
      .toArray();
  },
  getHouse: async (id: string) => {
    return await dbServer.db.collection<House>("listingsAndReviews").findOne(
      {
        _id: new ObjectId(id),
      },
      {
        projection: {
          name: 1,
          address: 1,
          summary: 1,
          bedrooms: 1,
          beds: 1,
          bathrooms: 1,
          reviews: 1,
        },
      }
    );
  },
  saveReview: async (id: string, review: Review) => {
    const reviewToInsert: Review = {
      _id: new ObjectId().toHexString(),
      date: new Date(),
      reviewer_name: review.reviewer_name,
      comments: review.comments,
    };

    const result = await dbServer.db
      .collection<House>("listingsAndReviews")
      .updateOne(
        {
          _id: new ObjectId(id),
        },
        {
          $push: { reviews: reviewToInsert },
        }
      );

    if (result.modifiedCount === 0) {
      throw new Error(`House with id ${id} not found`);
    }
    return reviewToInsert;
  },
};
