import { Router } from "express";
import { houseRepository } from "#dals/index.js";

export const houseApi = Router();

houseApi
  .get("/", async (req, res, next) => {
    try {
      const page = Number(req.query.page);
      const pageSize = Number(req.query.pageSize);
      let houseList = await houseRepository.getHouseList();

      if (page && pageSize) {
        const startIndex = (page - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize, houseList.length);
        houseList = houseList.slice(startIndex, endIndex);
      }
      res.send(houseList);
    } catch (error) {
      next(error);
    }
  })
  .get("/:id", async (req, res) => {
    const { id } = req.params;
    const houseId = Number(id);
    const house = await houseRepository.getHouse(id);
    res.send(house);
  })
  .post("/review/:id", async (req, res) => {
    const review = req.body;
    const { id } = req.params;
    const newReview = await houseRepository.saveReview(id, review);
    res.status(201).send(newReview);
  });
