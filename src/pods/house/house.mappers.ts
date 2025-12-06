import * as model from "#dals/index.js";
import * as apiModel from "./house.api-model.js";
import { ObjectId } from "mongodb";

export const mapReviewFromModelToApi = (
  review: model.Review
): apiModel.ReviewApi => ({
  id: String(review._id),
  date: new Date(review.date).toISOString(),
  reviewerName: review.reviewer_name,
  comments: review.comments,
});

export const mapHouseFromModelToApi = (
  house: model.House
): apiModel.HouseApi => ({
  id: house._id.toHexString(),
  name: house.name,
  address: house.address.street,
  summary: house.summary,
  bedrooms: house.bedrooms,
  beds: house.beds,
  bathrooms: house.bathrooms,
  reviews: house.reviews?.map(mapReviewFromModelToApi),
});

export const mapHouseListFromModelToApi = (
  houseList: model.House[]
): apiModel.HouseApi[] => houseList.map(mapHouseFromModelToApi);

export const mapReviewFromApiToModel = (
  review: apiModel.ReviewApi
): model.Review => ({
  _id: new ObjectId(review.id),
  date: new Date(),
  reviewer_name: review.reviewerName,
  comments: review.comments,
});
