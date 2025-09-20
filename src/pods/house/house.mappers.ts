import * as model from "#dals/index.js";
import * as apiModel from "./house.api-model.js";

export const mapHouseFromModelToApi = (
  house: model.House
): apiModel.HouseApi => ({
  id: house._id,
  name: house.name,
  summary: house.summary,
  bedrooms: house.bedrooms,
  beds: house.beds,
  bathrooms: house.bathrooms,
  reviews: house.reviews,
});
