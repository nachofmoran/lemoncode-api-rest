import {
  mapReviewFromModelToApi,
  mapHouseFromModelToApi,
  mapHouseListFromModelToApi,
  mapReviewFromApiToModel,
} from "./house.mappers.js";
import { ObjectId } from "mongodb";

describe("mapReviewFromModelToApi", () => {
  it("should map review model to API correctly", () => {
    const reviewModel = {
      _id: new ObjectId(),
      date: "2023-10-10T12:00:00Z",
      reviewer_name: "John",
      comments: "Great house",
    };

    const result = mapReviewFromModelToApi(reviewModel);

    expect(result).toEqual({
      id: reviewModel._id.toHexString(),
      date: new Date(reviewModel.date).toISOString(),
      reviewerName: "John",
      comments: "Great house",
    });
  });
});

describe("mapHouseFromModelToApi", () => {
  it("should map house model to API correctly", () => {
    const houseModel = {
      _id: new ObjectId(),
      name: "Cozy House",
      address: { street: "Main St" },
      summary: "Nice place",
      bedrooms: 3,
      beds: 4,
      bathrooms: 2,
      reviews: [
        {
          _id: new ObjectId(),
          date: "2023-10-10",
          reviewer_name: "Ana",
          comments: "Ok",
        },
      ],
    };

    const result = mapHouseFromModelToApi(houseModel);

    expect(result).toMatchObject({
      id: houseModel._id.toHexString(),
      name: "Cozy House",
      address: "Main St",
      summary: "Nice place",
      bedrooms: 3,
      beds: 4,
      bathrooms: 2,
    });

    expect(result.reviews).toHaveLength(1);
    expect(result.reviews?.[0]).toHaveProperty("reviewerName", "Ana");
  });

  it("should handle houses without reviews", () => {
    const houseModel = {
      _id: new ObjectId(),
      name: "Empty House",
      address: { street: "Nowhere" },
      summary: "",
      bedrooms: 1,
      beds: 1,
      bathrooms: 1,
      reviews: undefined,
    };

    const result = mapHouseFromModelToApi(houseModel);
    expect(result.reviews).toBeUndefined();
  });
});

describe("mapHouseListFromModelToApi", () => {
  it("should map house list correctly", () => {
    const houseList = [
      {
        _id: new ObjectId(),
        name: "Loft",
        summary: "Nice loft",
        address: { street: "Market street" },
        bedrooms: 2,
        beds: 3,
        bathrooms: 1,
        reviews: [],
      },
      {
        _id: new ObjectId(),
        name: "Appartment",
        summary: "1 bedroom appartment",
        address: { street: "Baker street" },
        bedrooms: 1,
        beds: 1,
        bathrooms: 1,
        reviews: [],
      },
    ];

    const result = mapHouseListFromModelToApi(houseList);

    expect(result).toHaveLength(2);
    expect(result[0].id).toBeDefined();
    expect(result[1].id).toBeDefined();
  });
});

describe("mapReviewFromApiToModel", () => {
  it("should map API review to model correctly", () => {
    const reviewApi = {
      id: new ObjectId().toHexString(),
      date: new Date("2020-01-01").toISOString(),
      reviewerName: "Mike",
      comments: "Nice",
    };

    const result = mapReviewFromApiToModel(reviewApi);

    expect(result).toMatchObject({
      reviewer_name: "Mike",
      comments: "Nice",
    });

    expect(result._id).toBeInstanceOf(ObjectId);
    expect(result.date).toBeInstanceOf(Date);
  });
});
