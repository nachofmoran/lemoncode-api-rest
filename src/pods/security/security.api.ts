import { Router } from "express";
import { UserRepository } from "#dals/index.js";
import jwt from "jsonwebtoken";
import { UserSession } from "#core/models/index.js";
import { ENV } from "#core/constants/index.js";

export const securityApi = Router();

securityApi
  .post("/login", async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await UserRepository.getUser(email, password);
      if (user) {
        const userSession: UserSession = {
          id: user._id.toHexString(),
          role: user.role,
        };
        const token = jwt.sign(userSession, ENV.AUTH_SECRET, {
          expiresIn: "1d",
          algorithm: "HS256",
        });
        res.send(`Bearer ${token}`);
      } else {
        res.sendStatus(401);
      }
    } catch (error) {
      next(error);
    }
  })
  .post("/logout", async (req, res) => {
    res.sendStatus(200);
  });
