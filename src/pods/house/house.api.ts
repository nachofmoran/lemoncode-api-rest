import { Router } from "express";
import { houseRepository } from "#dals/index.js";
import {
  mapHouseFromModelToApi,
  mapHouseListFromModelToApi,
  mapReviewFromApiToModel,
  mapReviewFromModelToApi,
} from "./house.mappers.js";

export const houseApi = Router();

houseApi
  .get("/", async (req, res, next) => {
    try {
      const page = Number(req.query.page);
      const pageSize = Number(req.query.pageSize);
      const houseList = await houseRepository.getHouseList(page, pageSize);
      res.send(mapHouseListFromModelToApi(houseList));
    } catch (error) {
      next(error);
    }
  })
  .get("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const houseId = Number(id);
      const house = await houseRepository.getHouse(id);
      res.send(mapHouseFromModelToApi(house));
    } catch (error) {
      next(error);
    }
  })
  .post("/review/:id", async (req, res, next) => {
    try {
      const review = mapReviewFromApiToModel(req.body);
      const { id } = req.params;
      const newReview = await houseRepository.saveReview(id, review);
      res.status(201).send(mapReviewFromModelToApi(newReview));
    } catch (error) {
      next(error);
    }
  });
