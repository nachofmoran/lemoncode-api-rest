import express from "express";
import cors from "cors";
import { ENV } from "../constants/index.js";

export const createRestApiServer = () => {
  const app = express();
  app.use(express.json());

  return app;
};
